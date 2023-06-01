import React from "react";
import {
  FaFacebook,
  FaLinkedin,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaGoogle,
} from "react-icons/fa";

const Links = () => {
  const contact = [{ phone: +8801537418504 }];
  return (
    <section>
      <div className="fixed m-1 bg-white p-6 links-div">
        <div className="flex flex-col items-center justify-center m-auto">
          <a
            className="text-2xl mb-2 mt-3"
            href="https://www.facebook.com/profile.php?id=100017271574445"
          >
            <span className="span span-2">
              <FaFacebook />
            </span>
          </a>
          <a
            className="text-2xl mb-2 mt-3"
            href="https://www.linkedin.com/in/abhishek-mohajan"
          >
            <span className="span span-2">
              <FaLinkedin />
            </span>
          </a>
          <a
            className="text-2xl mb-2 mt-3"
            href="https://www.instagram.com/abhishek_mohajan_?igshid=YmMyMTA2M2Y="
          >
            <span className="span span-2">
              <FaInstagram />
            </span>
          </a>
          <address className="mt-3">
            {" "}
            <a className="text-2xl mb-2 mt-3" href="mailto:avimm079@gmail.com">
              <span className="span span-2">
                <FaGoogle />
              </span>
            </a>
          </address>

          {contact.map((contact, index) => {
            const { phone } = contact;
            return (
              <div
                key={index}
                className="relative"
                style={{ bottom: "0.7rem" }}
              >
                <a className="text-2xl m-1" href={"tel:+" + phone}>
                  <span className="span span-2">
                    <FaWhatsapp />
                  </span>
                </a>
                <a className="text-2xl mb-3" href={"tel:+" + phone}>
                  <span className="span mb-2 span-2">
                    <FaTelegram />
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default Links;
