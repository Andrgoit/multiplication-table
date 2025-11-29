import { lazy } from "react";
import { Routes, Route } from "react-router";
// import { Layout } from "@/components";
// import { HomePage, NotFoundPage, LearningPage, TestPage } from "@/pages";
const HomePage = lazy(() => import("@/pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage/NotFoundPage"));
const LearningPage = lazy(() => import("@/pages/LearningPage/LearningPage"));
const TestPage = lazy(() => import("@/pages/TestPage/TestPage"));
const Layout = lazy(() => import("@/components/Layout/Layout"));

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
