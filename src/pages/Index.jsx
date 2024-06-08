import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Input, Textarea, Box, IconButton } from "@chakra-ui/react";
import { FaUpload, FaSave, FaEdit } from "react-icons/fa";

const Index = () => {
  const [htmlContent, setHtmlContent] = useState("");
  const [sections, setSections] = useState([]);
  const [variables, setVariables] = useState([]);
  const [selectedText, setSelectedText] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setHtmlContent(e.target.result);
    };
    reader.readAsText(file);
  };

  const handleSectionAdd = () => {
    const sectionName = prompt("Enter section name:");
    if (sectionName) {
      setSections([...sections, { name: sectionName, content: selectedText }]);
    }
  };

  const handleVariableAdd = () => {
    const variableName = prompt("Enter variable name:");
    if (variableName) {
      setVariables([...variables, { name: variableName, placeholder: `{{${variableName}}}` }]);
      setHtmlContent(htmlContent.replace(selectedText, `{{${variableName}}}`));
    }
  };

  const handleTextSelect = (event) => {
    const selection = window.getSelection();
    setSelectedText(selection.toString());
  };

  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={4}>
          <Input type="file" accept=".html" onChange={handleFileUpload} />
          <IconButton aria-label="Add Section" icon={<FaEdit />} onClick={handleSectionAdd} />
          <IconButton aria-label="Add Variable" icon={<FaSave />} onClick={handleVariableAdd} />
        </HStack>
        <Textarea value={htmlContent} onChange={(e) => setHtmlContent(e.target.value)} onMouseUp={handleTextSelect} height="300px" />
        <Box width="100%">
          <Text fontSize="xl">Sections</Text>
          {sections.map((section, index) => (
            <Box key={index} p={2} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{section.name}</Text>
              <Text>{section.content}</Text>
            </Box>
          ))}
        </Box>
        <Box width="100%">
          <Text fontSize="xl">Variables</Text>
          {variables.map((variable, index) => (
            <Box key={index} p={2} borderWidth="1px" borderRadius="md">
              <Text fontWeight="bold">{variable.name}</Text>
              <Text>{variable.placeholder}</Text>
            </Box>
          ))}
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
