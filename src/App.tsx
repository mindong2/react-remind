import Router from "./Router";
import Global from "./style/Global";
import { Helmet } from "react-helmet";
const App = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
      </Helmet>
      <Global />
      <Router />
    </>
  );
};

export default App;
