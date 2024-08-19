import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import img from '../../../assets/Image/profile_1.png';
import { FaDownload } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
const Introduction = () => {
    const [index, setIndex] = useState(0);

    const TEXTS = ['Web', 'Front-end', 'MERN Satck '];



    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <div className="  bg-bgColor-30 w-full">

        <div className="h-[65vh] md:h-[60vh] lg:h-[75vh] container mx-auto flex flex-wrap-reverse justify-around items-center">
           <Fade delay={1e3} cascade damping={1e-1}>
           <div  className="px-5 md:px-0">
                <h1 className="text-xl font-bold font-play text-hello-10">Welcome ! I&apos;m</h1>
                <Fade delay={1e3} cascade damping={1e-1} className="text-4xl lg:text-6xl font-bold font-play py-7">Shahriar Fardows</Fade>
                <h3  className="text-2xl font-bold font-play"><TextTransition springConfig={presets.gentle} style={{ margin: "0 4px" }} className="text-hello-10" inline>{TEXTS[index % TEXTS.length]}</TextTransition> Developer</h3>
                <div className="flex py-7">
                    <button className="bg-hello-10 hover:bg-white text-white  hover:text-hello-10 border border-hello-10 transition duration-300 px-4 py-3 rounded-l-full font-play flex items-center gap-2"><FaGithubAlt />  GitHub</button>
                    <button className="hover:bg-hello-30 hover:text-white text-hello-30 border border-hello-30 transition duration-300 px-4 py-3 rounded-r-full font-play flex items-center gap-2"><FaDownload /> Resume</button>
                </div>
            </div>
            <div >
                <img className="h-[20rem] lg:h-[40rem] animate-custom-bounce" src={img} alt="" />
            </div>
           </Fade>
        </div>

    </div>
    );
};

export default Introduction;