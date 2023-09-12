import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AxiosInterceptor } from "./api/axios";

import "./assets/styles/style.scss";

import Loading from "./components/common/Loading";
import Layout from "./components/layout/Layout";
import NoPage from "./components/common/NoPage";
import Main from "./components/main/Main";
import Search from "./components/pages/search/Search";
import Write from "./components/pages/write/Write";
import News from "./components/pages/news/News";
import MyPage from "./components/pages/myPage/MyPage";

const App = () => {
  return (
    <div id="app">
      <AxiosInterceptor>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="*" element={<NoPage />} />
              <Route path="/" element={<Main />} />
              <Route path="/search" element={<Search />} />
              <Route path="/write" element={<Write />} />
              <Route path="/news" element={<News />} />
              <Route path="/myPage" element={<MyPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AxiosInterceptor>
    </div>
  );
};

export default App;
