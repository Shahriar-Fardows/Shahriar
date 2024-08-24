import { Fade, Roll} from "react-awesome-reveal";

const Services = () => {
    return (
        <div className=" boxBg h-fit bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-stone-900 dark:to-neutral-900 ">
            <div className="container mx-auto py-10 lg:pt-60  px-5">
                <Fade  >
                    <div className="flex justify-between items-center ">
                        <h2 className="text-5xl lg:text-7xl text-hello-10 font-mono font-bold  ">My Services</h2>
                        <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-hello-10 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-hello-10 transition duration-300 hover:bg-lemon-20 hover:shadow-sm hover:shadow-hello-10 focus:bg-hello-10 focus:shadow-sm  focus-visible:outline-none disabled:cursor-not-allowed disabled:border-lemon-20 disabled:bg-lemon-20 disabled:shadow-none">
                            <span className='font-play'>Hire Me</span>
                        </button>
                    </div>
                </Fade>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10">
                    <Roll direction='up' >
                        <div className="bg-white h-fit lg:h-[12rem] dark:bg-neutral-800 rounded-md shadow-md p-5">
                            <h3 className="text-4xl text-lemon-20 font-play font-bold">Web Design</h3>
                            <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">I design user-friendly, visually appealing websites that help you stand out from the competition.</p>
                        </div>
                    </Roll>
                    <Roll >
                        <div className="bg-white h-fit lg:h-[12rem] dark:bg-neutral-800 rounded-md shadow-md p-5">
                            <h3 className="text-4xl text-lemon-20 font-play font-bold">Web Development</h3>
                            <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">I create high-quality, responsive websites that are easy to navigate and visually appealing.</p>
                        </div>
                    </Roll>
                    <Roll >
                        <div className="bg-white  h-fit lg:h-[12rem] dark:bg-neutral-800 rounded-md shadow-md p-5">
                            <h3 className="text-4xl text-lemon-20 font-play font-bold">Bug Fixing</h3>
                            <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">Quickly identify and fix issues to keep your website or software running smoothly. </p>
                        </div>
                    </Roll>
                    <Roll >
                        <div className="bg-white  h-fit lg:h-[12rem] dark:bg-neutral-800 rounded-md shadow-md p-5">
                            <h3 className="text-4xl text-lemon-20 font-play font-bold">E-Commerce</h3>
                            <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">I create custom e-commerce websites that help you sell products and services online.</p>
                        </div>
                    </Roll>
                    <Roll >
                        <div className="bg-white  h-fit lg:h-[12rem] dark:bg-neutral-800 rounded-md shadow-md p-5">
                            <h3 className="text-4xl text-lemon-20 font-play font-bold">Web Maintenance</h3>
                            <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">I provide ongoing website maintenance to keep your site running smoothly and efficiently.</p>
                        </div>
                    </Roll>
                    <Roll >
                        <div className="bg-white   h-fit lg:h-[12rem] dark:bg-neutral-800 rounded-md shadow-md p-5">
                            <h3 className="text-4xl text-lemon-20 font-play font-bold">Custom Solutions</h3>
                            <p className="text-lg text-neutral-600 font-mono dark:text-neutral-300 py-3">I create custom solutions to meet your unique needs and help you achieve your business goals.</p>
                        </div>
                    </Roll>



                </div>

            </div>
        </div>
    );
};

export default Services;