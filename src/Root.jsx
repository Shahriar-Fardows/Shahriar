import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import { Suspense } from "react";
import Loading from "./Components/Loading/Loading";

const Root = () => {
    return (
        <Suspense fallback={Loading}>
            <div className="relative">
                <div className="fixed top-0 left-0 right-0  z-10">
                    <Navbar />
                </div>
                <div className="min-h-screen  bg-white z-50 mt-[4.5rem]">
                    <Outlet />
                </div>
            </div>
        </Suspense>
    );
};

export default Root;