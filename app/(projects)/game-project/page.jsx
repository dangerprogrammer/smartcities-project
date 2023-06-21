import Navbar from "@/components/navbar/Navbar";
import GameProject from "@/components/pages-content/game-project/GameProject";

const metadata = {
    title: 'Game Project | SmartCities'
};

export {metadata};

function gamePage() {
    return <>
        <Navbar title="Game Project"/>
        <GameProject/>
    </>
};

export default gamePage;