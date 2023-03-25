import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

export default function CustomImageList({itemData} : any) {
  return (
    <Box sx={{px:3}}>
      {/* <ImageList variant="masonry" className='grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3'  cols={3} gap={8}> */}
      <div variant="masonry" className='grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3'  cols={3} gap={8}>
        {itemData.map((item : any) => (
          <ImageListItem data-aos="zoom-in" data-aos-duration="1000" key={item.img}>
            {/* <div className='relative w-[100%] h-auto'> */}

            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            //   fill
            //   sizes='100vw'
              className='object-fill'
              />
              {/* </div> */}
          </ImageListItem>
        ))}
      </div>
      {/* </ImageList> */}
    </Box>
  );
}

