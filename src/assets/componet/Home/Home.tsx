/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Box, Button, Heading, Input, Text, Textarea } from "@chakra-ui/react";

import "./Home.css";
interface FormData {
  title: string;
  content: string;
}

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [arrayData, setArrayData] = useState<FormData[]>([
    {
      title: "Welcome to My Website1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tempor magna, vel vestibulum velit venenatis eget. Integer vel mauris scelerisque, semper libero id, rutrum ligula.",
    },
    {
      title: "Welcome to My Website2",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan tempor magna, vel vestibulum velit venenatis eget. Integer vel mauris scelerisque, semper libero id, rutrum ligula.",
    },
  ]);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof FormData
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = () => {
    // Here you can implement logic to handle form submission
    console.log("Form Data:", formData);
  };

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };
  return (
    <>
      <Heading as="h1" size="3xl">
        I'm a Heading of HomePage
      </Heading>
      <div style={{ marginTop: "50px" }}>
        <div className="tabs">
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            List of my blog
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Create new blog
          </button>
        </div>
        <div className="tab-content">
          {activeTab === 1 &&
            arrayData &&
            arrayData.map((data: any) => {
              return (
                <Box
                  maxW="100vw"
                  mx="auto"
                  mt="8"
                  p="4"
                  borderWidth="1px"
                  borderRadius="md"
                  boxShadow="md"
                >
                  <Heading as="h2" size="lg" mb="4">
                    {data.title}
                  </Heading>
                  <Text fontSize="md">{data.content}</Text>
                </Box>
              );
            })}
          {activeTab === 2 && (
            <Box
              maxW="600px"
              mx="auto"
              mt="8"
              p="4"
              borderWidth="1px"
              borderRadius="md"
              boxShadow="md"
            >
              <Heading as="h2" size="lg" mb="4">
                Create New Blog
              </Heading>
              <Input
                mb="4"
                placeholder="Title"
                value={formData.title}
                onChange={(e) => handleChange(e, "title")}
              />
              <Textarea
                mb="4"
                placeholder="Content"
                value={formData.content}
                onChange={(e) => handleChange(e, "content")}
              />
              <Button colorScheme="blue" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
