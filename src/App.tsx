import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import TvShow from "./components/TvShow";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";

const AppContainer = styled.main`
    font-family: "Noto Sans KR", sans-serif;
`;

const App = () => {
    return (
        <AppContainer>
            <HelmetProvider>
                <Helmet>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500&display=swap" rel="stylesheet" />
                </Helmet>
            </HelmetProvider>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tv" element={<TvShow />} />
                {/* <Route path='/search' element={<Search />} /> */}
            </Routes>
        </AppContainer>
    );
};

export default App;
