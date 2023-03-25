import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomImageList from '../ImageList';
import { makeStyles } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=384&q=80',
      title: 'Bird',
      category:"Illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=424&q=80',
      title: 'flowers',
      category:"Illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1575550596614-ff242442888a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=419&q=80',
      title: 'butterfly',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1579273168832-1c6639363dad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=453&q=80',
      title: 'tree bird',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1578763460789-324a7fcc0ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=509&q=80',
      title: 'Birds',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1583502070936-d24abe7f1975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80',
      title: 'flower pink red',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1584448062058-0d13ba997eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=455&q=80',
      title: 'girl',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1645680827507-9f392edae51c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
      title: 'finger ring',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80',
      title: 'paint',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
      title: 'brush',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1520420097861-e4959843b682?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'brushes',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      title: 'face',
      category:"Art"
    },
  ];
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const [Illustrate, setIllustrate] = React.useState<any>([]);
  const [Arts, setArts] = React.useState<any>([]);
  const [videos, setVideos] = React.useState<any>([]);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
 
    React.useEffect(() => {
        let illustateArray: any = []
        let artArray: any = []
        let videoArray: any = []
        itemData.filter((product: any) => {

            // women's clothing
            // electronics
            // jewelery
            if (product.category == "illustrate") {
                illustateArray.push(product)
            }
            if (product.category == "Art") {
                artArray.push(product)
            }
            if (product.category == "video") {
                videoArray.push(product)
            }
           
        })
        setIllustrate(illustateArray)
        setArts(artArray)
        setVideos(videoArray)
    }, [itemData])
 
  return (
    <Box sx={{  }}>
      <Box sx={{ display:"flex",justifyContent:"center" }}>
        <Tabs data-aos="fade-up" data-aos-duration="1000" variant='scrollable' indicatorColor='secondary' TabIndicatorProps={{
            
            style:{
                background:"purple"
            },
        }} value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab sx={{color:"purple", fontWeight:"bold"}}  label="All" {...a11yProps(0)} />
          <Tab sx={{color:"purple", fontWeight:"bold"}}  label="Arts" {...a11yProps(1)} />
          <Tab sx={{color:"purple", fontWeight:"bold"}}  label="illustrate" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <CustomImageList itemData={itemData} />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <CustomImageList itemData={Arts} />
     
       
      </TabPanel>
      <TabPanel value={value} index={2}>
      <CustomImageList itemData={Illustrate} />
      </TabPanel>
    </Box>
  );
}
