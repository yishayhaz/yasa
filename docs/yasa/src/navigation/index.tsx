import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { ColorsScreen } from "../screens/colors";
import { Layout } from "../layout";
import { TypographyScreen } from "../screens/typography";
import { HomeScreen } from "../screens/home";

export function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/docs" element={<Layout />}>
          <Route path="general" element={<Outlet />}>
            <Route path="colors" element={<ColorsScreen />} />
            <Route path="typography" element={<TypographyScreen />} />
          </Route>
          <Route path="*" element={<span>404</span>} />
        </Route>
      </Routes>
    </Router>
  );
}
