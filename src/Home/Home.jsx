import Experience from "../Components/Home/Experience/Experience";
import Introduction from "../Components/Home/Introduction/Introduction";
import Services from "../Components/Home/Services/Services";
import Skills from "../Components/Home/Skills/Skills";

const Home = () => {
    return (
        <div>
            <Introduction />
            <Experience />
            <Skills />
            <Services />
        </div>
    );
};

export default Home;