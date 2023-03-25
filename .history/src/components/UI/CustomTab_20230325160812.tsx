import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CustomImageList from '../ImageList';

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
      img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
      title: 'Books',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
      title: 'Sink',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
      title: 'Kitchen',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
      title: 'Blinds',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
      title: 'Chairs',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
      title: 'Laptop',
      category:"illustrate"
    },
    {
      img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
      title: 'Doors',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
      title: 'Coffee',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
      category:"Art"
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
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
        <Box sx={{ p: 3 }}>
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
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="All" {...a11yProps(0)} />
          <Tab label="Arts" {...a11yProps(1)} />
          <Tab label="illustrate" {...a11yProps(2)} />
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
