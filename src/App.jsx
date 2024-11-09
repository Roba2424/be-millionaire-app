import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import { useEffect, useState } from "react";
import { auth } from "./service/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { ROUTE_CONSTANTS } from "./core/utils/constants/index";
import MillionaireGame from "./pages/milionaireGame";
import "./global/style/style.css";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsAuth(Boolean(user));
    });
  }, []);

  return (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/">
            <Route
              index
              element={
                isAuth ? (
                  <Navigate to={ROUTE_CONSTANTS.GAME} />
                ) : (
                  <Navigate to={ROUTE_CONSTANTS.REGISTER} />
                )
              }
            />
            <Route
              path={ROUTE_CONSTANTS.LOGIN}
              element={
                isAuth ? (
                  <Navigate to={ROUTE_CONSTANTS.GAME} />
                ) : (
                  <Login setIsAuth={setIsAuth} />
                )
              }
            />
            <Route
              path={ROUTE_CONSTANTS.REGISTER}
              element={
                isAuth ? <Navigate to={ROUTE_CONSTANTS.GAME} /> : <Register />
              }
            />
            <Route
              path={ROUTE_CONSTANTS.GAME}
              element={
                isAuth ? (
                  <MillionaireGame />
                ) : (
                  <Navigate to={ROUTE_CONSTANTS.LOGIN} />
                )
              }
            />
          </Route>
        )
      )}
    />
  );
};

export default App;
