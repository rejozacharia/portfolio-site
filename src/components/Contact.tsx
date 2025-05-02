import React from "react";

const Contact: React.FC = () => {
  return (
    // Light theme: White background, dark text
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto max-w-2xl px-4 text-center">
        {/* Unified H2 style */}
        <h2 className="border-primary mb-6 border-b-2 pb-2 text-center text-3xl font-bold text-gray-900">
          Contact Me
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          Let&apos;s connect and explore collaboration opportunities. Feel free
          to reach out via email or phone.
        </p>

        <div className="mb-8 space-y-4">
          {/* Dark text, blue hover for links */}
          <p className="text-gray-800">
            <a
              href="mailto:rejozacharia@gmail.com"
              className="hover:text-primary transition duration-300"
            >
              📧 rejozacharia@gmail.com
            </a>
          </p>
          <p className="text-gray-800">
            <a
              href="tel:+17074567356"
              className="hover:text-primary transition duration-300"
            >
              📞 (707) 456-7356
            </a>
          </p>
        </div>

        {/* Optional: Placeholder for a simple contact form */}
        {/* <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Or Send a Message</h3>
          <form> ... Contact form elements ... </form>
        </div> */}
      </div>
    </section>
  );
};

export default Contact;
