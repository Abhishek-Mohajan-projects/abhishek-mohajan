import React from "react";
import "./../index.css";
import { Flex, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const MySkills = () => {
  return (
    <div>
      <Flex flexDirection="column" justifyContent="center">
        <div className="mb-2">
          <Heading
            as="h4"
            fontSize={{ base: "2xl", lg: "lg" }}
            color="white"
            textAlign="center"
            mt="5"
            mb="4"
            className="fadeInBottom2"
          >
            Languages and Tools:
          </Heading>
        </div>
        <div
          style={{
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            width={{ base: "3xl", lg: "lg" }}
            src="https://skillicons.dev/icons?i=html,css,bootstrap,js,react,tailwind,redux,netlify,git,github,typescript"
            alt=""
          ></Image>
        </div>
      </Flex>

      <div style={{ marginTop: "4em" }}>
        <Heading
          as="h3"
          color="white"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          My Skills :
        </Heading>
      </div>

      {/* fadeinbottom1 */}
      <section>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 20 }}
          mt="30"
          fontSize={{ base: "sm", lg: "lg" }}
        >
          <ul className="skills-left" style={{ color: "white" }}>
            <li className="skill-item reveal" style={{ overflow: "hidden" }}>
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">01.</span>
                <span className="text-white skill-title">HTML</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom ">
                <span className="text-white skill-number">02.</span>
                <span className="text-white skill-title">CSS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">03.</span>
                <span className="text-white skill-title">Bootstrap</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">04.</span>
                <span className="text-white skill-title">Javascript</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">05.</span>
                <span className="text-white skill-title">JSON</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">06.</span>
                <span className="text-white skill-title">JQuery</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">07.</span>
                <span className="text-white skill-title">React.js</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">08.</span>
                <span className="text-white skill-title">Chakra UI</span>
              </div>
            </li>
          </ul>

          <ul className="skills-right" style={{ color: "white" }}>
            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">09.</span>
                <span className="text-white skill-title">AXIOS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="skill-number">10.</span>
                <span className=" skill-title">Tailwind CSS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">11.</span>
                <span className="text-white skill-title">Redux.js</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">12.</span>
                <span className="text-white skill-title">Redux Toolkit</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex  fadeInBottom">
                <span className="text-white skill-number">13.</span>
                <span className="text-white skill-title">Typescript</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">14.</span>
                <span className="text-white skill-title">React Router</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">15.</span>
                <span className="text-white skill-title">SASS</span>
              </div>
            </li>

            <li className="skill-item reveal">
              <div className="skillsFlex fadeInBottom">
                <span className="text-white skill-number">16.</span>
                <span className="text-white skill-title">Material UI</span>
              </div>
            </li>
          </ul>
        </SimpleGrid>
      </section>
    </div>
  );
};

export default MySkills;
