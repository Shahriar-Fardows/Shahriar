import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import img from '../../../assets/Image/profile_1.png';
import { FaDownload } from "react-icons/fa6";
import { FaGithubAlt } from "react-icons/fa";
import { Fade, Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
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
        <div className=" h-[80vh] bg-bgColor-30  px-5">
            <div className="py-10 container mx-auto flex flex-wrap-reverse md:flex-nowrap justify-around items-center">
                <Fade >
                    <div className="px-5 md:px-0">
                        <h1 className="text-xl font-bold font-play text-hello-10">Welcome ! I&apos;m</h1>
                        <Fade  className="text-4xl lg:text-6xl font-bold font-play py-7">Shahriar Fardows</Fade>
                        <h3 className="text-2xl font-bold font-play"><TextTransition springConfig={presets.gentle} style={{ margin: "0 4px" }} className="text-hello-10" inline>{TEXTS[index % TEXTS.length]}</TextTransition> Developer</h3>
                        <div className="flex py-7">
                            <Link to='https://github.com/Shahriar-Fardows' target="_blank" className="hover:bg-hello-30 hover:text-white text-hello-30 border border-hello-30 transition duration-300 px-4 py-3 rounded-l-full font-play flex items-center gap-2"><FaGithubAlt /> Github</Link>
                            <Link to="#"
                                onClick={() => {
                                    const link = document.createElement('a');
                                    link.href = '/public/shahriar.pdf';
                                    link.download = 'shahriar.pdf';
                                    document.body.appendChild(link);
                                    link.click();
                                    document.body.removeChild(link);
                                }}
                                className="hover:bg-hello-30 hover:text-white text-hello-30 border border-hello-30 transition duration-300 px-4 py-3 rounded-r-full font-play flex items-center gap-2">
                                <FaDownload /> Resume
                            </Link>

                        </div>
                    </div>

                </Fade>
                <Slide >
                    <img className="h-[20rem] md:h-[25rem] lg:h-[40rem] animate-custom-bounce" src={img} alt="" />
                </Slide>
            </div>

        </div>
    );
};

export default Introduction;