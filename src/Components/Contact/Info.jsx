import { Fade, Slide } from "react-awesome-reveal";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useForm } from '@formspree/react';
import Swal from "sweetalert2";

const Info = () => {
    const [state, handleSubmit] = useForm("xdknperk");

    // Handle form submission
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await handleSubmit(event);
            if (state.succeeded) {              
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Your message has been sent.',
                        confirmButtonText: 'OK',
                    }).then(() => {
                        // reset form after submission 
                        
                    });
                } 
                event.target.reset();
            } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again.',
                confirmButtonText: 'OK',
            });
        }
    };

    // Display success message if form submission succeeded
    

    return (
        <div className="container mx-auto py-20 h-[100vh]">
            <div>
                <h1 className="mb-4 px-5 text-4xl lg:text-6xl tracking-tight font-play text-lemon-20 dark:text-white">Let&apos;s Work Together</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-around items-center">
                    <Fade delay={0.2e3}>
                        <div className="py-10">
                            <div className="px-5">
                                <h5 className="pt-3">My Address:</h5><br />
                                <h3 className="pb-3 text-lemon-20 font-bold font-play text-2xl md:text-3xl">
                                    Kachari Para, Dakshin Gao, Noya Para Rd, Dhaka 1214
                                </h3>
                                <hr />
                                <h5 className="pt-3">Call me:</h5><br />
                                <h3 className="pb-3 text-lemon-20 font-bold font-play text-2xl md:text-3xl">
                                    +8801917621525
                                </h3>
                                <hr />
                                <h5 className="pt-3">Mail me:</h5><br />
                                <h3 className="pb-3 text-lemon-20 font-bold font-play text-2xl md:text-3xl">
                                    <span>shahriarfardows@gmail.com</span>
                                </h3>
                                <hr />
                                <h5 className="pt-3">Add With me:</h5><br />
                                <div className="flex mt-4 gap-10">
                                    <Link
                                        to="https://www.facebook.com/profile.php?id=100085970036969"
                                        className="text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                                        target='_blank'
                                    >
                                        <span className="sr-only">Facebook</span>
                                        <FaFacebook className="w-8 h-8" />
                                    </Link>
                                    <Link
                                        to="https://www.linkedin.com/in/shahriar-fardows/"
                                        className="text-blue-600 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                                        target='_blank'
                                    >
                                        <span className="sr-only">Linkedin</span>
                                        <FaLinkedin className="w-8 h-8" />
                                    </Link>
                                    <Link
                                        to="https://github.com/Shahriar-Fardows"
                                        className="text-black hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-200"
                                        target='_blank'
                                    >
                                        <span className="sr-only">Git Hub</span>
                                        <FaGithub className="w-8 h-8" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <Slide direction="right">
                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                                <p className="mb-4 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
                                    To get in touch with us, please fill out this form. We will get back to you shortly.
                                </p>
                                <form onSubmit={onSubmit} className="space-y-2">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="name"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                Your email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                                placeholder="name@flowbite.com"
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Subject
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Let us know how we can help you"
                                            required
                                        />
                                    </div>
                                    <div className="sm:col-span-2">
                                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                                            Your message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Leave a comment..."
                                        ></textarea>
                                    </div>
                                    <button
                                        disabled={state.submitting}
                                        type="submit"
                                        className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-hello-10 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-hello-10 transition duration-300 hover:bg-lemon-20 hover:shadow-sm hover:shadow-hello-10 focus:bg-hello-10 focus:shadow-sm focus:shadow-lemon-20 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-lemon-20 disabled:bg-lemon-20 disabled:shadow-none"
                                    >
                                        <span className='font-play'> Send message</span>
                                    </button>
                                </form>
                            </div>
                        </section>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Info;
