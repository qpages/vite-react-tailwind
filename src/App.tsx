import { Route, Routes } from "react-router-dom";
import { NotFound } from "./components/404";

const App = () => {
  return (
    <Routes>
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
