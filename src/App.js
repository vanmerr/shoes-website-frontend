import PublicRoutes from "./components/PublicRoutes";
import PrivateRoutes from "./components/PrivateRoutes";
import { publicRotes, privateRoutes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import Alert from "./components/Alert";
import { useEffect } from "react";
import { offAlert } from "./redux/toolkits/alertSlice";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { isAlert, type, message } = useSelector((state) => state.alert);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!!isAlert) setTimeout(() => dispatch(offAlert()), 10000);
  }, [isAlert]);
  return (
    <div className="App">
      {isAlert && <Alert type={type} message={message} />}
      <PublicRoutes publicRoutes={publicRotes} />
      <PrivateRoutes
        privateRoutes={privateRoutes}
        isLogin={isAuthenticated}
        role={"user"}
      />
    </div>
  );
}

export default App;
