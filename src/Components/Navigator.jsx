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
    <Box sx={{ width: '100%', typography: 'body1'}}  >
      <TabContext value={value}>
        <Box  sx={{ borderBottom: 1, backgroundColor:"white",borderColor: 'divider' ,display:'flex', justifyContent:'center', 
       
      }} 
      className="box"
        > <div className='tabs' >
          <TabList onChange={handleChange} aria-label="lab API tabs example"
       
         className='border'
          sx ={{
          
            '& button.Mui-selected':{
              color:'black',
              borderBottom: '2px solid rgb(74, 115, 204)',
            },
            '& .MuiTabs-flexContainer':{
              flexWrap:"wrap",
              maxWidth:'86rem'
            },
           
             
          
     
          }}
          >
           
            <Tab label="Domains" value="1" className='tab'/>
            <Tab label="Web Hosting" value="2" className='tab'/>
            <Tab label="Dedicated Servers" value="3" className='tab'/>
            <Tab label="Virtual Cloud Servers" value="4" className='tab'/>
            <Tab label="WordPress Hosting" value="5" className='tab'/>
            <Tab label="Email Hosting" value="6" className='tab'/>
            <Tab label="VPS Hosting Servers" value="7" className='tab'/>
            <Tab label="Free Hosting" value="8" className='tab'/>
           
          </TabList>
          </div>
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

export default Navigator
