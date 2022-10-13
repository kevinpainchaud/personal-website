import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

import "./header.scss";

export const Header = () => (
  <div className="header flex justify-end py-6 md:py-8">
    <ul className="flex gap-4">
      <li>
        <a href="https://github.com/kevinpainchaud" target="_blank">
          <IoLogoGithub size={24} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/kevin-painchaud-a2605935/"
          target="_blank"
        >
          <IoLogoLinkedin size={24} />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/kevinpainchaud" target="_blank">
          <IoLogoTwitter size={24} />
        </a>
      </li>
    </ul>
  </div>
);
