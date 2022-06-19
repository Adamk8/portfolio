import msImage from "../../images/motorla.jpg";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { Container, Image } from "@chakra-ui/react";
import { ReadMore } from "../ReadMore";
import { motorolaIntro } from "../../stores/descriptions";

export const Motorola = () => {
  return (
    <Flex w="full" textAlign="center" bg="gray.900" fontWeight="light" p={5}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={5}
      >
        <GridItem>
          <Image borderRadius={30} src={msImage} boxShadow="dark-lg" />
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" fontSize={30}>
            Systems Engeering Co-op at Motorola Solutions
          </Heading>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Sept 2019 - Apr 2020
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <Text fontWeight="light" textAlign="left" fontSize={18}>
            {motorolaIntro}
          </Text>
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Roles and Responsiblities
          </Heading>
          <Divider orientation="horizontal" mb={2} />
        </GridItem>
      </Grid>
    </Flex>
  );
};
