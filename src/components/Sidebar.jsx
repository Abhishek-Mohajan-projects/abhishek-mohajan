import {
  List,
  ListItem,
  ListIcon,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import React from "react";
import { FaHome, FaServicestack, FaUikit } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import "./../index.css";

export default function Sidebar() {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "please wait...",
      description: "",
      duration: 1000,
      position: "top",
      isClosable: "true",
    });
  };
  return (
    <div className="sideBar">
      <List
        color="white"
        fontSize={{ base: "sm", lg: "lg" }}
        spacing={{ base: 0, lg: 4, xl: 4 }}
        display={{ base: "flex", lg: "block", xl: "block" }}
        alignItems={{ base: "center" }}
        justifyContent={{ base: "center" }}
      >
        <ListItem margin={{ base: "auto" }} className="listItem">
          <NavLink
            to="/"
            style={{ display: "flex", flexDirection: "row" }}
            title="About Me"
            className="fadeInBottom"
          >
            <FaHome
              style={{
                display: "inline-block",
                marginTop: "3px",
                fontSize: "1.15em",
              }}
            />
            <span style={{ marginLeft: "0.3em" }} className="noneSidebar">
              About Me
            </span>
          </NavLink>
        </ListItem>

        <ListItem margin={{ base: "auto" }} className="listItem fadeInBottom">
          <NavLink
            to="/myskills"
            title="Skills"
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FaUikit style={{ display: "inline-block", marginTop: "4px" }} />
            <span style={{ marginLeft: "0.3em" }} className="noneSidebar">
              {" "}
              Skills
            </span>
          </NavLink>
        </ListItem>

        <ListItem margin={{ base: "auto" }} className="listItem fadeInBottom">
          <NavLink to="/contact" title="Contact">
            <ListIcon as={ChatIcon} />
            <span className="noneSidebar">Contact</span>
          </NavLink>
        </ListItem>

        <ListItem margin={{ base: "auto" }} className="listItem fadeInBottom">
          <NavLink to="/services" title="Services">
            <FaServicestack
              style={{ display: "inline-block", marginTop: "4px" }}
              className="stack"
            />
            <span style={{ marginLeft: "0.5em" }} className="noneSidebar">
              Services
            </span>
          </NavLink>
        </ListItem>
      </List>
    </div>
  );
}
