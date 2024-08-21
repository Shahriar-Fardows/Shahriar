import { Fade } from "react-awesome-reveal";
import { FaFreeCodeCamp } from "react-icons/fa";


const Part_2 = () => {
    return (
        <div>
            <div className=" flex flex-wrap-reverse md:flex-nowrap justify-around items-center py-16 lg:py-20">

                <div className="px-5 lg:w-1/2">
                   <div className="flex gap-5 items-center">
                   <FaFreeCodeCamp className="text-5xl text-hello-10" />
                   <h1 className="text-xl font-bold font-play text-hello-10"> Learning Journey</h1>
                   </div>
                    <Fade >           
                        <p className="  font-mono py-2">I began my Web Development journey on July 1, 2021, with a course offered by <span className=" font-bold f text-hello-10">Programming Hero</span> . This beginner-level course took me from the basics to a junior-level standard within five months. During this time, I learned the fundamentals of the MERN Stack and completed several projects. Additionally, I participated in a long-term (7-week) team project that introduced me to office culture and professional workflows. My web development learning started there and continues to this day as I explore and expand my knowledge in the field.
                        </p>                
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Part_2;