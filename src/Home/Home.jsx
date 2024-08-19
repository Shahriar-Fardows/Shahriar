import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import img from '../assets/Image/profile_1.png'
import { FaDownload } from "react-icons/fa6";

const Home = () => {
    const TEXTS = ['Web', 'Front-end', 'MERN Satck '];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);


    return (
        <div className="  bg-bgColor-30">
            
            <div className="h-[75vh] container mx-auto flex flex-wrap-reverse justify-around items-center">
            <div>
                <h1 className="text-xl font-bold font-play text-hello-10">I&apos;m</h1>
                <h2 className="text-6xl font-bold font-play py-5">Shahriar Fardows</h2>
                <h3 className="text-2xl font-bold font-play"><TextTransition springConfig={presets.gentle} style={{ margin: "0 4px" }} className="text-hello-10" inline>{TEXTS[index % TEXTS.length]}</TextTransition> Developer</h3>
                <div className="flex">
                    <button className="bg-hello-10 hover:bg-white text-white  hover:text-hello-10 border border-hello-10 transition duration-300 px-4 py-4 rounded-l-full font-play flex items-center">GitHub</button>
                    <button className="hover:bg-hello-30 hover:text-white text-hello-30 border border-hello-30 transition duration-300 px-4 py-4 rounded-r-full font-play flex items-center gap-2"><FaDownload/> Download CV</button>
                </div>
            </div>
            <div>
                <img className="h-[40rem] animate-custom-bounce" src={img} alt="" />
            </div>
            </div>
            
        </div>
    );
};

export default Home;