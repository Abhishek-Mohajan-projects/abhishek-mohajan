import React from "react";
import { Box, Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import img1 from "./../images/profile.jpg";

export default function Dashboard() {
  return (
    <div>
      <div>
        <Heading as="h3" color="white" textAlign="center">
          About Me
        </Heading>
      </div>

      <Grid
        templateColumns="repeat(2, 1fr)"
        p={{ base: "8px", lg: "20px", xl: "20px" }}
        mt="10"
      >
        <GridItem
          colSpan={{ base: 2, lg: 2, xl: 1 }}
          width={{ base: "50%", lg: "40%", xl: "60%" }}
          m={{ base: "auto", lg: "auto" }}
          pb={{ base: "2", lg: "2" }}
        >
          <img src={img1} alt="" className="fadeInBottom2" />
        </GridItem>

        <GridItem
          colSpan={{ base: 2, lg: 2, xl: 1 }}
          m="auto"
          className="fadeInBottom3"
        >
          <Heading
            as="h3"
            color="white"
            textAlign="center"
            fontSize={{ base: "20px", lg: "2xl" }}
          >
            I'm Abhishek Mohajan
          </Heading>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "0.7rem",
            }}
          >
            <img
              src="https://camo.githubusercontent.com/0ab9733d1389bbdfd9d92db19b4cd1235febaa086a4fe3dea566c12683d5a20a/68747470733a2f2f726561646d652d747970696e672d7376672e64656d6f6c61622e636f6d3f666f6e743d526f626f746f2670617573653d3130303026636f6c6f723d3034393142352663656e7465723d747275652677696474683d343335266c696e65733d5765622b44657369676e65722b2537432b46726f6e742d656e642b446576656c6f7065722b2537432b4c6561726e6572"
              alt=""
            />
          </Box>
          <Text
            textAlign="center"
            color="white"
            fontSize={{ base: "sm", lg: "lg" }}
            wordBreak="break-word"
          >
            Hi there, this is Abhishek Mohajan. Web Designer & Developer
            specializing in front-end development. Are you looking for a
            professional{" "}
            <span className="frames" style={{ color: "orange" }}>
              React JS
            </span>{" "}
            developer who can help you build a top-quality website or
            application? if you require a trustworthy and experienced developer,
            I am at your service. I can provide technical services in HTML, CSS,
            JavaScript, and all UI libraries. I have a passion for building
            high-performance, responsive websites and web applications using the
            latest technologies.
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
}
