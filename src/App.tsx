import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Form from "./Components/Form";
import Success from "./Components/success";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
