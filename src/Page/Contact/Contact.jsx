import Info from "../../Components/Contact/Info";
import Map from "../../Components/Contact/Map";
import useSEO from "../../Hook/useSEO";

const Contact = () => {
    useSEO({
        title: 'Contact | Shahriar Fardows',
        description: 'Get in touch with Shahriar Fardows for web development inquiries, collaborations, or any questions related to modern web technologies.',
        keywords: 'Shahriar Fardows, contact, web developer, software engineer, portfolio, inquiries, collaborations, frontend developer, MERN stack',
        url: 'https://shahriarfardows.netlify.app/contact',
        image: '../assets/Image/contact_banner.png',
    });
    
    return (
        <div>
            <Info/>
            <Map/>
        </div>
    );
};

export default Contact;