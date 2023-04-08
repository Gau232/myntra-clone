import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ApiContextProvider from "./context/ApiContextProvider";
import HomePage from "./components/Pages/HomePage/HomePage";
import ProductCatalogPage from "./components/Pages/ProductCatalogPage/ProductCatalogPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage/ShoppingCartPage";
import PaymentModalPage from "./components/Pages/PaymentModalPage/PaymentModalPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/catalog",
    element: <ProductCatalogPage />,
  },
  {
    path: "/product",
    element: <ProductPage />,
  },
  {
    path: "/cart",
    element: <ShoppingCartPage />,
  },
  {
    path: "/payment",
    element: <PaymentModalPage />,
  },
]);

const App = () => {
  return (
    <ApiContextProvider>
      <div className="app-main">
        <RouterProvider router={routes} />
      </div>
    </ApiContextProvider>
  );
};

export default App;
