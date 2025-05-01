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
          Let&amp;apos;s connect and explore collaboration opportunities. Feel
          free to reach out via email or phone.
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

        {/* Social Links with adjusted colors */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/rejozmathew/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-gray-600 transition duration-300"
          >
            {/* LinkedIn Icon */}
            <svg
              className="h-8 w-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
          {/* Placeholder for GitHub Link */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition duration-300"> */}
          {/* GitHub Icon */}
          {/* <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">...</svg> */}
          {/* <span className="sr-only">GitHub</span> */}
          {/* </a> */}
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
