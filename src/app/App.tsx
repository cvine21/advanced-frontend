import "./styles/index.scss";

import AppRouter from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared";

import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
};

export default App;
