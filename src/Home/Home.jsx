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
        keywords: 'Web Developer Portfolio, Professional Web Developer, Front-End Developer Portfolio, Back-End Developer Portfolio, Full Stack Developer Portfolio, MERN Stack Developer, React Developer Portfolio, JavaScript Developer Portfolio, Software Engineer Portfolio, Web Design Portfolio, Web Development Services, Freelance Web Developer, Full Stack Web Developer, Web Developer Shahriar Ferdous, Shahriar Ferdous Portfolio, Portfolio of Web Developer, Web Developer Projects, Modern Web Developer Portfolio, Creative Web Developer Portfolio, Technical Portfolio of Shahriar Ferdous, Software Development, Web Development, Mobile Development, Custom Applications, Shahriar Fardows, Fardows, Shahriar,shahriarfardows, SHAHRIAR, FARDOWS, SHAHRIARFARDOWS, shahriar, fardows, web technologies, modern web technologies, web development, web design, web developer in Bangladesh, web developer in Dhaka, web developer in Chittagong, web developer in Sylhet, web developer in Khulna, web developer in Rajshahi, web developer in Barishal, web developer in Rangpur, web developer in Mymensingh, web developer in Comilla, web developer in Narayanganj, web developer in Gazipur, web developer in Tangail, web developer in Narsingdi, web developer in Cox\'s Bazar, web developer in Jessore, web developer in Bogura, web developer in Dinajpur, web developer in Pabna, web developer in Saidpur, web developer in Kushtia, web developer in Faridpur, web developer in Jamalpur, web developer in Panchagarh, web developer in Barguna, web developer in Jhalokati, web developer in Bhola, web developer in Patuakhali, web developer in Pirojpur, web developer in Khagrachari, web developer in Bandarban, web developer in Rangamati, web developer in Noakhali, web developer in Feni, web developer in Lakshmipur, web developer in Brahmanbaria, web developer in Chandpur, web developer in Habiganj, web developer in Maulvibazar, web developer in Sunamganj, web developer in Netrokona, web developer in Sherpur, web developer in Jamalpur, web developer in Meherpur, web developer in Narail, web developer in Jhenaidah, web developer in Magura, web developer in Kurigram, web developer in Lalmonirhat, web developer in Nilphamari, web developer in Thakurgaon, web developer in Gaibandha, web developer in Joypurhat, web developer in Naogaon, web developer in Natore, web developer in Chapainawabganj, web developer in Bogura, web developer in Rajshahi, web developer in Pabna, web developer in Sirajganj, web developer in Dinajpur, web developer in Rangpur, web developer in Thakurgaon, web developer in Nilphamari, web developer in Lalmonirhat, web developer in Kurigram, web developer in Gaibandha, web developer in Joypurhat,',
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