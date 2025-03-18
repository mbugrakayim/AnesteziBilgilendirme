import { Route, Routes } from "react-router-dom";
import InFormComponent from "./Navi/InFormComponent";
import HeaderComponent from "./Navi/HeaderComponent";
import PreOperative from "./Descriptions/PreOperative";
import DayOperative from "./Descriptions/DayOperative";
import PostOperative from "./Descriptions/PostOperative";

function App() {
  return (
    <>
      <HeaderComponent />
      <Routes>
        <Route path="/ameliyatöncesi" element={<PreOperative />} />
        <Route path="/ameliyatgünü" element={<DayOperative />} />
        <Route path="/ameliyatsonrası" element={<PostOperative />} />
        <Route path="/" element={<InFormComponent />} />
        <Route path="*" element={<InFormComponent />} />
      </Routes>
    </>
  );
}

export default App;
