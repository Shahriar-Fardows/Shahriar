import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import { Suspense } from "react";
import Loading from "./Components/Loading/Loading";

const Root = () => {
    return (
        <Suspense fallback={Loading}>
            <div>
                <Navbar />
                <div>
                    <Outlet />
                </div>
            </div>
        </Suspense>
    );
};

export default Root;