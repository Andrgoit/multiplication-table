import { Routes, Route } from "react-router";
import Layout from "src/components";
import { HomePage, NotFoundPage, LearningPage, TestPage } from "src/pages";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="learning" element={<LearningPage />} />
          <Route path="test" element={<TestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
