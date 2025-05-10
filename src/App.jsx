import "./index.css";
import Body from "../src/components/Body";
import Head from "../src/components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <Provider store={store}>
      <>
        <BrowserRouter>
        <Head />
          <Routes>
            <Route path="/" element={<Body />}>
               <Route index element={<MainContainer />} />
              <Route path="/watch" element={<WatchPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </>
    </Provider>
  );
}

export default App;
