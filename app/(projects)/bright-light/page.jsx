import Navbar from "@/components/navbar/Navbar";
import BrightContent from "@/components/pages-content/bright-light/BrightContent";

const metadata = {
    title: 'Bright Light | SmartCities'
};

export {metadata};

function brightLightPage() {
    return <>
        <Navbar title="Bright Light" />
        <BrightContent />
    </>
};

export default brightLightPage;