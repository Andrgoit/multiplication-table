import { Routes, Route } from "react-router";
import { Layout } from "@/components";
import { HomePage, NotFoundPage, LearningPage, TestPage } from "@/pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="learning" element={<LearningPage />} />
          <Route path="testing" element={<TestPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
