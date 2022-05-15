import BlurImage from "./BlurImage";
import {useState} from "react";
import ShowDetails from "./ShowDetails";


const ShowImage = ( { item, landscape, medium, large, original } ) => {
    const [open, setOpen] = useState(false);
  const fetchDetails = (e) => {
      e.preventDefault();
      setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

    return(
      <>
          <div className="w-full h-full relative" onClick={(e)=> fetchDetails(e)}>
              {item && landscape &&
                  <BlurImage preview={item?.src?.landscape} image={item?.src?.landscape} alt={item?.alt} />
              }
              {item && medium &&
                  <BlurImage preview={item?.src?.medium} image={item?.src?.medium} alt={item?.alt} />
              }
              {item && large &&
                  <BlurImage preview={item?.src?.large} image={item?.src?.large} alt={item?.alt} />
              }
              {item && original &&
                  <BlurImage preview={item?.src?.original} image={item?.src?.original} alt={item?.alt} />
              }
              {!item &&
                  <span className="block text-theme font-extrabold">Please provide item object</span>
              }
          </div>
          {open &&
              <ShowDetails item={item} handleClose={handleClose} />
          }
      </>
  )
}
export default ShowImage;