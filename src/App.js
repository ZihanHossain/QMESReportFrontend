import "./App.css";
import { BrowserRouter, useNavigate, useRoutes } from "react-router-dom";
import Reports from "./screens/Reports";
import KnittingDataUpload from "./screens/KnittingDataUpload";

const Routes = () => {
  const routes = useRoutes([
    { path: "/reports", element: <Reports /> },
    { path: "/knittingdataupload", element: <KnittingDataUpload /> },
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
