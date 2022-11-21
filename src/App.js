import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import withRouter from "./hoc/withRouter";

// Pages
import About from "./pages/about";
import Catalog from "./pages/catalog";
import Contacts from "./pages/contacts";
import Home from "./pages/home";
import Login from "./pages/login";

// Component 404
import NotFound from "./components/NotFound/NotFound";
import {useEffect} from "react";

function App(props) {
    const goToHome = () => {
        props.router.navigate('/')
    }

    const isLoginPage = () => props.router.location.pathname.includes('login')

    useEffect(() => {
        console.log(props.router.location.pathname.includes('login'))
    }, [])

    return (
        <>
            {isLoginPage() ? null : <Header goToHome={goToHome}/>}
            <Routes>
                <Route path="*" element={<NotFound/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/catalog" element={<Catalog/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/login" element={<Login/>}/>

                {/*Admin routes*/}
            </Routes>
        </>
    );
}

export default withRouter(App);
