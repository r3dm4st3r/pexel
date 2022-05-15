import Masonry from "react-masonry-component";
import LazyLoad from 'react-lazyload';
import {useEffect, useRef, useState} from "react";
import useGlobalState from "../../hooks/useGlobalState";
import ShowImage from "../../components/card/ShowImage";
import HomeSearch from "../../components/search/HomeSearch";
import {Images} from "../../helper/pexel";

const SearchPage = () => {
    const { globalData } = useGlobalState();
    const [images, setImages] = useState();
    const searchMasonryEvents = useRef(null);

    const GetImage = () => {
        return(
            <>
                <Masonry
                    ref={searchMasonryEvents}
                    enableResizableChildren={true}
                    className="w-full"
                >
                    {images?.photos?.map((item) => {
                        return (
                            <div className="w-full sm:w-[50%] md:w-[20%] p-2" key={item?.id}>
                                <LazyLoad  height={100}>
                                    <ShowImage item={item} large={true}/>
                                </LazyLoad>
                            </div>
                        )
                    })}
                </Masonry>
            </>
        )
    }

    const NoImage = () => {
      return(
          <div className="max-w-[450px] mx-auto">
              <img className="w-full h-auto mx-auto" src={Images.noImage} alt="Search images"/>
          </div>
      )
    }

    const renderImage = () => {
      return images?.photos && images?.total_results > 0 ? GetImage() : NoImage();
    }


    useEffect(()=> {
        setImages(globalData?.search?.results);
    }, [globalData])

    return(
        <>
            <HomeSearch />
            <section className="py-10">
                <div className="container">
                    { renderImage() }
                </div>
            </section>
        </>
    )
}

export default SearchPage;