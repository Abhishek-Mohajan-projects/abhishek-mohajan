import {
  Box,
  Heading,
  List,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
import React, { useState } from "react";
import skillsImage from "./skills/Skills";
import { v4 as uuidv4 } from "uuid";

export default function Contact() {
  const [skills] = useState(skillsImage);
  const contact = [{ phone: +8801537418504 }];
  return (
    <>
      <Heading
        as="h5"
        textAlign="center"
        mt="5"
        fontSize={{ base: "2xl", lg: "3xl" }}
        color="white"
        fontFamily="verdana"
      >
        Contact With Me?
      </Heading>

      <Box textAlign="center" mt="7">
        <Text
          color="white"
          fontWeight="medium"
          fontSize={{ base: "sm", lg: "lg" }}
        >
          {" "}
          Hey, I am Your Front-End Designer. Ask me about HTML5, CSS3,
          Bootstrap5, Javascrtipt, ES6, React, Tailwind CSS, JSON, Redux,
          Context API
        </Text>
      </Box>

      <Tabs variant="enclosed" mt="40px" p="5px" colorScheme="orange">
        <TabList>
          <Tab
            _selected={{ color: "white", bg: "purple" }}
            fontSize={{ base: "sm", lg: "lg" }}
          >
            Skiils Info
          </Tab>
          <Tab
            _selected={{ color: "white", bg: "purple" }}
            fontSize={{ base: "sm", lg: "lg" }}
          >
            Contact Info
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Heading
              as="h5"
              color="white"
              textAlign="center"
              className="fadeInBottom2"
              fontSize={{ base: "2xl", lg: "2xl" }}
            >
              My Skills:
            </Heading>

            <Box textAlign="center">
              {skills.map((skill) => {
                const { img1, img2, img4, img5, img6, img7, img8 } = skill;
                return (
                  <List key={uuidv4()} display="inline-block" mr="1" mt="2">
                    <ListItem>
                      <img src={img1} alt="" />
                      <img src={img2} alt="" />
                      <img src={img4} alt="" />
                      <img src={img5} alt="" />
                      <img src={img6} alt="" />
                      <img src={img7} alt="" />
                      <img src={img8} alt="" />
                    </ListItem>
                  </List>
                );
              })}
            </Box>

            <Box as="aside" mt="4" className="fadeInBottom3">
              <Text
                color="white"
                colorScheme="white.500"
                textAlign="center"
                fontSize={{ base: "sm", lg: "lg" }}
              >
                Are you looking for a Web Developer to build a responsive,
                stunning, and user-friendly website from scratch or looking for
                someone to redesign your existing website? then you are at the
                right place! I will create a responsive website using HTML CSS
                javascript! and also I will be your React.js Developer.
              </Text>
            </Box>
          </TabPanel>

          <TabPanel>
            <Heading
              as="h4"
              fontSize={{ base: "sm", lg: "lg" }}
              color="white"
              className="fadeInBottom"
            >
              Let's discuss your project and explore how I can aid you. You Can
              Contact With Me as Follows:
            </Heading>

            <List
              spacing={4}
              fontSize={{ base: "lg", lg: "3xl" }}
              color="white"
              className="fadeInBottom3"
              textAlign="center"
            >
              <ListItem
                display="inline-block"
                mr="2"
                fontSize={{ base: "lg", lg: "3xl" }}
              >
                <a href="https://www.facebook.com/profile.php?id=100017271574445">
                  <span className="span">
                    <FaFacebook />
                  </span>
                </a>
              </ListItem>

              <ListItem
                display="inline-block"
                mr="2"
                fontSize={{ base: "lg", lg: "3xl" }}
              >
                <a href="https://www.linkedin.com/in/abhishek-mohajan">
                  <span className="span">
                    <FaLinkedin />
                  </span>
                </a>
              </ListItem>

              <ListItem
                display="inline-block"
                mr="2"
                fontSize={{ base: "lg", lg: "3xl" }}
              >
                <a href="https://www.instagram.com/abhishek_mohajan_?igshid=YmMyMTA2M2Y=">
                  <span className="span">
                    <FaInstagram />
                  </span>
                </a>
              </ListItem>

              <ListItem
                display="inline-block"
                mr="2"
                fontSize={{ base: "lg", lg: "3xl" }}
              >
                <address>
                  <a href="mailto:avimm079@gmail.com">
                    <span className="span">
                      <FaGoogle />
                    </span>
                  </a>
                </address>
              </ListItem>

              <ListItem
                display="inline-block"
                fontSize={{ base: "lg", lg: "3xl" }}
              >
                {contact.map((contact, index) => {
                  const { phone } = contact;
                  return (
                    <article key={index}>
                      <List>
                        <ListItem
                          display="inline-block"
                          fontSize={{ base: "lg", lg: "3xl" }}
                        >
                          <a href={"tel:+" + phone}>
                            <span
                              className="span"
                              style={{
                                display: "inline-block",
                                marginRight: "0.6rem",
                              }}
                            >
                              <FaWhatsapp />
                            </span>
                          </a>
                        </ListItem>

                        <ListItem
                          display="inline-block"
                          fontSize={{ base: "lg", lg: "3xl" }}
                        >
                          <a href={"tel:+" + phone}>
                            <span
                              className="span"
                              style={{
                                display: "inline-block",
                              }}
                            >
                              <FaTelegram />
                            </span>
                          </a>
                        </ListItem>
                      </List>
                    </article>
                  );
                })}
              </ListItem>
            </List>

            <List
              mt="7"
              color="white"
              fontSize={{ base: "lg", lg: "3xl" }}
              textAlign="center"
            >
              <Heading
                as="h4"
                color="white"
                fontSize={{ base: "lg", lg: "3xl" }}
                className="fadeInBottom"
              >
                Visit my Github Repo's , it's updating all time:
              </Heading>
              <ListItem
                className="fadeInBottom3"
                fontSize={{ base: "lg", lg: "3xl" }}
              >
                <a href="https://github.com/Abhishek-Mohajan-projects">
                  <span
                    className="span"
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <FaGithub />
                  </span>
                </a>
              </ListItem>
            </List>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}
