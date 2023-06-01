import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

export default function RootLayout() {
  return (
    <div className="body">
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={{ base: 6, lg: 5, xl: 5 }} p="40px">
          <Navbar />
          <Outlet />
          <Chat />
        </GridItem>
        <GridItem
          colspan={{ base: 6, lg: 1, xl: 1 }}
          minHeight={{ lg: "100vh" }}
          width={{ base: "100vw", lg: "300px" }}
          p={{ base: "20px", lg: "30px" }}
          bg={{ base: "transparent", lg: "purple", xl: "purple" }}
        >
          <Sidebar />
        </GridItem>
      </Grid>
    </div>
  );
}
