import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "components/Layout";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
