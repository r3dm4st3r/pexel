import Search from "./Search";
import Logo from "../common/Logo";
import {Images} from "../../helper/pexel";

const HomeSearch = () => {

    return(
        <>
            <section className="bg-white min-h-[300px] flex items-center justify-center relative overflow-hidden pt-[64px]">
                <div className="py-20 relative w-full">
                    <div className="min-h-[300px] w-full absolute filter blur-md scale-[1.5] inset-0 z-[1] h-full">
                        <img className="w-full h-full object-cover" src={Images.searchBg} alt="search bg" />
                    </div>
                    <div className="container relative z-[2]">
                        <div className="grid grid-cols-1">
                            <div className="max-w-[750px] mx-auto py-10">
                                <h1 className="text-3xl text-center mb-10 text-white font-extrabold">The best free stock photos, royalty free images & videos by <b className="text-theme"><Logo /></b></h1>
                                <Search />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default HomeSearch;