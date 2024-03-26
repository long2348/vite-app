/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  Toast,
  useDisclosure,
} from "@chakra-ui/react";

import "./Home.css";
import axios from "axios";
interface FormData {
  title: string;
  content: string;
}

const Home = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [arrayData, setArrayData] = useState<FormData[]>([]);

  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const defaultData: FormData[] = [
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
  ];
  const getDataPosts = async () => {
    try {
      const res = await axios.get("http://localhost:1337/api/posts");
      const dataArray = res.data.data;
      if (dataArray.length > 0) {
        const newArray = dataArray.map((res: any) => {
          return {
            key: res?.id,
            title: res?.attributes?.title,
            content:  res?.attributes?.content,
          };
        });
        setArrayData(newArray);
      } else {
        setArrayData(defaultData);
      }
      console.log('res: ' ,res);
    } catch (error) {
      Toast({
        title: "Error",
        description: `${error}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(error);
    }
  };

  useEffect(() => {
    getDataPosts();
  }, []);

  const handleTabClick = (tabNumber: number) => {
    setActiveTab(tabNumber);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: keyof FormData
  ) => {
    setFormData({ ...formData, [key]: e.target.value });
  };

  const handleSubmit = () => {
    // Here you can implement logic to handle form submission
    console.log("Form Data:", formData);
    onOpen();
  };

  const handleReset = () => {
    setFormData({
      title: "",
      content: "",
    });
  };

  const createDataBlog = async () => {
    const dataCreate = {
      title: formData.title,
      content: formData.content
    } 
    console.log({dataCreate});
    try {
      const dataCreateSuccess = await axios.post("http://localhost:1337/api/posts", {
        data: dataCreate
      });
      console.log('data create: ', dataCreateSuccess);
      onClose();
      setFormData({
        title: "",
        content: "",
      });
      getDataPosts();
    } catch (error) {
      console.log(error);
      onClose();
      getDataPosts();
    }
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
              <Button mr="4" colorScheme="gray" onClick={handleReset}>
                Reset
              </Button>
              <Button colorScheme="blue" onClick={handleSubmit}>
                Submit
              </Button>
            </Box>
          )}
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create data</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Do you want to create this ?</ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={createDataBlog}>
              Create
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Home;
