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
import { SureGripControls } from "../components/WorkExperience/SureGripControls";
import { CrescentPoint } from "../components/WorkExperience/CrescentPoint";
import { ScalabilityProject } from "../components/Projects/ScalabilityProject";
import { SchedulingProject } from "../components/Projects/ScheudlingProject";

export const Home = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div style={{ backgroundColor: "#121212", color: "white" }}>
      <Flex>
        <Intro />
      </Flex>
      <Flex style={{ position: "sticky", top: 0, zIndex: 1 }}>
        <NavBar />
      </Flex>
      <Flex data-aos="fade-up" id="about" p="80px 80px 0px 80px">
        <About />
      </Flex>
      <div data-aos="fade-up" id="experience" style={{ padding: "80px" }}>
        <Flex>
          <ExperienceHeader />
        </Flex>
        <Flex>
          <SureGripControls />
        </Flex>
        <Flex>
          <Motorola />
        </Flex>
        <Flex>
          <CrescentPoint />
        </Flex>
      </div>
      <div data-aos="fade-up" id="projects" style={{ padding: "80px" }}>
        <Flex>
          <ProjectsHeader />
        </Flex>
        <Flex>
          <SchedulingProject />
        </Flex>
        <Flex>
          <ScalabilityProject />
        </Flex>
      </div>
    </div>
  );
};
