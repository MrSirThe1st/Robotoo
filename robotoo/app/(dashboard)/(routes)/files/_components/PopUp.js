"use client";
import React, { useState } from "react";
import {
  Box,
  Flex,
  FormLabel,
  Input,
  Select,
  Button,
  Textarea,
  Grid,
  GridItem,
  container,
  HStack,
  VStack,
  Image,
  Text,
  useAnimation,
} from "@chakra-ui/react";
import PopupModal from "./PopupModal";
import PopupTemplate from "./PopupTemplate";
import { motion } from "framer-motion";

const popupTemplates = [
  {
    id: 1,
    text: "Your order just arrived!",
    description: "It's your 13th BigMama order this month! 🍔🍟🥤",
    imageUrl:
      "https://www.shutterstock.com/shutterstock/photos/2269730519/display_1500/stock-vector-mcdonald-s-icon-red-mcd-burger-king-store-art-modern-element-map-road-sign-symbol-logo-famous-2269730519.jpg",
    settings: {
      timing: "onScroll",
      frequency: "always",
      targeting: "returningVisitors",
    },
  },
  {
    id: 2,
    text: "Here is my number! contact me for any query",
    description: "contact me to get a quote",
    imageUrl:
      "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
    settings: {
      timing: "onScroll",
      frequency: "always",
      targeting: "returningVisitors",
    },
  },
  {
    id: 3,
    text: "take a look at our best seller",
    description: "you might be intrested in",
    imageUrl:
      "https://cdn.pixabay.com/photo/2013/07/13/14/08/apparel-162192_1280.png",
    settings: {
      timing: "onScroll",
      frequency: "always",
      targeting: "returningVisitors",
    },
  },
  {
    id: 4,
    text: "Put your videos here",
    description: "watch my 30 seconds videos",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAUlFOxGAxkxairx9qfOn5FrGdudFXFt8UIw&s",
    settings: {
      timing: "onScroll",
      frequency: "always",
      targeting: "returningVisitors",
    },
  },
  // Add more templates here
];

function PopUp({ text, imageUrl, settings, description }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleSelectTemplate = (template) => {
    setSelectedTemplate(template);
    setModalOpen(true);
  };

  const handleSaveTemplate = (template) => {
    console.log("Template saved:", template);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <Grid templateColumns="repeat(4, 1fr)" gap={1}>
      {popupTemplates.map((template) => (
        <GridItem key={template.id}>
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Box
              className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-4 my-4"
              borderRadius="lg"
              bg="rgba(255, 255, 255, 0.2)"
              boxShadow="0 0 10px rgba(0, 0, 0, 0.1)"
              overflow="hidden"
              cursor="pointer"
              onClick={() => handleSelectTemplate(template)}
              _hover={{
                boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              <HStack p={4} alignItems="center">
                <Image
                  boxSize="45px"
                  src={template.imageUrl}
                  alt="Popup image"
                  className="rounded-full"
                />
                <VStack alignItems="start" spacing={0}>
                  <HStack justifyContent="space-between" w="full">
                    <Text fontWeight="bold">{template.text}</Text>
                  </HStack>
                  <Text>{template.description}</Text>
                </VStack>
              </HStack>
            </Box>
          </motion.div>
        </GridItem>
      ))}
      {modalOpen && (
        <PopupModal
          template={selectedTemplate}
          onClose={handleCloseModal}
          onSave={handleSaveTemplate}
        />
      )}
    </Grid>
  );
}

export default PopUp;
