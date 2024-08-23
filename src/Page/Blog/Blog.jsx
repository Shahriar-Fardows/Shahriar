import img from "../../assets/Image/csoon.png";
import useSEO from "../../Hook/useSEO";
const Blog = () => {
    useSEO({
        title: 'Blog | Shahriar Fardows',
        description: 'Explore insightful articles and tutorials by Shahriar Fardows on web development, software engineering, and the latest trends in technology.',
        keywords: 'Shahriar Fardows, blog, web development, software engineering, tutorials, technology, MERN stack, frontend developer,shahriarfardows, SHAHRIAR, FARDOWS, SHAHRIARFARDOWS, shahriar, fardows, web technologies, modern web technologies, web development, web design, web developer in Bangladesh, web developer in Dhaka, web developer in Chittagong, web developer in Sylhet, web developer in Khulna, web developer in Rajshahi, web developer in Barishal, web developer in Rangpur, web developer in Mymensingh, web developer in Comilla, web developer in Narayanganj, web developer in Gazipur, web developer in Tangail, web developer in Narsingdi, web developer in Cox\'s Bazar, web developer in Jessore, web developer in Bogura, web developer in Dinajpur, web developer in Pabna, web developer in Saidpur, web developer in Kushtia, web developer in Faridpur, web developer in Jamalpur, web developer in Panchagarh, web developer in Barguna, web developer in Jhalokati, web developer in Bhola, web developer in Patuakhali, web developer in Pirojpur, web developer in Khagrachari, web developer in Bandarban, web developer in Rangamati, web developer in Noakhali, web developer in Feni, web developer in Lakshmipur, web developer in Brahmanbaria, web developer in Chandpur, web developer in Habiganj, web developer in Maulvibazar, web developer in Sunamganj, web developer in Netrokona, web developer in Sherpur, web developer in Jamalpur, web developer in Meherpur, web developer in Narail, web developer in Jhenaidah, web developer in Magura, web developer in Kurigram, web developer in Lalmonirhat, web developer in Nilphamari, web developer in Thakurgaon, web developer in Gaibandha, web developer in Joypurhat, web developer in Naogaon, web developer in Natore, web developer in Chapainawabganj, web developer in Bogura, web developer in Rajshahi, web developer in Pabna, web developer in Sirajganj, web developer in Dinajpur, web developer in Rangpur, web developer in Thakurgaon, web developer in Nilphamari, web developer in Lalmonirhat, web developer in Kurigram, web developer in Gaibandha, web developer in Joypurhat,',
        url: 'https://shahriarfardows.netlify.app/blog',
        image: '../assets/Image/blog_banner.png',
    });
    
    return (
        <div className="h-[50px] px-10 py-36 md:px-[12rem] lg:py-[16rem] lg:px-[48rem]">
           <img  src={img} alt="" />
        </div>
    );
};

export default Blog;