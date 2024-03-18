import React from "react";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <>
      <footer className="bg-black py-4 absolute -z-10  w-full">
        <div className="container mx-auto flex justify-center items-center">
          <div className="text-gray-400">
            <p className="text-center">
              &copy; {new Date().getFullYear()}{" "}
              {`FlexGallery. All rights reserved. Designed by `}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://linktr.ee/akash_prasad"
              >
                <u className="text-lg font-semibold">Akash Prasad</u>
              </a>
            </p>
            <p className="text-center">
              FlexGallery is a platform to showcase high quality images from
              Unsplash API
            </p>
            <p className="text-center">
              <u>Contact me</u>
            </p>
            <div className="flex justify-center mb-2 text-4xl mt-4">
              <a href="mailto:akashprsd7@gmail.com">
                <Mail />
              </a>
              <a
                href="https://www.linkedin.com/in/akash-prasad7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <Linkedin />
              </a>
              <a
                href="https://twitter.com/Akash_Prasad7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <Twitter />
              </a>
              <a
                href="https://github.com/AKASH-PRASAD7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white mx-2"
              >
                <Github />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
