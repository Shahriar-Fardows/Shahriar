import Part_1 from "../../Components/Projects/Part_1/Part_1";
import Part_2 from "../../Components/Projects/Part_2/Part_2";
import useSEO from "../../Hook/useSEO";

const Projects = () => {
    useSEO({
        title: 'Projects | Shahriar Fardows',
        description: 'Explore the diverse range of projects by Shahriar Fardows, showcasing expertise in web development, MERN stack, and innovative solutions for various industries.',
        keywords: 'Shahriar Fardows, projects, web development, software engineer, MERN stack projects, portfolio, frontend developer, web applications',
        url: 'https://shahriarfardows.netlify.app/projects',
        image: '../assets/Image/projects_overview.png',
    });
    
    return (
        <div>
            <Part_1/>
            <Part_2/>
        </div>
    );
};

export default Projects;