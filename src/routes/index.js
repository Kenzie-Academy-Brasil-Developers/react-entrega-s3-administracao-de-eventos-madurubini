import { Route, Switch } from "react-router";
import Casamento from "../pages/Casamento";
import Confra from "../pages/Confra";
import Formatura from "../pages/Formatura";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/casamento">
        <Casamento />
      </Route>
      <Route exact path="/confra">
        <Confra />
      </Route>
      <Route exact path="/formatura">
        <Formatura />
      </Route>
    </Switch>
  );
};

export default Routes;
