import { Suspense } from "react";

import "./styles/index.scss";

import AppRouter from "app/providers/router";
import { useTheme } from "app/providers/ThemeProvider";

import { classNames } from "shared";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
