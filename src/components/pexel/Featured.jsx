import {useEffect, useState} from "react";
import axios from "../../api/axios";
import {pexel} from "../../helper/pexel";
import LazyLoad from "react-lazyload";
import { Icon } from '@iconify/react';
import {Link} from "react-router-dom";

import useGlobalState from "../../hooks/useGlobalState";
import ShowImage from "../card/ShowImage";

const Featured = (props) => {
  const { details, id } = props;
  const {globalData , setGlobalData} = useGlobalState();
  const [data, setData] = useState();

  const getFeaturedData = () => {
      const url = details ? `${pexel.BASE}/collections/${id}?per_page=20` : `${pexel.BASE}/collections/featured?per_page=20`;
    return axios.get(url)
        .then(response => {
            // console.log(response);
            setData(response?.data);
        })
        .catch(response => {
          console.log(response);
        })
  }

  const showFeaturedData = () => {
      const showData = details ? globalData?.featureDetails?.media?.filter((item) => {return item?.type === "Photo"}) : globalData?.featuredList?.collections;
      return showData?.map((item) => {
          return(
              details ? (
                  <div key={item.id} className="h-full">
                      <LazyLoad  height={400} className="h-full">
                          <div className="text-center shadow drop-shadow-lg rounded-md h-full p-4 bg-white">
                              <div className="rounded-md flex align-baseline flex-col flex-1 h-full">
                                  <div className="min-h-[150px] lg:min-h-[200px] mb-4">
                                      <ShowImage item={item} landscape={true}/>
                                  </div>
                                  <div className="flex items-center">
                                      <span className="text-left text-xs block">By {item?.photographer}</span>
                                  </div>
                              </div>
                          </div>
                      </LazyLoad>
                  </div>
              ) : (
                  <Link to={item.id} key={item.id} className="h-full">
                      <LazyLoad  height={400} className="h-full">
                          <div className="text-center shadow drop-shadow-lg rounded-md h-full p-4 bg-gradient-to-b from-cyan-700 to-yellow-100">
                              <div className="rounded-md flex align-baseline justify-end flex-col flex-1 h-full">
                                  <div className="min-h-[150px] lg:min-h-[200px]"></div>
                                  <h6 className="text-md text-left mb-2 break-words">{item.title}</h6>
                                  <div className="flex items-center">
                                      <div className="flex items-center">
                                          <Icon width={20} icon="clarity:video-camera-line" />
                                          <span className="ml-2">{item.media_count}</span>
                                      </div>
                                      <div className="flex items-center ml-3">
                                          <Icon width={20} icon="clarity:image-line" />
                                          <span className="ml-2">{item.photos_count}</span>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </LazyLoad>
                  </Link>
              )
          )
      })
  }


  useEffect(()=> {
      getFeaturedData().then(r=>r);
      // eslint-disable-next-line
  }, [])

  useEffect(()=> {
    if (details) {
        setGlobalData((prev) => {
            return{
                ...prev,
                featureDetails: data
            }
        })
    } else {
        setGlobalData((prev) => {
            return{
                ...prev,
                featuredList: data
            }
        })
    }
      // eslint-disable-next-line
  }, [data, details])

  return(
      <section className="py-5 md:py-20 bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 mb-5">
            <h3>Featured Collections</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {showFeaturedData()}
          </div>

        </div>
      </section>
  )
}
export default Featured;