import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Cards from './Tabs/DomainsCards';
import WebHosting from './Tabs/WebHosting'
import DedicatedServers from './Tabs/DedicatedServers';
import VirtualCloudServers from './Tabs/VirtualCloudServers';
import WordPressHosting from './Tabs/WordPressHosting';
import EmailHosing from './Tabs/EmailHosting'
import VpsHostingServers from './Tabs/VpsHostingServers';
import FreeHosting from './Tabs/FreeHosting';
const Navigator = () => {
  return (
    <Tabs>
    <TabList style={{
          margin: 0,
          backgroundColor: 'white',
          textAlign: 'center',
    }}>
      <Tab>Domains</Tab>
      <Tab>Web Hosting</Tab>
      <Tab>Dedicated Servers</Tab>
      <Tab>Virtual Cloud Servers</Tab>
      <Tab>WordPress Hosting</Tab>
      <Tab>Email Hosting</Tab>
      <Tab>VPS Hosting Servers</Tab>
      <Tab>Free Hosting</Tab>
    </TabList>
    <TabPanel>
     <Cards />
    </TabPanel>
    <TabPanel>
      <WebHosting />
    </TabPanel>
    <TabPanel>
      <DedicatedServers />
    </TabPanel>
    <TabPanel>
      <VirtualCloudServers />
    </TabPanel>
    <TabPanel>
     <WordPressHosting />
    </TabPanel>
    <TabPanel>
        <EmailHosing />
    </TabPanel>
    <TabPanel>
        <VpsHostingServers />
    </TabPanel>
    <TabPanel>
        <FreeHosting />
    </TabPanel>
  </Tabs>
);
  
}

export default Navigator
