import './App.css'
import Home from "./pages/Home.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import Table from "./pages/Table.tsx";
import TopLogo from "./components/TopLogo.tsx";

function App() {
    return (
        <HashRouter>
            <TopLogo/>
            <Routes>
                <Route path="/" Component={Home}/>
                <Route path="/table" Component={Table}/>
            </Routes>
        </HashRouter>
    )
}

export default App
