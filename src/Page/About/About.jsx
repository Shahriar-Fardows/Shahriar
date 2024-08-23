import Part_1 from "../../Components/About/Part_1/Part_1";
import Part_2 from "../../Components/About/Part_2/Part_2";
import Part_3 from "../../Components/About/Part_3/Part_3";
import Part_4 from "../../Components/About/Part_4/Part_4";
import useSEO from "../../Hook/useSEO";

const About = () => {

    useSEO({
        title: 'About | Shahriar Fardows',
        description: 'Learn more about Shahriar Fardows, a passionate web developer with over 2 years of experience in creating modern, responsive, and dynamic web applications.',
        keywords: 'Shahriar Fardows, web developer, software engineer, portfolio, about Shahriar, frontend developer, MERN stack,shahriarfardows, SHAHRIAR, FARDOWS, SHAHRIARFARDOWS, shahriar, fardows, web technologies, modern web technologies, web development, web design, web developer in Bangladesh, web developer in Dhaka, web developer in Chittagong, web developer in Sylhet, web developer in Khulna, web developer in Rajshahi, web developer in Barishal, web developer in Rangpur, web developer in Mymensingh, web developer in Comilla, web developer in Narayanganj, web developer in Gazipur, web developer in Tangail, web developer in Narsingdi, web developer in Cox\'s Bazar, web developer in Jessore, web developer in Bogura, web developer in Dinajpur, web developer in Pabna, web developer in Saidpur, web developer in Kushtia, web developer in Faridpur, web developer in Jamalpur, web developer in Panchagarh, web developer in Barguna, web developer in Jhalokati, web developer in Bhola, web developer in Patuakhali, web developer in Pirojpur, web developer in Khagrachari, web developer in Bandarban, web developer in Rangamati, web developer in Noakhali, web developer in Feni, web developer in Lakshmipur, web developer in Brahmanbaria, web developer in Chandpur, web developer in Habiganj, web developer in Maulvibazar, web developer in Sunamganj, web developer in Netrokona, web developer in Sherpur, web developer in Jamalpur, web developer in Meherpur, web developer in Narail, web developer in Jhenaidah, web developer in Magura, web developer in Kurigram, web developer in Lalmonirhat, web developer in Nilphamari, web developer in Thakurgaon, web developer in Gaibandha, web developer in Joypurhat, web developer in Naogaon, web developer in Natore, web developer in Chapainawabganj, web developer in Bogura, web developer in Rajshahi, web developer in Pabna, web developer in Sirajganj, web developer in Dinajpur, web developer in Rangpur, web developer in Thakurgaon, web developer in Nilphamari, web developer in Lalmonirhat, web developer in Kurigram, web developer in Gaibandha, web developer in Joypurhat,',
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