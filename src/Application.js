import {lazy , Suspense } from "react";
import { Routes, Route } from "react-router-dom";


import Error from "./components/Error";
import Loading from "./components/Loading";

const PublicLayout = lazy(() => import('./layout/PublicLayout'));
const HomePage = lazy(() => import('./pages/home/HomePage'));
const SearchPage = lazy(() => import('./pages/search/SearchPage'));
const FeaturedPage = lazy(() => import('./pages/featured/FeaturedPage'));
const FeatureDetails = lazy(() => import('./pages/featured/FeatureDetails'));

const Application = () => {
  return(
      <Routes>
          <Route path="/" element={<Suspense fallback={<Loading />}><PublicLayout /></Suspense>}>
              <Route index element={<Suspense fallback={<Loading />}><HomePage /></Suspense>} />
              <Route path="/search" element={<Suspense fallback={<Loading />}><SearchPage /></Suspense>} />
              <Route path="/featured" element={<Suspense fallback={<Loading />}><FeaturedPage /></Suspense>} />
              <Route path="/featured/:id" element={<Suspense fallback={<Loading />}><FeatureDetails /></Suspense>} />
          </Route>
          <Route element={<Suspense fallback={<Loading />}><PublicLayout /></Suspense>}>
              <Route path="*" element={<Error />} />
          </Route>
      </Routes>
  )
}

export default Application;