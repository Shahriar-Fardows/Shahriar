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
            <div className="container mx-auto   py-16 px-5 ">
                <h3 className=" text-3xl text-center text-lemon-20 font-mono font-bold  ">Things I&rsquo;ve Built that Demonstrate My Skills and Expertise</h3>

                <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">Over the years, I've worked on several personal projects that reflect my proficiency in the technologies I've mastered. Below are some of the key projects I'd like to showcase in my portfolio. Each project highlights my ability to create modern, responsive, and dynamic web applications.</p>
            </div>
            <Part_1/>
            <Part_2/>
        </div>
    );
};

export default Projects;