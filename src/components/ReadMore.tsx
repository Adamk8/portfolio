import { Button, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
interface XText {
  text: string;
}

export const ReadMore = ({ text }: XText) => {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      {open ? (
        <Link onClick={toggleOpen} color='gray'>Read More...</Link>
      ) : (
        <>
          <Text>{text}</Text>
          <Link onClick={toggleOpen}  color='gray'>Read less</Link>
        </>
      )}
    </>
  );
};
