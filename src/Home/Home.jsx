import Experience from "../Components/Home/Experience/Experience";
import Introduction from "../Components/Home/Introduction/Introduction";
import Projects from "../Components/Home/Projects/Projects";
import Services from "../Components/Home/Services/Services";
import Skills from "../Components/Home/Skills/Skills";
import Team from "../Components/Home/Team/Team";

const Home = () => {
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