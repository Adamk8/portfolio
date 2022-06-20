import { ChakraProvider, theme } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Home />} />
    </Routes>
  </ChakraProvider>
);
