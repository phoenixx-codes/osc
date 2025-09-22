import React from 'react';

export default function EventsPageHeader() {
  return (
    <div className="w-full max-w-screen-xl py-8 px-6 lg:px-8 sm:pt-24">
      <div className="flex items-center justify-between">
        <section>
          <div className="mx-auto max-w-screen-xl pt-16 sm:pt-0 lg:flex lg:items-center">
            <div className="max-w-xl">
              <h1 className="text-2xl font-extrabold text-white sm:text-4xl">
                Our Events
              </h1>
              <p className="mt-2 text-md/relaxed max-w-sm text-white">
                Lorem ipsum dolor sit, amet consectetur.
              </p>
            </div>
          </div>
        </section>
        <section className="hidden md:block">
          <div>
            <a
              href="#_"
              className="mt-5 relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
            >
              <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-cyan-500 via-teal-500 to-blue-500 group-hover:opacity-100" />
              {/* Top glass gradient */}
              <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3" />
              {/* Bottom gradient */}
              <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5" />
              {/* Left gradient */}
              <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5" />
              {/* Right gradient */}
              <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5" />
              <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10" />
              <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56 opacity-5" />
              <span className="relative flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                </svg>
                <span className="ml-2 text-xs sm:text-md">RHS PLACE HOLDER</span>
              </span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}