import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import HostLayout from "./components/layout/HostLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailsLoader } from "./pages/Vans/VanDetail";
import Dashboard from "./pages/Host/Dashboard";
import Income from "./pages/Host/Income";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails, {
  loader as hosVanDetailsLoader,
} from "./pages/Host/HostVanDetails";
import Reviews from "./pages/Host/Reviews";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";
import Login, { loader as loginLoader, action as loginAction } from "./pages/Login";
import { requireAuth } from "./utils/utils";

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
        loader={vanDetailsLoader}
      ></Route>

      <Route path="/host" element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async () => requireAuth()}
        />
        <Route
          path="income"
          element={<Income />}
          loader={async () => requireAuth()}
        />
        <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
        <Route
          path="vans/:id"
          element={<HostVanDetails />}
          loader={hosVanDetailsLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async () => requireAuth()}
          />
          <Route
            path="pricing"
            element={<HostVanPricing />}
            loader={async () => requireAuth()}
          />
          <Route
            path="photos"
            element={<HostVanPhotos />}
            loader={async () => requireAuth()}
          />
        </Route>
        <Route
          path="reviews"
          element={<Reviews />}
          loader={async () => requireAuth()}
        />
      </Route>

      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route path="*" element={<NotFound />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
