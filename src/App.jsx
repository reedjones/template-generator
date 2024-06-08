import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<Index></Index>}/>
        <Route path="/template-generator/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
