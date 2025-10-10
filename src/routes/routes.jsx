import routesConfig from "../config/routes.js";

import Home from "../pages/Home/index.jsx";
import Following from "../pages/Following/index.jsx";
import Explore from "../pages/Explore/index.jsx";
import Friends from "../pages/Friends/index.jsx";
import Profile from "../pages/Profile/index.jsx";
import Upload from "../pages/Upload/index.jsx";
import Search from "../pages/Search/index.jsx";
// Layouts
import UploadLayout from "../components/Layout/UploadLayout/UploadLayout.jsx";

// Pulic routes dùng khi không cần đăng nhập vẫn truy cập được
export const publicRoutes = [
  {
    path: routesConfig.home,
    component: Home,
  },
  {
    path: routesConfig.following,
    component: Following,
  },
  {
    path: routesConfig.explore,
    component: Explore,
  },
  {
    path: routesConfig.friends,
    component: Friends,
  },
  {
    path: routesConfig.profile,
    component: Profile,
  },
  {
    path: routesConfig.upload,
    component: Upload,
    layout: UploadLayout,
  },
  {
    path: routesConfig.search,
    component: Search,
    layout: null,
  },
];

export const privateRoutes = [];
