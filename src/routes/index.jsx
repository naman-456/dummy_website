import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { HomePage } from "../components/HomePage";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<HomePage />} />
))

export default router;