import Experience from "../Components/Home/Experience/Experience";
import Introduction from "../Components/Home/Introduction/Introduction";
import Projects from "../Components/Home/Projects/Projects";
import Services from "../Components/Home/Services/Services";
import Skills from "../Components/Home/Skills/Skills";
import Team from "../Components/Home/Team/Team";
import useSEO from "../Hook/useSEO";

const Home = () => {

    useSEO({
        title: 'Home | Shahriar Fardows',
        description: 'Shahriar Fardows is a skilled web developer with expertise in web development, mobile development, and creating custom applications.',
        keywords: 'software development, web development, mobile development, custom applications, Shahriar Fardows , Fardows, Shahriar',
        url: 'https://shahriarfardows.netlify.app/',
        image: '../assets/Image/profile_1.png',
    });
    


    return (
        <div>
            <Introduction />
            <Experience />
            <Skills />
            <Services />
            <Projects />
            <Team />
        </div>
    );
};

export default Home;