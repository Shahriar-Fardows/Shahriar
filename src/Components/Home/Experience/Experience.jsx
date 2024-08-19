import { useEffect, useState } from "react";
import img from '../../../assets/Image/img_1.png';
import { Fade,  Rotate } from "react-awesome-reveal";

const Experience = () => {
    // Replace the 'startYear' with the year you started coding
    const startYear = 2022;
    const [yearsOfExperience, setYearsOfExperience] = useState(0);

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYearsOfExperience(currentYear - startYear);
    }, []);

    const infoList = [
        {
            title: 'Web Developer',
            description: '2+ years creating user-friendly, visually appealing websites.',
        },
        {
            title: 'Tech Enthusiast',
            description: 'Always learning new technologies like TypeScript and React Native.',
        },
        {
            title: 'Committed to Quality',
            description: 'Focused on delivering high-quality projects on time.',
        },
    ];



    return (
        <div className=" h-fit container mx-auto flex flex-wrap-reverse lg:flex-nowrap justify-around items-center px-5  md:px-0 py-10 lg:py-60 gap-5">
            <Fade delay={0.5e3} cascade damping={1e-1}>
                <div>
                    <div className="flex items-center">
                        <div>
                            <h2 className="text-9xl font-mono font-bold text-center text-lemon-20">{yearsOfExperience}</h2>
                            <h2 className="text-2xl  font-mono tracking-[1rem] text-lemon-20">Years</h2>
                        </div>
                        <p className="text-3xl  font-mono text-lemon-20 ">of Experience as a <br /> Web Designer & Developer</p>
                    </div>
                    <p className="font-mono py-3 text-lemon-20"> With two years of experience in web design and development, I have created <br /> high-quality, user-friendly websites. My focus is on delivering affordable <br /> solutions  without sacrificing quality, and I consistently meet tight <br /> deadlines while  aligning with client expectations.</p>
                    <Fade delay={0.5e3} cascade damping={1e-1}>
                        <ul>
                            {infoList.map((info, index) => (
                                <li className="py-3 font-mono leading-loose text-lemon-20" key={index}>
                                    <strong className="text-hello-10">{info.title}:</strong> {info.description}
                                </li>
                            ))}
                        </ul>
                        <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-hello-10 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-hello-10 transition duration-300 hover:bg-lemon-20 hover:shadow-sm hover:shadow-hello-10 focus:bg-hello-10 focus:shadow-sm  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-lemon-20 disabled:bg-lemon-20 disabled:shadow-none">
                            <span className='font-play'>Read More...</span>
                        </button>
                    </Fade>
                </div>
            </Fade>
            <Rotate className="transform transition-transform duration-300 hover:scale-105">
                <img className="w-[40rem] rounded-md" src={img} alt="" />
            </Rotate>
        </div>
    );
};

export default Experience;