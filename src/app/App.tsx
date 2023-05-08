import { Link } from "react-router-dom";

import "./styles/index.scss";

import AppRouter from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={"/"}>Main</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};

export default App;
