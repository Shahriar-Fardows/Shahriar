import { Fade, Slide } from 'react-awesome-reveal';
import img from '../../../assets/Image/collage.jpg';
import { PiStudentLight } from "react-icons/pi";
import logo from '../../../assets/Image/logoclg.png';

const Part_4 = () => {
    return (
        <div className=" flex flex-wrap-reverse md:flex-nowrap justify-around items-center px-5">
            <Slide >
                <img className="w-[40rem] rounded-md   animate-custom-bounce" src={img} alt="" />
            </Slide>
            <div className="px-5 md:w-1/2">
                <div className="flex gap-5 items-center">
                    <PiStudentLight className="text-5xl text-hello-10" />
                    <h2 className="text-2xl font-bold font-play text-hello-10">Education</h2>
                </div>
                <div className='py-5 pl-10'>
                    <div className="flex gap-3 items-center  ">
                        <img className="h-6" src={logo} alt="" />
                        <h2 className="text-xl font-bold font-play text-lemon-20">Habibullah Bahar College</h2>
                    </div>
                    <Fade >
                        <h3 className="text-2xl py-2 font-bold font-play text-hello-10">HSC 2024 Department of Science</h3>
                        <p className="  font-mono py-2">Academic Year: 2023 - 2024</p>
                        <p className="  font-mono py-2">Shantinagar, Dhaka</p>
                    </Fade>
                </div>
            </div>


        </div>
    );
};

export default Part_4;