
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from "react-router-dom";
import { Home } from './pages/home';
import { Product } from './pages/product';
import {About} from './pages/about';
import { RootLayout } from "./layout/RootLayout";
import { Dashboard } from "./pages/Dashboard";
import Info from "./components/info";
import Form from "./components/form";
import  ContactLayout  from "./layout/contactLayout";
import NotFound from "./pages/notfound";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<ContactLayout/>}>
          <Route path="info" element={<Info/>}/>
          <Route path="form" element={<Form/>}/>
        </Route>
        <Route path = "Dashboard" element = {<Dashboard/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
