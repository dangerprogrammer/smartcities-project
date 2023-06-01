import Navbar from "@/components/navbar/Navbar";
import HomeContent from "@/components/pages-content/home/HomeContent";
import Head from "next/head";

function Home() {
  return <>
  <Head>
    <title>UPX - SmartCities</title>
  </Head>
    {/* <Navbar title="SmartCities" /> */}
    <HomeContent />
  </>
};

export default Home;