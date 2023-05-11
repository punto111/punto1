import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import IndexPage from './pages/index/index';
import UserPage from './pages/user/index';
import InfoPage from './pages/info/index';
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;