// src/PopupModal.js
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Input, Select, Button } from "@chakra-ui/react";
import { db } from "@/firebase";
import { collection, addDoc} from "firebase/firestore";


const PopupModal = ({ template, onClose, onSave }) => {
  const [text, setText] = useState(template.text);
  const [description, setDescription] = useState(template.description);
  const [imageUrl, setImageUrl] = useState(template.imageUrl);
  const [settings, setSettings] = useState(template.settings);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleSettingsChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

const addDataToCollection = async (collectionPath, data) => {
  try {
    const collectionRef = collection(db, collectionPath);
    const docRef = await addDoc(collectionRef, data);
    console.log("Document written with ID: ", docRef.id);
    return true;
  } catch (error) {
    console.error("Error adding document: ", error);
    return false;
  }
};

  const handleSave = async () => {
    const templateData = {
      text,
      description,
      imageUrl,
      settings,
    };
    try {
      const success = await addDataToCollection(
        `templates/${user.id}/popups`,
        templateData
      );
      if (success) {
        onSave(templateData);
        onClose();
      } else {
        console.error("Failed to save the template data.");
      }
    } catch (error) {
      console.error("Error during handleSave: ", error);
    }
  };     


  return (
    <Modal isOpen={true} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Popup Template</ModalHeader>
        <ModalBody>
          <Input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Popup text"
            mb={2}
          />
          <Input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
            placeholder="Popup text"
            mb={2}
          />
          <Input
            type="text"
            value={imageUrl}
            onChange={handleImageChange}
            placeholder="Image URL"
            mb={2}
          />
          <Select
            name="timing"
            value={settings.timing}
            onChange={handleSettingsChange}
            mb={2}
          >
            <option value="onLoad">On Load</option>
            <option value="onScroll">On Scroll</option>
            <option value="onClick">On Click</option>
          </Select>
          <Select
            name="frequency"
            value={settings.frequency}
            onChange={handleSettingsChange}
            mb={2}
          >
            <option value="once">Once</option>
            <option value="always">Always</option>
          </Select>
          <Select
            name="targeting"
            value={settings.targeting}
            onChange={handleSettingsChange}
            mb={2}
          >
            <option value="allVisitors">All Visitors</option>
            <option value="returningVisitors">Returning Visitors</option>
          </Select>
        </ModalBody>
        <ModalFooter>
          <Button type="button" onClick={handleSave}>
            Save Changes
          </Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PopupModal;
