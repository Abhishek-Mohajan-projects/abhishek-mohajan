import {
  Heading,
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import "./../index.css";
import { CheckCircleIcon } from "@chakra-ui/icons";

export default function Services() {
  return (
    <>
      <Heading as="h2" textAlign="center" color="white" fontSize="1.6em" mt="1">
        Services
      </Heading>

      <Grid
        templateColumns="repeat(2, 1fr)"
        mt="10"
        gap="2"
        fontFamily="verdana"
      >
        <GridItem
          border="2px solid white"
          p="5"
          className="fadeInBottom"
          colSpan={{ base: 2, lg: 2, xl: 1 }}
        >
          <Heading
            as="h3"
            fontSize={{ base: "sm", lg: "lg" }}
            color="white"
            borderBottom="1px solid white"
            pb="1"
            mb="2"
          >
            With My Service, You Can Expect:
          </Heading>
          <List spacing={4} fontSize={{ base: "sm", lg: "lg" }} color="white">
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="white" />
              1. Best practices in web development.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="white" />
              2. High-quality, clean code.
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              3. Responsive design.
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              4. Expertise in React JS development
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              5. Edit HTML page or CSS
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              6. Custom web development
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              7. Highly Professional Design
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              8. Mobile-Friendly website
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              9. Easier to maintain & update
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              10. And Many More...
            </ListItem>
          </List>
        </GridItem>

        <GridItem
          colSpan={{ base: 2, lg: 2, xl: 1 }}
          className="fadeInBottom3"
          border="2px solid white"
          p="5"
        >
          <Heading
            as="aside"
            fontSize={{ base: "sm", lg: "lg" }}
            color="white"
            borderBottom="1px solid white"
            pb="1"
          >
            You will gain the following advantages from me:
          </Heading>
          <List spacing={4} fontSize={{ base: "sm", lg: "lg" }} color="white">
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="white" />
              1. Clean code(Comments on every HTML CSS section)
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="white" />
              2. Pixel perfect design
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              3. Custom website
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              4. Responsive design for PC, Mobile, Tablet
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              5. Lifetime support
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              6. Unlimited revisions
            </ListItem>
          </List>
        </GridItem>

        <GridItem
          colSpan={{ base: 2, lg: 2, xl: 1 }}
          className="fadeInBottom3"
          border="2px solid white"
          p="5"
        >
          <Heading
            as="aside"
            fontSize={{ base: "sm", lg: "lg" }}
            color="white"
            borderBottom="1px solid white"
            pb="1"
          >
            My Additional Services for You:
          </Heading>
          <List spacing={4} fontSize={{ base: "sm", lg: "lg" }} color="white">
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              1. Lead Generation
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              2. Data Entry
            </ListItem>
            <ListItem>
              {" "}
              <ListIcon as={CheckCircleIcon} color="white" />
              3. Skip Tracing
            </ListItem>
          </List>
        </GridItem>
      </Grid>

      <>
        <Box fontFamily="verdana">
          <Heading
            mt="5"
            as="h2"
            fontFamily="verdana"
            mb="4"
            textAlign="center"
            color="white"
            className="fadeInBottom"
            fontSize={{ base: "2xl", lg: "lg" }}
          >
            Why Me?
          </Heading>

          <div
            textAlign="center"
            fontFamily="verdana"
            className="fadeInBottom3"
          >
            <Text
              fontFamily="verdana"
              textAlign="center"
              color="white"
              fontWeight="bold"
              fontSize={{ base: "sm", lg: "lg" }}
              lineHeight="1.7em"
              letterSpacing="0.1em"
            >
              Designing or Developing a website is not the end of the world,
              there is always more. I believe with a good-looking website its
              also essential to maintain best practices for project structure
              and writing code. Your satisfaction is my guarantee, so Ill work
              until you are 100% satisfied. Besides:
            </Text>
            <Text
              color="white"
              fontWeight="bold"
              lineHeight="1.7em"
              textAlign="center"
              letterSpacing="0.1em"
              fontSize={{ base: "sm", lg: "lg" }}
            >
              Reusable component. <br />
              Premium quality and timely results <br />
              Communication throughout the whole process
            </Text>

            <Heading
              as="h5"
              color="white"
              mb="7"
              textAlign="center"
              className="fadeInBottom"
            >
              My first priority is to provide quality work to my clients.
            </Heading>

            <Text
              textAlign="center"
              color="white"
              mb="5"
              fontSize={{ base: "sm", lg: "lg" }}
              className="fadeInBottom3"
            >
              If you are looking for React developer that fits in your budget
              then your search is over. I'll help you with your Web Application
              front end using ReactJs. I can also help you to create React UI
              using Html, CSS, Tailwind CSS or React UI library (Reactstrap).
            </Text>

            <Text color="white" textAlign="center" className="fadeInBottom">
              Yes.... Passionate about creating beautiful and responsive user
              interfaces. Let's build something amazing together!
            </Text>
          </div>
        </Box>
      </>
    </>
  );
}
