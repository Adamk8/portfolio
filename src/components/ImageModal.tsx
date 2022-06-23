import {
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export const ImageModal = (props: { image: string }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Image
        mt={5}
        borderRadius={20}
        src={props.image}
        boxShadow="dark-lg"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <Image borderRadius={20} src={props.image} boxShadow="dark-lg" />
        </ModalContent>
      </Modal>
    </>
  );
};
