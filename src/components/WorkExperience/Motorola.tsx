import msImage from "../../images/motorla.jpg";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
} from "@chakra-ui/layout";
import { Container } from "@chakra-ui/react";
import { ReadMore } from "../ReadMore";
import { motorlaDescription, motorlaIntro } from "../../stores/descriptions";

export const Motorola = () => {
  return (
    <Flex w="100%" h="400px" >
      <Flex
        w="60%"
        style={{ backgroundImage: `url(${msImage})`}}
      ></Flex>
      <Flex w="40%" textAlign="center" bg="gray.900">
        <Container fontWeight='light'>
          <Grid
            templateRows="repeat(3, 1fr)"
            templateColumns="repeat(1, 1fr)"
            justifyContent="center"
            padding={5}
          >
            <GridItem>
              <Heading size="md" fontWeight='light'>Systems Engeering Co-op</Heading>
              <Heading size="sm" fontWeight='light'>Motorola Solutions</Heading>
              <Divider orientation="horizontal" />
            </GridItem>
            <GridItem>
              <Text p={1}  fontWeight='light'>{motorlaIntro}</Text>
              <ReadMore text={motorlaDescription} />
            </GridItem>
          </Grid>
        </Container>
      </Flex>
    </Flex>
  );
};
