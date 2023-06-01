import { Box, List, ListIcon, ListItem } from "@chakra-ui/react";
import React from "react";
import { ChatIcon } from "@chakra-ui/icons";

export default function Chat() {
  return (
    <Box style={{ position: "fixed", left: "20px", bottom: "50px" }}>
      <List>
        <ListItem>
          <a href="https://www.linkedin.com/in/abhishek-mohajan">
            <span
              style={{ color: "whitesmoke", fontSize: "2rem" }}
              className="fadeInBottom4"
            >
              <ListIcon as={ChatIcon} />
            </span>
          </a>
        </ListItem>
      </List>
    </Box>
  );
}
