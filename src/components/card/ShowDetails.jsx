import LazyLoad from "react-lazyload";
import BlurImage from "./BlurImage";

const ShowDetails = (props) => {
  const {item, handleClose} = props;
  return(
      <>
        <div className="fixed inset-0 w-full h-full z-10 flex items-center justify-center">
            <div className="backdrop-blur-3xl relative m-auto w-full h-full">
              <div className="flex items-center justify-between bg-white/60 shadow-sm drop-shadow-sm px-3 py-5">
                <div>
                  <p className="font-bold uppercase tracking-wider">By {item?.photographer}</p>
                </div>
                <div onClick={handleClose} className="cursor-pointer w-6 h-6 bg-white flex justify-center items-center rounded-full">
                  <span>X</span>
                </div>
              </div>
              <div className="p-3 h-[calc(100%-65px)]">
                <div className="grid md:grid-cols-2 gap-10 h-full">
                  <LazyLoad  height={100} className="max-h-[400px] md:max-h-full">
                    <BlurImage preview={item?.src?.portrait} image={item?.src?.portrait} alt={item?.alt} />
                  </LazyLoad>
                  <div>

                  </div>
                </div>
              </div>
            </div>
        </div>
      </>
  )
}
export default ShowDetails;