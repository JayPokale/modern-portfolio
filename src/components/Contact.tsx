import TitleGSAP from "./helper/TitleGSAP";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { createEffect, onMount } from "solid-js";
import nodemailer from "nodemailer";
import { createServerAction$ } from "solid-start/server";

type inputProps = {
  text: string;
  name: string;
  placeholder: string;
};

const inputClass =
  "shadow-sm text-sm rounded-lg outline-none w-full p-2.5 bg-secondary/5 border-2 border-transparent focus:border-primary";

const Input = ({ text, name, placeholder }: inputProps) => {
  return (
    <div>
      <label for={name} class="mb-2 block text-sm font-medium">
        {text}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        class={inputClass}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

const Contact = () => {
  let contactForm!: HTMLFormElement;

  const [sending, { Form }] = createServerAction$(
    async (formData: FormData) => {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      let res = "Some error occured";

      await new Promise((resolve, reject) => {
        try {
          var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
              user: import.meta.env.VITE_NODEMAILER_USER,
              pass: import.meta.env.VITE_NODEMAILER_PASS,
            },
          });

          var mailOptions = {
            from: `${name} <${email}> ${email}`,
            to: "jay.pokale.35@gmail.com",
            subject: subject,
            text: message,
          };

          transporter.sendMail(mailOptions, (error) => {
            if (!error) res = "Mail Sent";
            resolve(!!error);
          });
        } catch {
          reject();
        }
      });

      return res;
    }
  );

  createEffect(() => {
    if (sending.result) {
      contactForm.reset();
      alert(sending.result);
    }
  });

  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to(contactForm, {
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: contactForm,
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  return (
    <main class="min-h-[calc(min(100vh,100vw))] flex flex-col">
      <TitleGSAP title="Contact" />
      <div class="h-full flex items-center flex-1">
        <Form
          ref={contactForm}
          action="#"
          class="space-y-8 py-8 lg:py-16 px-4 mx-auto w-full max-w-screen-sm opacity-0"
        >
          <Input text="Your Name" name="name" placeholder="Binod" />
          <Input text="Your Email" name="email" placeholder="name@email.com" />
          <Input
            text="Subject"
            name="subject"
            placeholder="Let us know how I can help you"
          />
          <div class="sm:col-span-2">
            <label for="message" class="mb-2 block text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class={inputClass}
              placeholder="Leave a comment..."
              required
            />
          </div>
          <input
            type="submit"
            class="py-2 px-4 text-sm rounded-lg text-primary border-2 border-primary outline-none cursor-pointer duration-100 hover:bg-primary/10 hover:border-transparent disabled:bg-transparent disabled:cursor-wait"
            disabled={sending.pending}
            value={sending.pending ? "Sending..." : "Send message"}
          />
        </Form>
      </div>
    </main>
  );
};

export default Contact;
