import "./App.css";
import { BrowserRouter, useNavigate, useRoutes } from "react-router-dom";
import Reports from "./screens/Reports";
import KnittingDataUpload from "./screens/KnittingDataUpload";
import LinkingDataUpload from "./screens/LinkingDataUpload";
import HomeScreen from "./screens/HomeScreen";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeScreen /> },
    { path: "/reports", element: <Reports /> },
    { path: "/knittingdataupload", element: <KnittingDataUpload /> },
    { path: "/linkingdataupload", element: <LinkingDataUpload /> },
    // Add more routes as needed
  ]);

  return routes;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
