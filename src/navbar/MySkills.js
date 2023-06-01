import React from "react";
import "./../index.css";
import { useParams } from "react-router-dom";

const MySkills = () => {
  const { title } = useParams();
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-8 max">
        <div className="mb-2">
          <h1 className="text-2xl text-white text-cenetr fadeInBottom2">
            {" "}
            {title}
            Languages and Tools:
          </h1>
        </div>
        <img
          className="w-1/5 ml-6 lg:w-2/5 md:w-2/5 sm:w-3/5 image image3 fadeInBottom2"
          src="https://skillicons.dev/icons?i=html,css,bootstrap,js,react,tailwind,redux,netlify,git,github,"
          alt=""
        ></img>
      </div>

      <div className="p-8 mt-4 fadeInBottom2">
        <h1 className="text-white text-7xl text-center sm:text-4xl heading">
          My Skills :
        </h1>
      </div>

      <section className="m-auto container">
        <div className="grid grid-cols-1 sm:grid-cols-2 mt-40 sm:gap-20">
          <ul className="skills-left flex  flex-col  gap-10 size">
            <li className="skill-item reveal" style={{ overflow: "hidden" }}>
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">01.</span>
                <span className="text-white skill-title">HTML</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">02.</span>
                <span className="text-white skill-title">CSS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">03.</span>
                <span className="text-white skill-title">Bootstrap</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">04.</span>
                <span className="text-white skill-title">Javascript</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">05.</span>
                <span className="text-white skill-title">JSON</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">06.</span>
                <span className="text-white skill-title">JQuery</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">07.</span>
                <span className="text-white skill-title">React.js</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">08.</span>
                <span className="text-white skill-title">Chakra UI</span>
              </div>
            </li>
          </ul>

          <ul className="skills-right flex  flex-col  gap-10">
            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">09.</span>
                <span className="text-white skill-title">AXIOS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">10.</span>
                <span className="text-white skill-title">Tailwind CSS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">11.</span>
                <span className="text-white skill-title">Redux.js</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">12.</span>
                <span className="text-white skill-title">Redux Toolkit</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">13.</span>
                <span className="text-white skill-title">Typescript</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">14.</span>
                <span className="text-white skill-title">React Router</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">15.</span>
                <span className="text-white skill-title">SASS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="flex gap-10 items-baseline fadeInBottom1">
                <span className="text-white skill-number">16.</span>
                <span className="text-white skill-title">Rollup Js</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MySkills;
