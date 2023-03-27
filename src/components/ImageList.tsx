import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Image from 'next/image';

export default function CustomImageList({itemData} : any) {
  return (
    <Box sx={{px:3}}>
      <ImageList  variant="masonry"  cols={
          typeof window !== "undefined" && window.innerWidth > 700 ? 4 : 2  
        } gap={8}>
      {/* <div  className='grid grid-cols-3 lg:grid-cols-4 md:grid-cols-3' > */}
        {itemData.map((item : any) => (
          <ImageListItem sx={{position:"relative"}} data-aos="zoom-in" data-aos-duration="1000" key={item.img}>
            {/* <div className='relative w-[100%] h-auto'> */}

            <Image
              src={`${item.img}?w=248&fit=crop&auto=format`}
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              // fill
              width={400}
              height={500}
              // sizes='100vw'
              className='object-fill'
              />
              {/* </div> */}
          </ImageListItem>
        ))}
      {/* </div> */}
      </ImageList>
    </Box>
  );
}

