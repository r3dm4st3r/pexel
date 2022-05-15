import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const PublicLayout = () => {
    return(
        <div className="public">
            <Header />
            <main role="main" className="block w-full">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default PublicLayout;