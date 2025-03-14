import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./signIn";
import Admin from "./admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn/>}/>
        <Route exact path="/Admin" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
