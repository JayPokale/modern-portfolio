import TitleGSAP from "./helper/TitleGSAP";
import gsap, { Power4 } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { onMount } from "solid-js";
import { createRouteAction } from "solid-start";
import { Form } from "solid-start/data/Form";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);
  onMount(() => {
    gsap.to("#contactform", {
      opacity: 1,
      duration: 2,
      ease: Power4.easeOut,
      scrollTrigger: {
        trigger: "#contactform",
        start: "top 70%",
        toggleActions: "play reverse play reverse",
      },
    });
  });

  const [_, { Form }] = createRouteAction(async (formData: FormData) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
  });

  return (
    <main class="min-h-[calc(min(100vh,100vw))] flex flex-col">
      <TitleGSAP id="contact" title="Contact" />
      <div class="h-full flex items-center flex-1">
        <Form
          id="contactform"
          action="#"
          class="space-y-8 py-8 lg:py-16 px-4 mx-auto w-full max-w-screen-sm opacity-0"
        >
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
              placeholder="Let us know how we can help you"
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
            class="py-2 px-4 text-sm rounded-lg bg-heading hover:bg-transparent border-2 border-heading outline-none"
          >
            Send message
          </button>
        </Form>
      </div>
    </main>
  );
};

export default Contact;
