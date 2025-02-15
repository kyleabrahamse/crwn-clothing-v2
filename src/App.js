import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router";
import Navigation from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
