import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import 'react-toastify/dist/ReactToastify.css';


const queryClient = new QueryClient();

// =======================================================
// ✅ Wrapper that hides Header on specific routes
// =======================================================
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            {/* {!shouldHideHeader && <Header />} */}
            {children}
        </>
    );
};
// =======================================================

const App = () => (
    <div className="font-primarylw">
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        
                        <Route path="/products" element={<ProductsPage />} />
                        <Route path="/product/:id" element={<ProductDetailsPage />} />
                        <Route path="/cart" element={<CartPage />} />
                        <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="*" element={<NotFound />} />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </QueryClientProvider>
    </div >
);

export default App;