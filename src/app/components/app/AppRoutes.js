import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../shared/Spinner";

const Settings = lazy(() => import("../settings/Settings"));

const MyPrograms = lazy(() => import("../myPrograms/MyPrograms"));
const BindProgram = lazy(() => import("../myPrograms/BindProgram"));
const NewProgram = lazy(() => import("../myPrograms/NewProgram"));

const Tasks = lazy(() => import("../tasks/Tasks"));
const NewTask = lazy(() => import("../tasks/NewTask"));

const Error404 = lazy(() => import("../user-pages/Error404"));
const Error500 = lazy(() => import("../user-pages/Error500"));

const Login = lazy(() => import("../user-pages/Login"));
const Register = lazy(() => import("../user-pages/Register"));

class AppRoutes extends Component {
  render() {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/settings" component={Settings} />

          <Route exact path="/my_programs" component={MyPrograms} />
          <Route exact path="/bind_program" component={BindProgram} />
          <Route exact path="/new_program" component={NewProgram} />

          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/new_task" component={NewTask} />

          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />

          <Route path="/error-404" component={Error404} />
          <Route path="/error-500" component={Error500} />

          <Redirect to="/settings" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
