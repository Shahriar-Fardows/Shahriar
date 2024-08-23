import Part_1 from "../../Components/Projects/Part_1/Part_1";
import Part_2 from "../../Components/Projects/Part_2/Part_2";
import useSEO from "../../Hook/useSEO";

const Projects = () => {
    useSEO({
        title: 'Projects | Shahriar Fardows',
        description: 'Explore the diverse range of projects by Shahriar Fardows, showcasing expertise in web development, MERN stack, and innovative solutions for various industries.',
        keywords: 'Shahriar Fardows, projects, web development, software engineer, MERN stack projects, portfolio, frontend developer, web applications,shahriarfardows, SHAHRIAR, FARDOWS, SHAHRIARFARDOWS, shahriar, fardows, web technologies, modern web technologies, web development, web design, web developer in Bangladesh, web developer in Dhaka, web developer in Chittagong, web developer in Sylhet, web developer in Khulna, web developer in Rajshahi, web developer in Barishal, web developer in Rangpur, web developer in Mymensingh, web developer in Comilla, web developer in Narayanganj, web developer in Gazipur, web developer in Tangail, web developer in Narsingdi, web developer in Cox\'s Bazar, web developer in Jessore, web developer in Bogura, web developer in Dinajpur, web developer in Pabna, web developer in Saidpur, web developer in Kushtia, web developer in Faridpur, web developer in Jamalpur, web developer in Panchagarh, web developer in Barguna, web developer in Jhalokati, web developer in Bhola, web developer in Patuakhali, web developer in Pirojpur, web developer in Khagrachari, web developer in Bandarban, web developer in Rangamati, web developer in Noakhali, web developer in Feni, web developer in Lakshmipur, web developer in Brahmanbaria, web developer in Chandpur, web developer in Habiganj, web developer in Maulvibazar, web developer in Sunamganj, web developer in Netrokona, web developer in Sherpur, web developer in Jamalpur, web developer in Meherpur, web developer in Narail, web developer in Jhenaidah, web developer in Magura, web developer in Kurigram, web developer in Lalmonirhat, web developer in Nilphamari, web developer in Thakurgaon, web developer in Gaibandha, web developer in Joypurhat, web developer in Naogaon, web developer in Natore, web developer in Chapainawabganj, web developer in Bogura, web developer in Rajshahi, web developer in Pabna, web developer in Sirajganj, web developer in Dinajpur, web developer in Rangpur, web developer in Thakurgaon, web developer in Nilphamari, web developer in Lalmonirhat, web developer in Kurigram, web developer in Gaibandha, web developer in Joypurhat,',
        url: 'https://shahriarfardows.netlify.app/projects',
        image: '../assets/Image/projects_overview.png',
    });
    
    return (
        <div>
            <div className="container mx-auto   py-16 px-5 ">
                <h3 className=" text-3xl text-center text-lemon-20 font-mono font-bold  ">Things I&rsquo;ve Built that Demonstrate My Skills and Expertise</h3>

                <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">Over the years, I&apos;ve worked on several personal projects that reflect my proficiency in the technologies I&apos;ve mastered. Below are some of the key projects I&apos;d like to showcase in my portfolio. Each project highlights my ability to create modern, responsive, and dynamic web applications.</p>
            </div>
            <Part_1/>
            <Part_2/>
        </div>
    );
};

export default Projects;