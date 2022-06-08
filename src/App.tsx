import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import {Route, Routes} from 'react-router-dom'
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { WorkExperience } from "./pages/WorkExperience"
import { Projects } from "./pages/Projects"



export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/experience" element={<WorkExperience/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>
  </ChakraProvider>
)
