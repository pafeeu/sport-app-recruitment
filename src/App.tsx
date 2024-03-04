import './App.css'
import Home from "./pages/Home.tsx";
import {HashRouter, Route, Routes} from "react-router-dom";
import Table from "./pages/Table.tsx";
import TopLogo from "./components/TopLogo.tsx";
import {QueryClient, QueryClientProvider,} from '@tanstack/react-query'
import {AnimatePresence} from "framer-motion";

const queryClient = new QueryClient();


function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <HashRouter>
                <TopLogo/>
                <AnimatePresence>
                    <Routes>
                        <Route path="/" Component={Home}/>
                        <Route path="/table" Component={Table}/>
                    </Routes>
                </AnimatePresence>
            </HashRouter>
        </QueryClientProvider>
    )
}

export default App
