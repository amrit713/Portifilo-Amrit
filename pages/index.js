 import Head from "next/head"
import Acomplishments from "../src/components/Acomplishments"
 import Header from "../src/components/Header"
 import Hero from "../src/components/Hero"
 import Project from "../src/components/Project"
import Technologies from "../src/components/Technologies"
import TimeLine from "../src/components/Timeline"
import Footer from "../src/components/Footer"

export default function Home() {
  return (
    <div className="h-full text-white bg-background">

<style jsx global>{`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`}</style>


      <Head>
        <title>Portifilo | Website</title>
        <link rel="icon" href="/favicon.ico" />
 
      </Head>

      <main>
        <div className="fixed top-0 z-30 w-full bg-background">
        <Header />
        </div>
       

       
       <div className="w-9/12 mx-auto ">
       <Hero/>
       <Project/>
       <Technologies/>
       <TimeLine/>
       <Acomplishments/>
       <Footer/>
       </div>
       
       
      </main>
    </div>
  )
}
