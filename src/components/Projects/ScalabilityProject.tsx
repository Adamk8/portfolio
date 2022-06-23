import scalabilityImage from "../../images/scalability.jpg";
import {
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from "@chakra-ui/layout";
import {
  scalabilityDescription,
  scalabilityTakeaways,
} from "../../stores/descriptions";
import { ImageModal } from "../ImageModal";

export const ScalabilityProject = () => {
  return (
    <Flex
      w="full"
      textAlign="center"
      bg="#202020"
      fontWeight="light"
      p={20}
      borderBottomRadius={50}
    >
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={20}
      >
        <GridItem>
          <Heading fontWeight="light" textAlign="center" fontSize={25} mb={2}>
            Day Trading system
          </Heading>
          <Link
            fontWeight="light"
            textAlign="center"
            mb={2}
            fontSize={20}
            href="https://github.com/Adamk8/day-trading-system"
            isExternal
          >
            GitHub
          </Link>
          <Divider orientation="horizontal" mb={2} />
          <Text fontWeight="light" textAlign="left" fontSize={18}>
            {scalabilityDescription}
          </Text>
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Key Takeaways
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <UnorderedList fontSize={18} textAlign="left">
            {scalabilityTakeaways.map((item, index) => (
              <ListItem key={"cp-" + index}>{item}</ListItem>
            ))}
          </UnorderedList>
        </GridItem>
        <GridItem>
          <Heading fontWeight="light">System Architecture</Heading>
          <ImageModal image={scalabilityImage} />
        </GridItem>
      </Grid>
    </Flex>
  );
};
