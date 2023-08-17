import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ColorsScreen } from "../screens/colors";
import { Layout } from "../layout";
import { TypographyScreen } from "../screens/typography";
import { HomeScreen } from "../screens/home";
import { AlertScreen } from "../screens/alert";
import { BadgeScreen } from "../screens/badge";
import { ButtonScreen } from "../screens/button";
import { FieldsScreen } from "../screens/fields";
import { FiltersScreen } from "../screens/filters";
import { FormScreen } from "../screens/form";

export function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/docs" element={<Layout />}>
          <Route path="getting-started" element={<Outlet />}>
            <Route path="overview" element={<HomeScreen />} />
            <Route path="*" element={<Navigate to="overview" />} />
          </Route>
          <Route path="general" element={<Outlet />}>
            <Route path="overview" element={<HomeScreen />} />
            <Route path="colors" element={<ColorsScreen />} />
            <Route path="typography" element={<TypographyScreen />} />
            <Route path="*" element={<Navigate to="overview" />} />
          </Route>
          <Route path="components" element={<Outlet />}>
            <Route path="overview" element={<HomeScreen />} />
            <Route path="alert" element={<AlertScreen />} />
            <Route path="badge" element={<BadgeScreen />} />
            <Route path="button" element={<ButtonScreen />} />
            <Route path="fields" element={<FieldsScreen />} />
            <Route path="*" element={<Navigate to="overview" />} />
          </Route>
          <Route path="cool" element={<Outlet />}>
            <Route path="overview" element={<HomeScreen />} />
            <Route path="filters" element={<FiltersScreen />} />
            <Route path="form" element={<FormScreen />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="getting-started/overview" />}
          />
        </Route>
      </Routes>
    </Router>
  );
}
