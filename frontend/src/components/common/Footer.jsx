import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-teal-600">
            {/* The SVG for the logo would go here. I've used a placeholder for simplicity. */}
            <svg height="50" viewBox="0 0 100 50">
              <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fontSize="12" fill="currentColor">
                OSC Full Logo
              </text>
            </svg>
          </div>

          <ul className="flex justify-center items-center gap-6 mt-8 sm:mt-0">
            <li>
              <a
                href="https://www.linkedin.com/company/oscvitap/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 flex items-center"
              >
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="w-6 h-6 text-gray-700 dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/osc.vitap/"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75 flex items-center"
              >
                <span className="sr-only">Instagram</span>
                <FaInstagram className="w-6 h-6 text-gray-700 dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/osc_vitap"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Twitter</span>
                <FaTwitter className="w-6 h-6 text-gray-700 dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/osc-vitap"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">GitHub</span>
                <FaGithub className="w-6 h-6 text-gray-800 dark:text-white" />
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/@opensourcecommunityvit-ap6954"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">YouTube</span>
                <FaYoutube className="w-6 h-6 text-gray-700 dark:text-white" />
              </a>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-8 pt-8 border-t border-gray-100 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <p className="font-medium text-gray-900">About Us</p>
            <nav aria-label="Footer Navigation - Services" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="https://community.mozilla.org/en/groups/open-source-community/"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Mozilla Community Portal
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.mozilla.org/en-US/about/governance/policies/participation/"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Community Participation Guidelines
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                  >
                    EB Openings
                  </a>
                </li>
                <li>
                  <a
                    href="/coming-soon"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-900">Contact Us</p>
            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="/contact"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/osc-vitap"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://discord.com/invite/DXgfsxXv6c"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-900">Events</p>
            <nav aria-label="Footer Navigation - Company" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="https://techeden.oscvitap.org/"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    TechEden
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/playlist?list=PLCi26H2_zeTx0W6GZbHfI8Z5-kiqrGNDW"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Tech Cast
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-gray-700 transition hover:opacity-75"
                  >
                    More Events
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <p className="font-medium text-gray-900">Chapters</p>
            <nav aria-label="Footer Navigation - Legal" className="mt-6">
              <ul className="space-y-4 text-sm">
                <li>
                  <a
                    href="https://wios.co.in/"
                    className="text-gray-700 transition hover:opacity-75"
                    rel="noreferrer"
                    target="_blank"
                  >
                    WIOS (Women in Open Source)
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="text-xs text-gray-500">
          &copy; 2023 Open Source Community VIT-AP
        </p>
      </div>
    </footer>
  );
};

export default Footer;