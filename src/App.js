import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primeicons/primeicons.css";
import * as ROUTES from "./constants/routes";

// components lazily loaded on first render
const Dashboard = lazy(() => import("./Components/Dashboard/Dashboard"));
const ChangePassword = lazy(() =>
  import("./Components/ForgotPassword/ChangePassword")
);
const Login = lazy(() => import("./Components/Login/Login"));
const Signup = lazy(() => import("./Components/Signup/Signup"));
const ForgotPassword = lazy(() =>
  import("./Components/ForgotPassword/ForgotPassword")
);
const ResetPassword = lazy(() =>
  import("./Components/ResetPassword/ResetPassword")
);
const PostJob = lazy(() => import("./Components/Dashboard/PostJob"));
const AppliedJobs = lazy(() => import("./Components/Dashboard/AppliedJobs"));
const PrivateRoute = lazy(() => import("./Components/Util/PrivateRoute"));
const Header = lazy(() => import("./Components/Header/Header"));
const Home = lazy(() => import("./Components/Home/Home"));

// A suspense based fallback to render react-skeleton while the API request is being loaded.
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Header />
        <Switch>
          <Route path={ROUTES.HOME} exact component={Home}></Route>
          <Route path={ROUTES.LOGIN} component={Login}></Route>
          <Route path={ROUTES.SIGNUP} component={Signup}></Route>
          <Route
            path={ROUTES.FORGOTPASSWORD}
            component={ForgotPassword}
          ></Route>
          <Route path={ROUTES.RESETPASSWORD} component={ResetPassword}></Route>
          <Route
            path={ROUTES.CHANGEPASSWORD}
            component={ChangePassword}
          ></Route>

          <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} />
          <PrivateRoute
            path={ROUTES.POSTJOB}
            component={PostJob}
            allowedRole={0}
          />
          <PrivateRoute
            path={ROUTES.APPLIEDJOBS}
            component={AppliedJobs}
            allowedRole={1}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
