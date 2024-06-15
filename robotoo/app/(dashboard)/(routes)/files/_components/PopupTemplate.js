// src/PopupTemplate.js
import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const PopupTemplate = ({ template, onSelect }) => {
    if(!template) return null;
  return (
    <Box
      maxW="sm"
      mx="auto"
      p={4}
      mt={4}
      bg="white"
      borderRadius="lg"
      boxShadow="lg"
      cursor="pointer"
      onClick={() => onSelect(template)}
    >
      <Image src={template.imageUrl} alt="Popup image" mb={2} rounded="full" />
      <Text fontSize="lg" mb={2}>
        {template.text}
      </Text>
      <Text fontSize="lg" mb={2}>
        {template.description}
      </Text>
    </Box>
  );
};

export default PopupTemplate;
