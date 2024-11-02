import "./App.css";
import Earn_page from "./pages/earn_page";
import Friends_page from "./pages/friends_page";
import HomePage from "./pages/home";
import LayoutComponent from "./pages/layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Profile_page from "./pages/profile_page";
import DailyRewardScreen from "./components/daily_checkin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayoutComponent />}>
      {/* HomePage is now a child of LayoutComponent */}
      <Route index element={<HomePage />} />
      <Route path="earn" element={<Earn_page />} />
      <Route path="friends" element={<Friends_page />} />
      <Route path="profile" element={<Profile_page />} />
      <Route path="DailyRewardScreen" element={<DailyRewardScreen />} />
    </Route>
  )
);

function App() {
  return (
    <div className="bg-black flex flex-col h-full justify-center">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
