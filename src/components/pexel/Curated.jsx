import {useEffect, useState} from "react";
import axios from "../../api/axios";
import {pexel} from "../../helper/pexel";
import ShowImage from "../card/ShowImage";
import useGlobalState from "../../hooks/useGlobalState";
import LazyLoad from "react-lazyload";

const Curated = () => {
  const {globalData , setGlobalData} = useGlobalState();
  const [data, setData] = useState();
  const getCuratedData = () => {
    return axios.get(`${pexel.BASE}/curated?per_page=20`)
        .then(response => {
          setData(response?.data);
        })
        .catch(response => {
          console.log(response);
        })
  }

  const showCuratedData = () => {
    return globalData?.curatedList?.photos?.map((item) => {
      return(
          <div key={item.id}>
              <LazyLoad  height={100}>
                  <ShowImage item={item} landscape={true}/>
              </LazyLoad>
          </div>
      )
    })
  }

  useEffect(()=> {
    getCuratedData().then(r=>r);
    // eslint-disable-next-line
  }, [])

  useEffect(()=> {
    setGlobalData((prev) => {
      return{
        ...prev,
        curatedList: data
      }
    })
      // eslint-disable-next-line
  }, [data])

  return(
      <section className="py-5 md:py-20">
        <div className="container">
          <div className="grid grid-cols-1 mb-5">
            <h3>Our Picks</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {showCuratedData()}
          </div>

        </div>
      </section>
  )
}
export default Curated;