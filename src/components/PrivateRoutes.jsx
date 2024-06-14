import { Fragment } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

function PrivateRoutes({ privateRoutes, isLogin, role }) {
  return (
    <Routes>
      {privateRoutes.map((route, index) => {
        const Page = route.component;
        const Layout = route.layout || Fragment;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              isLogin && role === route.role ? (
                <Layout>
                  <Page />
                </Layout>
              ) : (
                <Navigate to="/authen" state={route.path} replace={true} />
              )
            }
          />
        );
      })}
    </Routes>
  );
}

export default PrivateRoutes;
