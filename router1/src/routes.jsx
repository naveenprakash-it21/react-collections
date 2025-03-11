import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Home } from "./pages/home";
import { Product } from "./pages/product";
import { About } from "./pages/about";
import { RootLayout } from "./layout/RootLayout";
import { Dashboard } from "./pages/Dashboard";
import Info from "./components/info";
import Form from "./components/form";
import ContactLayout from "./layout/contactLayout";
import NotFound from "./pages/notfound";
import UserLayout from "./layout/userLayout";
import User from "./pages/users";
import { UserLoader } from "./utils/userloader";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="product" element={<Product />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<ContactLayout />}>
        <Route path="info" element={<Info />} />
        <Route path="form" element={<Form />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="user" element={<UserLayout />}>
        <Route index element={<User />}  loader={UserLoader}/>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
