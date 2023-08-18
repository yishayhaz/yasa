import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ColorsScreen } from "../screens/general/colors";
import { Layout } from "../layout";
import { TypographyScreen } from "../screens/general/typography";
import { HomeScreen } from "../screens/home";
import { AlertScreen } from "../screens/components/alert";
import { BadgeScreen } from "../screens/components/badge";
import { ButtonScreen } from "../screens/components/button";
import { FieldsScreen } from "../screens/components/fields";
import { FiltersScreen } from "../screens/cool/filters";
import { FormScreen } from "../screens/cool/form";
import { SetupScreen } from "../screens/getting_started/setup";
import { InstallationScreen } from "../screens/getting_started/installation";
import { GettingStartedOverviewScreen } from "../screens/getting_started/overview";
import { GeneralOverviewScreen } from "../screens/general/overview";
import { ComponentsOverviewScreen } from "../screens/components/overview";
import { CoolOverviewScreen } from "../screens/cool/overview";
import { SpacingScreen } from "../screens/general/spacing";
import { BreakpointsScreen } from "../screens/general/breakpoints";
import { RadioAndCheckbox } from "../screens/components/radio_and_checkbox";

export function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/docs" element={<Layout />}>
          <Route path="getting-started" element={<Outlet />}>
            <Route path="overview" element={<GettingStartedOverviewScreen />} />
            <Route path="installation" element={<InstallationScreen />} />
            <Route path="setup" element={<SetupScreen />} />
            <Route path="*" element={<Navigate to="overview" />} />
          </Route>
          <Route path="general" element={<Outlet />}>
            <Route path="overview" element={<GeneralOverviewScreen />} />
            <Route path="breakpoints" element={<BreakpointsScreen />} />
            <Route path="colors" element={<ColorsScreen />} />
            <Route path="typography" element={<TypographyScreen />} />
            <Route path="spacing" element={<SpacingScreen />} />
            <Route path="*" element={<Navigate to="overview" />} />
          </Route>
          <Route path="components" element={<Outlet />}>
            <Route path="overview" element={<ComponentsOverviewScreen />} />
            <Route path="alert" element={<AlertScreen />} />
            <Route path="badge" element={<BadgeScreen />} />
            <Route path="button" element={<ButtonScreen />} />
            <Route path="fields" element={<FieldsScreen />} />
            <Route path="radio-and-checkbox" element={<RadioAndCheckbox />} />
            <Route path="*" element={<Navigate to="overview" />} />
          </Route>
          <Route path="cool" element={<Outlet />}>
            <Route path="overview" element={<CoolOverviewScreen />} />
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
