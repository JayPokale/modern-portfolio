import TitleGSAP from "./helper/TitleGSAP";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";
import nodemailer from "nodemailer";
import { createServerAction$ } from "solid-start/server";

const Contact = () => {
  let contactForm!: HTMLFormElement;

  const [sending, { Form }] = createServerAction$(
    async (formData: FormData) => {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const subject = formData.get("subject") as string;
      const message = formData.get("message") as string;

      return new Promise((resolve, reject) => {
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
          resolve(!!error);
        });
      });
    }
  );

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
          <div>
            <label for="name" class="mb-2 block text-sm font-medium">
              Your name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              class="shadow-sm text-sm rounded-lg outline-none w-full p-2.5 bg-white/5 border-2 border-transparent focus:border-heading"
              placeholder="Binod"
              required
            />
          </div>
          <div>
            <label for="email" class="mb-2 block text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              class="shadow-sm text-sm rounded-lg outline-none w-full p-2.5 bg-white/5 border-2 border-transparent focus:border-heading"
              placeholder="name@email.com"
              required
            />
          </div>
          <div>
            <label for="subject" class="mb-2 block text-sm font-medium">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              class="shadow-sm text-sm rounded-lg outline-none w-full p-2.5 bg-white/5 border-2 border-transparent focus:border-heading"
              placeholder="Let us know how I can help you"
              required
            />
          </div>
          <div class="sm:col-span-2">
            <label for="message" class="mb-2 block text-sm font-medium">
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              class="shadow-sm text-sm rounded-lg outline-none w-full p-2.5 bg-white/5 border-2 border-transparent focus:border-heading"
              placeholder="Leave a comment..."
              required
            />
          </div>
          <button
            type="submit"
            class="py-2 px-4 text-sm rounded-lg bg-heading hover:bg-transparent border-2 border-heading outline-none disabled:bg-transparent disabled:cursor-wait"
            disabled={sending.pending}
          >
            {sending.pending ? "Sending..." : "Send message"}
          </button>
        </Form>
      </div>
    </main>
  );
};

export default Contact;
