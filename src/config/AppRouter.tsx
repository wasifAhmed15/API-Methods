import { Route,BrowserRouter,Routes } from "react-router-dom";

    import HomeData from "../Screen/HomeData";
    import AddData from "../Screen/AddData";
    export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeData/>}/>
        <Route path="add/" element={<AddData/>}/>
        <Route path="add/:id" element={<AddData/>}/>

    </Routes>
    </BrowserRouter>
    </>


}