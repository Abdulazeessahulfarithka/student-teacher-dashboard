import "./App.css";
import Sidebar from "./Sidebar";
import "./sb-admin-2.min.css";
import Topbar from "./Topbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portal from "./Portal";
import Student from "./Student";
import Usercreate from "./Usercreate";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portal />}>
          <Route path="/student" element={<Student />} />
          <Route path="usercreate" element={<Usercreate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
