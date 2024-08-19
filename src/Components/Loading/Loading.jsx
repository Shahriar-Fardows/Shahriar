import { Fade } from 'react-awesome-reveal';
import img from '../../assets/Image/profile_1.png'


const Loading = () => {
    return (
        <div className='grid grid-cols-1 justify-items-center py-[10rem]'>
            <div>
                <img className="h-[20rem] lg:h-[30rem] animate-custom-bounce" src={img} alt="" />
            </div>
            <div>
                <Fade delay={1e3} cascade damping={1e-1} className='text-2xl lg:text-4xl font-play '>Hi, Welcome to my profile !!</Fade>
            </div>
        </div>
    );
};

export default Loading;