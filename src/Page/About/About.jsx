import Part_1 from "../../Components/About/Part_1/Part_1";
import Part_2 from "../../Components/About/Part_2/Part_2";
import Part_3 from "../../Components/About/Part_3/Part_3";
import Part_4 from "../../Components/About/Part_4/Part_4";
import useSEO from "../../Hook/useSEO";

const About = () => {

    useSEO({
        title: 'About | Shahriar Fardows',
        description: 'Learn more about Shahriar Fardows, a passionate web developer with over 2 years of experience in creating modern, responsive, and dynamic web applications.',
        keywords: 'Shahriar Fardows, web developer, software engineer, portfolio, about Shahriar, frontend developer, MERN stack',
        url: 'https://shahriarfardows.netlify.app/about',
        image: '../assets/Image/profile_1.png',
    });
    

    return (
        <div className=" container mx-auto py-32">
            <Part_1 />
            <Part_2 />
            <Part_3 />
            <Part_4 />

        </div>
    );
};

export default About;