import React from "react";
import { Outlet } from "react-router-dom";

import MainNavigation from "../../shared/components/Navigation/MainNavigation";

const Root = (props) => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Root;
