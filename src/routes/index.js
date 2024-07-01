import DefaultLayout from "@/layouts/DefaultLayout";
import NotFooterLayout from "@/layouts/NotFooterLayout";
import UserLayout from "@/layouts/UserLayout";
import Authen from "@/pages/Authen";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import Info from "@/pages/Info";

const publicRotes = [
  { path: "/", component: Home, layout: DefaultLayout },
  {
    path: "/authen",
    component: Authen,
    layout: null,
  },
  {
    path: "/product-detail/:id",
    component: ProductDetails,
    layout: DefaultLayout,
  },
];

const privateRoutes = [
  { path: "/account", component: Info, layout: UserLayout, role: "user" },
  { path: "/account/change-password", component: Info, layout: UserLayout, role: "user" },
  { path: "/account/history-order", component: Info, layout: UserLayout, role: "user" },
  { path: "/account/method-pay", component: Info, layout: UserLayout, role: "user" },
  { path: "/account/address", component: Info, layout: UserLayout, role: "user" },
  { path: "/cart", component: Cart, layout: NotFooterLayout, role: "user" },
  { path: "/admin", component: Info, layout: null, role: "admin" },
];

export { publicRotes, privateRoutes };
