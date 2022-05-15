import {lazy , Suspense } from "react";
import Loading from "../../components/Loading";

const HomeSearch = lazy(() => import('../../components/search/HomeSearch'));
const Featured = lazy(() => import('../../components/pexel/Featured'));

const FeaturedPage = () => {
  return(
      <>
          <Suspense fallback={<Loading />}><HomeSearch /></Suspense>
          <Suspense fallback={<Loading />}><Featured /></Suspense>
      </>
  )
}

export default FeaturedPage;