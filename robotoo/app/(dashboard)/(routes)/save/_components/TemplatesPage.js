"use client"
import React, { useState, useEffect } from "react";
import { db } from "@/firebase";

const TemplatesPage = () => {
  const [templates, setTemplates] = useState([]);

//   useEffect(() => {
//     db.collection("templates")
//       .get()
//       .then((querySnapshot) => {
//         const templates = [];
//         querySnapshot.forEach((doc) => {
//           templates.push({ id: doc.id, ...doc.data() });
//         });
//         setTemplates(templates);
//       })
//       .catch((error) => {
//         console.error(`Error retrieving templates: ${error}`);
//       });
//   }, []);

  return (
    <div>
      <h1>Templates</h1>
      <ul>
        {templates.map((template) => (
          <li key={template.id}>
            <h2>{template.text}</h2>
            <p>{template.description}</p>
            <img src={template.imageUrl} alt="Template image" />
            <p>Settings:</p>
            <ul>
              <li>Timing: {template.settings.timing}</li>
              <li>Frequency: {template.settings.frequency}</li>
              <li>Targeting: {template.settings.targeting}</li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplatesPage;
