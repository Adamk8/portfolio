import { Flex } from "@chakra-ui/layout";
import { About } from "../components/About";
import { Intro } from "../components/Intro";
import { NavBar } from "../components/NavBar";
import { ProjectsHeader } from "../components/Projects/ProjectsHeader";
import { ExperienceHeader } from "../components/WorkExperience/ExperienceHeader";
import { Motorola } from "../components/WorkExperience/Motorola";

export const Home = () => {
  return (
    <>
      <Flex>
        <Intro />
      </Flex>
      <Flex style={{position: 'sticky', top: 0}}>
        <NavBar />
      </Flex>
      <Flex>
        <About/>
      </Flex>
      <Flex>
        <ExperienceHeader/>
      </Flex>
      <Flex>
        <Motorola />
      </Flex>
      <Flex>
        <ProjectsHeader/>
      </Flex>
    </>
  );
};
