import { Button } from "@chakra-ui/button";
import { Grid, GridItem, Flex, Heading } from "@chakra-ui/layout";

interface NavOptions {
  title: string;
  link: string;
}

const NavButton = ({ title, link }: NavOptions) => {
  return (
    <Flex
      p={5}
      _hover={{
        backgroundColor: "rgba(100, 100, 100, 0.2)",
      }}
      fontFamily="Helvetica, sans-serif"
      justifyContent="center"
      onClick={() => window.location.replace(`/#${link}`)}
      borderBottomColor="white"
      borderBottomWidth="2px"
      borderTopColor="white"
      borderTopWidth="2px"
    >
      <Heading size="lg" fontWeight="light">
        {title}
      </Heading>
    </Flex>
  );
};

export const NavBar = () => {
  return (
    <Flex backgroundColor="gray.900" w="100%" px={1}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        justifyContent="space-evenly"
        w="100%"
      >
        <GridItem borderRightColor="white" borderRightWidth="2px">
          <NavButton title="About" link="about" />
        </GridItem>
        <GridItem borderRightColor="white" borderRightWidth="2px">
          <NavButton title="Work Experience" link="experience" />
        </GridItem>
        <GridItem>
          <NavButton title="Projects" link="projects" />
        </GridItem>
      </Grid>
    </Flex>
  );
};
