import { Fade, Slide } from "react-awesome-reveal";
import img from '../../../assets/Image/profile_1.png';

const Part_1 = () => {
    return (
       
            <div className="flex flex-wrap-reverse md:flex-nowrap justify-around items-center ">
                <div className="px-5 md:w-1/2 container mx-auto">
                    <h1 className="text-xl font-bold font-play text-hello-10">Hello!</h1>
                    <Fade >
                        <p className="  font-mono py-2">I&apos;m <span className="text-xl font-bold font-play text-hello-10">Shahriar Fardows</span> from Dhaka, Bangladesh, specializing in cutting-edge  web and mobile technologies with a keen  eye for pixel-perfect design.</p>
                    </Fade>
                    <Fade >
                        <p className=" font-mono py-2">As a <span className=" font-bold f text-hello-10">self-driven</span>  and <span className="font-bold  text-hello-10">dedicated</span>  Web Developer with  over 2 years of experience, including more than a year  in the industry, I have a strong  passion for coding,  product development, and exploring new technologies. I am proficient in modern web  technologies and version control systems, and I am a committed team player, focused on achieving goals and delivering quality results. I approach learning methodically, always striving for excellence.</p>
                    </Fade>
                </div>
                <Slide direction="right">
                    <img className=" h-[20rem] md:h-[25rem] lg:h-[40rem] animate-custom-bounce" src={img} alt="" />
                </Slide>

            </div>
       
    );
};

export default Part_1;