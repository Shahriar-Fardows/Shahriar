import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import Footer from "./Shared/Footer/Footer";

const Root = () => {
    return (
            <div className="relative">
                <div className="fixed top-0 left-0 right-0  z-10">
                    <Navbar />
                </div>
                    <div className="min-h-screen  bg-white z-50 mt-[5rem]">
                        <Outlet />
                    </div>
                <div className="z-10">
                    <Footer />
                </div>
            </div>
    );
};

export default Root;