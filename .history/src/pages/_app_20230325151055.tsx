import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from "aos";
import "aos/dist/aos.css"
export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(()=>{

  },[])
  return(
<>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
</>
    )
}
