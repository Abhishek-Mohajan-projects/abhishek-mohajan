import React from "react";
import {
  Avatar,
  AvatarBadge,
  Flex,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { FaEnvelope, FaGithub } from "react-icons/fa";
import "./../index.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function () {
  return (
    <>
      <Flex
        as="nav"
        p="10px"
        alignItems="center"
        gap="10px"
        borderBottom="1px solid white"
      >
        <Avatar src="./favi.png" name="abhishek" title="Abhishek Mohajan">
          <AvatarBadge boxSize="1em" bg="green.500" />
        </Avatar>
        <Spacer />

        <HStack spacing="20px">
          <Text>
            <span style={{ color: "white" }}>
              {" "}
              &copy;
              <a
                className="noLink"
                href="https://www.linkedin.com/in/abhishek-mohajan"
                style={{ color: "orange" }}
              >
                Abhishek Mohajan
              </a>
            </span>
          </Text>
          <Text>
            <address>
              <a href="mailto:avimm079@gmail.com">
                <span style={{ fontSize: "1.8rem" }}>
                  <FaEnvelope color="white" />
                </span>
              </a>
            </address>
          </Text>
          <Text>
            <a href="https://github.com/Abhishek-Mohajan-projects">
              <span style={{ fontSize: "1.8rem" }}>
                <FaGithub color="white" />
              </span>
            </a>
          </Text>
        </HStack>
      </Flex>
    </>
  );
}
