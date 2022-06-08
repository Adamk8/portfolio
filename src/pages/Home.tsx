import { Flex } from "@chakra-ui/layout";
import { Intro } from "../components/Intro";
import { NavBar } from "../components/NavBar";
import { Motorola } from "../components/WorkExperience/Motorola";

export const Home = () => {
  return (
    <>
      <Flex fontFamily="Helvetica, sans-serif" fontWeight="light">
        <Intro />
      </Flex>
      <Flex fontFamily="Helvetica, sans-serif" fontWeight="light" style={{position: 'sticky', top: 0}}>
        <NavBar />
      </Flex>
      <Flex fontFamily="Helvetica, sans-serif" fontWeight="light">
        <Motorola />
      </Flex>
    </>
  );
};
