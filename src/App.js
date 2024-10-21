import "./App.css";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Reports from "./screens/Reports";
import KnittingDataUpload from "./screens/KnittingDataUpload";
import LinkingDataUpload from "./screens/LinkingDataUpload";
import HomeScreen from "./screens/HomeScreen";
import EditReport from "./screens/EditReport";

const Routes = () => {
  const routes = useRoutes([
    { path: "/", element: <HomeScreen /> },
    { path: "/reports", element: <Reports /> },
    { path: "/knittingdataupload", element: <KnittingDataUpload /> },
    { path: "/linkingdataupload", element: <LinkingDataUpload /> },
    { path: "/edit-report", element: <EditReport /> },
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
