import React from 'react'
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Domains from './Tabs/DomainsCards';
import WebHosting from './Tabs/WebHosting'
import DedicatedServers from './Tabs/DedicatedServers';
import VirtualCloudServers from './Tabs/VirtualCloudServers';
import WordPressHosting from './Tabs/WordPressHosting';
import EmailHosing from './Tabs/EmailHosting'
import VpsHostingServers from './Tabs/VpsHostingServers';
import FreeHosting from './Tabs/FreeHosting';
const Navigator = () =>{
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
  

    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1',}} >
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, backgroundColor:"white",borderColor: 'divider' ,display:'flex', justifyContent:'center', 
       
      }} 
        
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example"
          sx ={{
            '& button.Mui-selected':{
              color:'black'
            }
          }}
          >
            <Tab label="Domains" value="1" />
            <Tab label="Web Hosting" value="2" />
            <Tab label="Dedicated Servers" value="3" />
            <Tab label="Virtual Cloud Servers" value="4" />
            <Tab label="WordPress Hosting" value="5" />
            <Tab label="Email Hosting" value="6" />
            <Tab label="VPS Hosting Servers" value="7" />
            <Tab label="Free Hosting" value="8" />
            
          </TabList>
        </Box>
        <TabPanel value="1"> <Domains /></TabPanel>
        <TabPanel value="2"><WebHosting /></TabPanel>
        <TabPanel value="3"><DedicatedServers /></TabPanel>
        <TabPanel value="4"><VirtualCloudServers /></TabPanel>
        <TabPanel value="5"><WordPressHosting /></TabPanel>
        <TabPanel value="6"><EmailHosing /></TabPanel>
        <TabPanel value="7"><VpsHostingServers /></TabPanel>
        <TabPanel value="8"><FreeHosting /></TabPanel>
      </TabContext>
    </Box>
  );
}
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
// import Cards from './Tabs/DomainsCards';
// import WebHosting from './Tabs/WebHosting'
// import DedicatedServers from './Tabs/DedicatedServers';
// import VirtualCloudServers from './Tabs/VirtualCloudServers';
// import WordPressHosting from './Tabs/WordPressHosting';
// import EmailHosing from './Tabs/EmailHosting'
// import VpsHostingServers from './Tabs/VpsHostingServers';
// import FreeHosting from './Tabs/FreeHosting';
// const Navigator = () => {
//   return (
    
//     <Tabs>
//     <TabList style={{
//           margin: 0,
//           backgroundColor: 'white',
//           textAlign: 'center',
//     }}>
//       <Tab>Domains</Tab>
//       <Tab>Web Hosting</Tab>
//       <Tab>Dedicated Servers</Tab>
//       <Tab>Virtual Cloud Servers</Tab>
//       <Tab>WordPress Hosting</Tab>
//       <Tab>Email Hosting</Tab>
//       <Tab>VPS Hosting Servers</Tab>
//       <Tab>Free Hosting</Tab>
//     </TabList>
//     <TabPanel>
//      <Cards />
//     </TabPanel>
//     <TabPanel>
//       <WebHosting />
//     </TabPanel>
//     <TabPanel>
//       <DedicatedServers />
//     </TabPanel>
//     <TabPanel>
//       <VirtualCloudServers />
//     </TabPanel>
//     <TabPanel>
//      <WordPressHosting />
//     </TabPanel>
//     <TabPanel>
//         <EmailHosing />
//     </TabPanel>
//     <TabPanel>
//         <VpsHostingServers />
//     </TabPanel>
//     <TabPanel>
//         <FreeHosting />
//     </TabPanel>
//   </Tabs>
// );
  
// }

export default Navigator
