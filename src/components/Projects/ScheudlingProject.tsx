import calendarImage from "../../images/calendarView.png";
import generateImage from "../../images/Generate.png";
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
  schedulingDescription,
  schedulingTakeaways,
} from "../../stores/descriptions";
import { ImageModal } from "../ImageModal";

export const SchedulingProject = () => {
  return (
    <Flex w="full" textAlign="center" bg="#202020" fontWeight="light" p={20}>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={20}
      >
        <GridItem>
          <Heading fontWeight="light" textAlign="center" fontSize={25} mb={2}>
            Course Scheduling System
          </Heading>
          <Link
            fontWeight="light"
            textAlign="center"
            mb={2}
            fontSize={20}
            href="https://github.com/SENG499-S22-Company3/frontend"
            isExternal
          >
            GitHub
          </Link>
          <Divider orientation="horizontal" mb={2} />
          <Text fontWeight="light" textAlign="left" fontSize={18}>
            {schedulingDescription}
          </Text>
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" textAlign="center" mb={2} fontSize={20}>
            Key Takeaways
          </Heading>
          <Divider orientation="horizontal" mb={2} />
          <UnorderedList fontSize={18} textAlign="left">
            {schedulingTakeaways.map((item, index) => (
              <ListItem key={"cp-" + index}>{item}</ListItem>
            ))}
          </UnorderedList>
          <Heading fontWeight="light" fontSize={20} mt={5}>
            Generate a Schedule Example
          </Heading>
          <ImageModal image={generateImage} />
        </GridItem>
        <GridItem>
          <Heading fontWeight="light" fontSize={20}>
            Calendar View Example
          </Heading>
          <ImageModal image={calendarImage} />
        </GridItem>
      </Grid>
    </Flex>
  );
};
