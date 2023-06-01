import React, { useState } from "react";
import { skilsImage } from "./skills/Skills";
import { v4 as uuidv4 } from "uuid";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { title } = useParams();
  const [skills] = useState(skilsImage);
  // contact
  const contact = [{ phone: +8801537418504 }];
  return (
    <div>
      <h1 className="text-white text-2xl flex justify-center tracking-widest fadeInBottom1">
        {title}
        Contact With Me?
      </h1>
      <div className="text-white text-center mt-10 text-3 ">
        <strong className="fadeInBottom1">
          <p>
            Hey, I am Your Front-End Designer. Ask me about HTML5, CSS3,
            Bootstrap5, Javascrtipt, ES6, React, Tailwind CSS, JSON, Redux,
            Context API
          </p>
        </strong>

        <div>
          <strong>
            <p className="mt-10">My Skills:</p>
          </strong>
          {skills.map((skill) => {
            const { img1, img2, img4, img5, img6, img7, img8 } = skill;
            return (
              <div
                className=" inline-block mr-3 mt-2 fadeInBottom3"
                key={uuidv4()}
              >
                <section>
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img4} alt="" />
                  <img src={img5} alt="" />
                  <img src={img6} alt="" />
                  <img src={img7} alt="" />
                  <img src={img8} alt="" />
                </section>
              </div>
            );
          })}
        </div>
        <div className="mt-10 xl:w-3/5 m-auto tracking-widest trade fadeInBottom4">
          <p>
            Are you looking for a Web Developer to build a responsive, stunning,
            and user-friendly website from scratch or looking for someone to
            redesign your existing website? then you are at the right place! I
            will create a responsive website using HTML CSS javascript! and also
            I will be your React.js Developer.
          </p>
        </div>

        <div className="mt-7 fadeInBottom4">
          <h1>
            {" "}
            Let's discuss your project and explore how I can aid you. You Can
            Contact With Me as Follows:
          </h1>
          <div className="inline-block">
            <a
              className="inline-block text-2xl m-1"
              href="https://www.facebook.com/profile.php?id=100017271574445"
            >
              <span className="span">
                <FaFacebook />
              </span>
            </a>
            <a
              className="inline-block text-2xl m-1"
              href="https://www.linkedin.com/in/abhishek-mohajan"
            >
              <span className="span">
                <FaLinkedin />
              </span>
            </a>
            <a
              className="inline-block text-2xl m-1"
              href="https://www.instagram.com/abhishek_mohajan_?igshid=YmMyMTA2M2Y="
            >
              <span className="span">
                <FaInstagram />
              </span>
            </a>
            <address className="inline">
              <a
                className="inline-block text-2xl m-1"
                href="mailto:avimm079@gmail.com"
              >
                <span className="span">
                  <FaGoogle />
                </span>
              </a>
            </address>
            <div>
              {contact.map((contact, index) => {
                const { phone } = contact;
                return (
                  <article key={index}>
                    <a
                      className="inline-block text-2xl m-1"
                      href={"tel:+" + phone}
                    >
                      <span className="span">
                        <FaWhatsapp />
                      </span>
                    </a>
                    <a
                      className="inline-block text-2xl m-1"
                      href={"tel:+" + phone}
                    >
                      <span className="span">
                        {" "}
                        <FaTelegram />
                      </span>
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <>
        <div className="text-white text-center fadeInBottom4">
          <h2>Visit my Github Repo's , it's updating all time:</h2>
          <a
            href="https://github.com/Abhishek-Mohajan-projects"
            className="flex items-center justify-center mt-1"
          >
            <FaGithub className="text-3xl" />
          </a>
        </div>
      </>
    </div>
  );
};

export default Contact;
