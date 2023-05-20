import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home"
import CartResume from "./pages/CartResume";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="/carrinho" element={<CartResume />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;