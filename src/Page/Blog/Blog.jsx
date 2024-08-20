import useSEO from "../../Hook/useSEO";

const Blog = () => {
    useSEO({
        title: 'Blog | Shahriar Fardows',
        description: 'Explore insightful articles and tutorials by Shahriar Fardows on web development, software engineering, and the latest trends in technology.',
        keywords: 'Shahriar Fardows, blog, web development, software engineering, tutorials, technology, MERN stack, frontend developer',
        url: 'https://shahriarfardows.netlify.app/blog',
        image: '../assets/Image/blog_banner.png',
    });
    
    return (
        <div>
            
        </div>
    );
};

export default Blog;