import { Mainlayout } from "@layouts/index";
// routers
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import AboutUs from "@pages/AboutUs";
import Products from "@pages/Products";
import Login from "@pages/Login";
import Register from "@pages/Register";
import Error from "@pages/Error";
const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "categories",
          element: <Categories />,
        },
        {
          path: "products/:prefix",
          element: <Products />,
          loader: ({ params }) => {
            if (typeof params.prefix !== "string") {
              throw new Response("bad request", {
                statusText: "no such path",
                status: 400,
              });
            }
            if (!/^[a-z]+$/i.test(params.prefix)) {
              throw new Response("bad request", {
                statusText: "prefix must contain only letters",
                status: 400,
              });
            }
            //do not forget to return true in the loader function
            return true;
          },
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRouter;
