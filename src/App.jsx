import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HostLayout from "./components/layout/HostLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as VanDetailsLoader } from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans, { loader as HostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails, { loader as HosVanDetailsLoader } from "./pages/Host/HostVanDetails";
import Reviews from "./pages/Host/Reviews";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./components/Error";
import Login from "./components/Login";

import "./server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="vans" element={<Vans />} loader={vansLoader} />
      <Route
        path="vans/:id"
        element={<VanDetail />}
        loader={VanDetailsLoader}
      ></Route>

      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => {
            return null;
          }}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => {
            return null;
            }}
            />
            <Route
            path="vans"
            element={<HostVans />}
            loader={HostVansLoader}
            />
            <Route
            path="vans/:id"
            element={<HostVanDetails />}
            loader={HosVanDetailsLoader}
            >
            <Route
              index
              element={<HostVanInfo />}
              loader={async () => {
              return null;
            }}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => {
              return null;
            }}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => {
              return null;
            }}
          />
        </Route>
        <Route path="reviews" element={<Reviews />} />
      </Route>

      <Route path="login" element={<Login />} />
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
