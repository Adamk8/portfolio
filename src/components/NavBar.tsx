import { Button } from "@chakra-ui/button";
import { Grid, GridItem, Flex, Heading } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

interface NavOptions {
  title: string;
  link: string;
}

const NavButton = ({ title, link }: NavOptions) => {
  return (
    <Link to={link}>
      <Flex
        p={5}
        _hover={{
          backgroundColor: "rgba(100, 100, 100, 0.2)",
        }}
        fontFamily="Helvetica, sans-serif"
        justifyContent="center"
      >
        <Heading size="lg" fontWeight="light" >
          {title}
        </Heading>
      </Flex>
    </Link>
  );
};

export const NavBar = () => {
  return (
    <Flex backgroundColor="blackAlpha.400" w="100%" px={1} >
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        justifyContent="space-evenly"
        w="100%"
      >
        <GridItem borderRightColor="blue.900" borderRightWidth="1px">
          <NavButton title="About" link="/" />
        </GridItem>
        <GridItem borderRightColor="blue.900" borderRightWidth="1px">
          <NavButton title="Work Experience" link="/" />
        </GridItem>
        <GridItem>
          <NavButton title="Projects" link="/" />
        </GridItem>
      </Grid>
    </Flex>
  );
};
