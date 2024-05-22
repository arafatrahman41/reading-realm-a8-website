import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const MainLayouts = () => {
    return (
        <div>
            <Nav/>
            <div className="container mx-auto px-4 md:px-8">
            <Outlet/>
            </div>
        </div>
    );
};

export default MainLayouts;