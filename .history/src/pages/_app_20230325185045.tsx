import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from "react";
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import AOS from "aos";
import "aos/dist/aos.css"
import NextProgress from 'next-progress';
export default function App({ Component, pageProps }: AppProps) {
  React.useEffect(()=>{
      AOS.init()
  },[])
  return(
<>
<NextProgress options={{
  showSpinner:false
}}/>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
</>
    )
}
