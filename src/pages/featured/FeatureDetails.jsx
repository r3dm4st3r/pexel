import {lazy, Suspense} from "react";
import Loading from "../../components/Loading";
import {useParams} from "react-router-dom";

const HomeSearch = lazy(() => import('../../components/search/HomeSearch'));
const Featured = lazy(() => import('../../components/pexel/Featured'));

const FeatureDetails = () => {
    const { id } = useParams();
  return(
      <>
        <Suspense fallback={<Loading />}><HomeSearch /></Suspense>
        <Suspense fallback={<Loading />}><Featured details={true} id={id} /></Suspense>
      </>
  )
}
export default FeatureDetails;