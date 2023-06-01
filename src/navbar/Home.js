import React from "react";
import "./../index.css";
import img1 from "../images/profile.jpg";
import { useParams } from "react-router-dom";

const Home = () => {
  const { title } = useParams();
  return (
    <>
      <div className="p-6 header">
        <div>
          <h1 className="text-white text-3xl text-center mb-3 tracking-widest fadeInBottom1">
            {title}
            About Me
          </h1>
        </div>

        <div style={{ width: "100%", margin: "auto" }}>
          <div className="text-center mt-20 flex flex-row gap-5 justify-between shopify p-6">
            <div
              className="text-white text-2xl m-auto "
              style={{ flexBasis: "50%" }}
            >
              <h5 className="mb-3 fadeInBottom1">I'm Abhishek Mohajan</h5>
              <img
                className="flex m-auto fadeInBottom2"
                src="https://camo.githubusercontent.com/0ab9733d1389bbdfd9d92db19b4cd1235febaa086a4fe3dea566c12683d5a20a/68747470733a2f2f726561646d652d747970696e672d7376672e64656d6f6c61622e636f6d3f666f6e743d526f626f746f2670617573653d3130303026636f6c6f723d3034393142352663656e7465723d747275652677696474683d343335266c696e65733d5765622b44657369676e65722b2537432b46726f6e742d656e642b446576656c6f7065722b2537432b4c6561726e6572"
                alt=""
              />
              <p className="text-base leading-10 stretch fadeInBottom1">
                Hi there, this is Abhishek Mohajan. Web Designer & Developer
                specializing in front-end development. Are you looking for a
                professional{" "}
                <span
                  className="font-bold frames text-2xl stretch fadeInBottom1"
                  style={{ color: "orange" }}
                >
                  React JS
                </span>{" "}
                developer who can help you build a top-quality website or
                application? if you require a trustworthy and experienced
                developer, I am at your service. I can provide technical
                services in HTML, CSS, JavaScript, and all UI libraries. I have
                a passion for building high-performance, responsive websites and
                web applications using the latest technologies.
              </p>
            </div>

            <div
              className="border xl:w-3/4 ring ring-gray-700 md:w-3/5 lg:w-2/5 m-auto image hero fadeInBottom3"
              style={{ height: "30rem", width: "25rem" }}
            >
              <img
                src={img1}
                alt="abhishek mohajan"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
