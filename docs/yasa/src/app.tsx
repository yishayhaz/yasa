import { Navigation } from "./navigation";
import { ThemeProvider } from "./providers/theme";

export function App() {
  return (
    <ThemeProvider>
      <Navigation />
    </ThemeProvider>
  );
}
