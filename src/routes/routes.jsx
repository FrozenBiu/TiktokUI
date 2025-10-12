import config from "~/config";

import Home from "~/pages/Home/index.jsx";
import Following from "~/pages/Following/index.jsx";
import Explore from "~/pages/Explore/index.jsx";
import Friends from "~/pages/Friends/index.jsx";
import Profile from "~/pages/Profile/index.jsx";
import Upload from "~/pages/Upload/index.jsx";
import Search from "~/pages/Search/index.jsx";
import Live from "../pages/Live";
// Layouts
import UploadLayout from "~/layout/UploadLayout/UploadLayout.jsx";

// Pulic routes dùng khi không cần đăng nhập vẫn truy cập được
export const publicRoutes = [
  {
    path: config.routes.home,
    component: Home,
  },
  {
    path: config.routes.following,
    component: Following,
  },
  {
    path: config.routes.explore,
    component: Explore,
  },
  {
    path: config.routes.friends,
    component: Friends,
  },
  {
    path: config.routes.profile,
    component: Profile,
  },
  {
    path: config.routes.upload,
    component: Upload,
    layout: UploadLayout,
  },
  {
    path: config.routes.search,
    component: Search,
    layout: null,
  },
  {
    path: config.routes.live,
    component: Live,
  },
];

export const privateRoutes = [];
