import { Flex } from "@chakra-ui/layout";
import { About } from "../components/About";
import { Intro } from "../components/Intro";
import { NavBar } from "../components/NavBar";
import { ProjectsHeader } from "../components/Projects/ProjectsHeader";
import { ExperienceHeader } from "../components/WorkExperience/ExperienceHeader";
import { Motorola } from "../components/WorkExperience/Motorola";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Flex>
        <Intro />
      </Flex>
      <Flex style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <NavBar />
      </Flex>
      <Flex data-aos="fade-up" id="about">
        <About />
      </Flex>
      <div data-aos="fade-up" id="experience">
        <Flex>
          <ExperienceHeader />
        </Flex>
        <Flex>
          <Motorola />
        </Flex>
      </div>
      <Flex data-aos="fade-up" id="projects">
        <ProjectsHeader />
      </Flex>
    </>
  );
};
