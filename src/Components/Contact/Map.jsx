import {  JackInTheBox } from "react-awesome-reveal";

const Map = () => {
    return (
        <div>
            <JackInTheBox>
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="w-full  h-[50vh] bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.0610753017829!2d90.44485661208113!3d23.7386660970444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b81f5efb5485%3A0xb04fa4f1d0446414!2z4Kas4Ka-4Kav4Ka84Kak4KeB4KayIOCmruCmvifgpq7gp4HgprAg4Kac4Ka-4Kau4KeHIOCmruCmuOCmnOCmv-Cmpg!5e0!3m2!1sbn!2sbd!4v1724254804770!5m2!1sbn!2sbd"
                        ></iframe>
                        <div className="hidden lg:block">
                        <div className=" bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p className="mt-1">PCQW+JJP, Kachari Para, Dakshin Gao, Noya Para Rd, ঢাকা 1214</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a href="mailto:shahriarfardows@gmail.com" className="text-indigo-500 leading-relaxed">shahriarfardows@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p className="leading-relaxed">+8801917621525</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </JackInTheBox>
        </div>
    );
};

export default Map;


