import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Upx01Content from "@/components/pages-content/upx-01/Upx01Content";
import Head from "next/head";

function Upx01() {
    return <>
    <Head>
      <title>Bright Light | SmartCities</title>
    </Head>
      <Navbar title="Bright Light" />
      <Upx01Content />
      <Footer />
    </>
};

export default Upx01;