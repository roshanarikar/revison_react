import { Link, TabPanel, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


export const AndriodTab = () => {
    const [modules, setModules] = useState([]);

    useEffect(() => {
        axios
          .get("http://13.232.130.207/learn/module/5")
          .then((res) => setModules(res.data))
          .catch((error) => console.log(error));
      }, []);

  return (
    <>
    {modules.map((module) => (
            <TabPanel key={module.id} mb="16px">
              <Text fontWeight={"bold"} fontSize={"18px"}  ml={"2"}>
                {module.moduleHeading}
              </Text>
              {module.topics.map((topic, index) => (
                <Link
                  key={index}
                  display="inline-block"
                  color={"#746f70"}
                  fontSize="16.3px"
                  _hover={{ textDecoration: "underline" }}
                  href={topic.url}
                  sx={{ position: "relative", pl: "12px" }}
                >
                  {topic.heading}
                  {index !== module.topics.length - 1 && (
                    <span
                    sx={{
                        position: "absolute",
                        left: "0",
                        top: "50%",
                        transform: "translateY(-50%)",
                        ml: "-12px",
                        height: "24px", 
                        lineHeight: "24px",
                        padding: "0 8px", 
                        borderRadius: "3px",
                        backgroundColor: "#eee",
                        color: "#333",
                        fontSize: "14px",
                      }}
                    >|</span>
                  )}
                </Link>
              ))}
            </TabPanel>
          ))}
    </>
  )
}
