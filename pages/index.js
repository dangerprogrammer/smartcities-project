import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Head from "next/head";

function Home() {
  return <>
  <Head>
    <title>UPX - SmartCities</title>
  </Head>
    <Navbar title="SmartCities" />
    <Footer />
  </>
};

export default Home;