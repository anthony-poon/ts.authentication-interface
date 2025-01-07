import React from "react";
import DefaultUIProvider from "./DefaultUIProvider";
import { BrowserRouter, Route, Routes } from 'react-router';
import IndexApp from './index/IndexApp';
import LoginApp from './login/LoginApp';
import { Provider } from 'react-redux';
import store from "@store/index";

const App = () => {
  return (
    <Provider store={store}>
      <DefaultUIProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<IndexApp />} />
            <Route path="/login" element={<LoginApp />} />
          </Routes>
        </BrowserRouter>
      </DefaultUIProvider>
    </Provider>
  );
}

export default App;