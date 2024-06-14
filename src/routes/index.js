import DefaultLayout from "@/layouts/DefaultLayout";
import Authen from "@/pages/Authen";
import Cart from "@/pages/Cart";
import Home from "@/pages/Home";
import ProductDetails from "@/pages/ProductDetails";
import User from "@/pages/User";

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
  { path: "/account", component: User, layout: null, role: "user" },
  { path: "/cart", component: Cart, layout: null, role: "user" },
  { path: "/admin", component: Authen, layout: null, role: "admin" },
];

export { publicRotes, privateRoutes };
