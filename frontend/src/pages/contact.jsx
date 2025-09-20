import { useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:osc@vitap.ac.in?subject=Message from ${name}&body=${message}`;

  const validateForm = (e) => {
    if (!name || !email || !message) {
      e.preventDefault();
      alert("All fields are required!");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      e.preventDefault();
      alert("Please enter a valid email address!");
    }
  };

  return (
    <>
      <Navbar />

      <section className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          
          {/* Left Section */}
          <div className="lg:col-span-2 lg:py-12">
            <h1 className="text-2xl font-extrabold text-white sm:text-4xl">
              Contact Us.
            </h1>
            <p className="max-w-xl text-xs mt-2 sm:text-sm text-white">
              Have something to discuss or a brilliant idea to share? Feel free to
              contact us! Our virtual doors are always open. Drop us a line, and let's make things happen together.
            </p>

            <div className="mt-8">
              <a
                href="mailto:osc@vitap.ac.in"
                className="text-2xl font-bold text-white"
                target="_blank"
                rel="noreferrer"
              >
                Email: osc@vitap.ac.in
              </a>
              <address className="not-italic max-w-xl text-xs mt-2 sm:text-sm text-white">
                Mailing Address: VIT-AP University, Beside AP Secretariat, Near
                Vijayawada, Andhra Pradesh, India - 522241.
              </address>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="rounded-lg bg-white p-4 shadow-lg lg:col-span-3 lg:p-6 hover:scale-105 transition-transform">
            <form className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-700 sm:text-2xl">
                Want to tell us Something?
              </h3>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                placeholder="Name"
                type="text"
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                placeholder="name@mail.com"
              />

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border-gray-300 p-3 text-sm"
                placeholder="Message"
                rows="5"
              />

              <a
                href={mailtoLink}
                onClick={validateForm}
                className="inline-block w-full text-sm rounded-lg bg-purple-600 hover:bg-purple-900 px-2 py-2 font-medium text-white sm:w-auto"
              >
                <div className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                  </svg>
                  <span className="ml-2">Send Message</span>
                </div>
              </a>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
