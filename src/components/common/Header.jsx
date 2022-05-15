import {Link} from "react-router-dom";
import Logo from "./Logo";
import {useWindowScroll} from "react-use";
import {useRef} from "react";
const Header = () => {
    const headerEl = useRef(null);
    const windowScroll = useWindowScroll();

    if (windowScroll.y > 10) {
        headerEl?.current?.classList.add('bg-white');
        headerEl?.current?.classList.remove('text-white');
    } else {
        headerEl?.current?.classList.remove('bg-white');
        headerEl?.current?.classList.add('text-white');
    }


    return(
        <header ref={headerEl} className={`text-white py-1 top-0 left-0 right-0 w-full z-10 fixed transition-all shadow-lg drop-shadow-md`}>
            <div className="container-fluid">
                <div className="flex items-center justify-between">
                    <Logo />
                    <div className="menu py-1">
                        <ul className="flex items-center justify-end">
                            <li><Link className="tracking-widest uppercase flex px-2 py-3 font-extrabold" to="/featured">Featured</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;