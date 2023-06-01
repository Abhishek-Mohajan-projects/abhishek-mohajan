import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mt-4 p-5">
        <div className="container m-auto text-center">
          <div className="flex gap-20 justify-end items-end ">
            <div className="text-white" style={{ marginTop: "4rem" }}>
              <p className="inline">&copy; 2023 all rights reserved</p>
              <p>
                Made by{" "}
                <a
                  href="https://www.linkedin.com/abhishek-mohajan"
                  style={{ color: "orange" }}
                >
                  Abhishek Mohajan
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
