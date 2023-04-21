import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from "./components/Pages/HomePage/HomePage";
import ProductCatalogPage from "./components/Pages/ProductCatalogPage/ProductCatalogPage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ShoppingCartPage from "./components/Pages/ShoppingCartPage/ShoppingCartPage";
import PaymentModalPage from "./components/Pages/PaymentModalPage/PaymentModalPage";
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* <NavBar /> */}
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/catalog/:category" element={<ProductCatalogPage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/cart" element={<ShoppingCartPage />} />
                <Route path="/payment" element={<PaymentModalPage />} />
                {/* <Route path="/signup" element={<Signup />} />
                <Route path="/checkout" element={<Checkout />} /> */}
            </Routes>
            {/* <Footer /> */}
        </BrowserRouter>
    )
}

export default AppRouter;