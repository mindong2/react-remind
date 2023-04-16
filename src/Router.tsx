import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coins from "./routes/Coins";
import Detail from "./routes/Detail";
import Chart from "./routes/Chart";
import Price from "./routes/Price";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Detail />}>
          <Route path="price" element={<Price />}></Route>
          <Route path="Chart" element={<Chart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
