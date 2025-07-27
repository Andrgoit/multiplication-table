import { Routes, Route } from "react-router";
import { useState } from "react";

import "./App.css";
import Layout from "./components/Layout/Layout";
import { HomePage, NotFoundPage, LearningPage, TestPage } from "./pages";

function App() {
  const [count, setCount] = useState(0);

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
