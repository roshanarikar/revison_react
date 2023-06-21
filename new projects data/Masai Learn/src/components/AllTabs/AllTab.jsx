import React from "react";

import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import { JavaScriptTab } from "./JavaScriptTab";
import { FigmaTab } from "./FigmaTab";
import { PythonTab } from "./PythonTab";
import { DataAnalyticsTab } from "./DataAnalyticsTab";
import { WebDevTab } from "./WebDevTab";
import { AndriodTab } from "./AndriodTab";

export const AllTab = () => {
  return (
    <Tabs variant={"unstyled"} p="16px 80px">
      <TabList
        fontSize={"20px"}
        mb="24px"
        overflowX={"auto"}
        gap="30px"
        color={"black"}
        fontWeight="800"
      >
        <Tab
          bg={"rgb(243, 242, 242)"}
          borderRadius="1.5rem"
          _selected={{
            color: "white",
            bg: "black",
            fontWeight: "700",
            pt: "8px",
            pb: "8px",
            fontSize: "16px",
            paddingInline: "16px",
          }}
        >
          Figma for Developers
        </Tab>
        <Tab
          bg={"rgb(243, 242, 242)"}
          borderRadius="1.5rem"
          _selected={{
            color: "white",
            bg: "black",
            fontWeight: "700",
            pt: "8px",
            pb: "8px",
            fontSize: "16px",
            paddingInline: "16px",
          }}
        >
          Basics of Python in Hindi
        </Tab>
        <Tab
          bg={"rgb(243, 242, 242)"}
          borderRadius="1.5rem"
          _selected={{
            color: "white",
            bg: "black",
            fontWeight: "700",
            pt: "8px",
            pb: "8px",
            fontSize: "16px",
            paddingInline: "16px",
          }}
        >
          JavaScript Tutorial
        </Tab>
        <Tab
          bg={"rgb(243, 242, 242)"}
          borderRadius="1.5rem"
          _selected={{
            color: "white",
            bg: "black",
            fontWeight: "700",
            pt: "8px",
            pb: "8px",
            fontSize: "16px",
            paddingInline: "16px",
          }}
        >
          Basics of Data Analytics
        </Tab>
        <Tab
          bg={"rgb(243, 242, 242)"}
          borderRadius="1.5rem"
          _selected={{
            color: "white",
            bg: "black",
            fontWeight: "700",
            pt: "8px",
            pb: "8px",
            fontSize: "16px",
            paddingInline: "16px",
          }}
        >
          Basics of Web Development
        </Tab>
        <Tab
          bg={"rgb(243, 242, 242)"}
          borderRadius="1.5rem"
          _selected={{
            color: "white",
            bg: "black",
            fontWeight: "700",
            pt: "8px",
            pb: "8px",
            fontSize: "16px",
            paddingInline: "16px",
          }}
        >
          Basics of Android App Development
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FigmaTab />
        </TabPanel>
        <TabPanel>
          <PythonTab />
        </TabPanel>
        <TabPanel>
          <JavaScriptTab />
        </TabPanel>
        <TabPanel>
          <DataAnalyticsTab/>
        </TabPanel>
        <TabPanel>
           <WebDevTab/>
        </TabPanel>
        <TabPanel>
          <AndriodTab/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
