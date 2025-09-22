import { useState } from "react";
import { FaEnvelope, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoLink = `mailto:osc@vitap.ac.in?subject=Message from ${name}&body=${message}`;

  const handleSubmit = (e) => {
    if (!name || !email || !message) {
      e.preventDefault();
      alert("Please fill in all fields before sending.");
    }
  };

  return (
    <section className="bg-gradient-to-br from-purple-800 to-fuchsia-600">
      <div className="mx-auto max-w-screen-xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-5">
          {/* Left Side: Contact Info */}
          <div className="lg:col-span-2 lg:py-12 text-white !important">
            <h1 className="text-2xl font-extrabold sm:text-4xl">
              Contact Us.
            </h1>
            <p className="mt-2 text-sm max-w-xl">
              Have something to discuss or a brilliant idea to share? Feel free to contact us! Our virtual doors are always open, waiting to hear your thoughts. Drop us a line, and let's make things happen together.
            </p>
            <div className="mt-8">
              <a href={`mailto:osc@vitap.ac.in`} className="text-2xl font-bold" rel="noreferrer" target="_blank">
                Email: osc@vitap.ac.in
              </a>
              <address className="not-italic mt-2 text-sm max-w-xl">
                Mailing Address: VIT-AP University, Beside AP Secretariat, Near Vijayawada, Andhra Pradesh, India - 522241.
              </address>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="rounded-lg bg-white p-6 shadow-lg lg:col-span-3">
            <form className="space-y-4">
              <h3 className="text-xl font-bold text-zinc-700 sm:text-2xl">
                Want to tell us Something?
              </h3>
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-lg border-gray-300 p-3 text-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Name"
                  type="text"
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                    <FaEnvelope />
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-lg border-gray-300 p-3 text-sm pl-10 focus:border-purple-500 focus:ring-purple-500"
                    placeholder="name@mail.com"
                    type="email"
                    id="email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full rounded-lg border-gray-300 p-3 text-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Message"
                  rows="5"
                  id="message"
                />
              </div>
              <a
                href={mailtoLink}
                onClick={handleSubmit}
                className="inline-flex items-center justify-center w-full rounded-lg bg-purple-600 hover:bg-purple-700 px-5 py-3 text-sm font-medium text-white sm:w-auto transition-colors"
              >
                <FaPaperPlane className="h-4 w-4 mr-2" />
                Send Message
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
