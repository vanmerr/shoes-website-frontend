import PublicRoutes from "./components/PublicRoutes";
import PrivateRoutes from "./components/PrivateRoutes";
import { publicRotes, privateRoutes } from "./routes";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <div className="App">
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
