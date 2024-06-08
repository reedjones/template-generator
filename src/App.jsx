import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/template-generator/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
