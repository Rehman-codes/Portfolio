import "./index.css";
import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Home = React.lazy(() => import("./pages/Home"));
const Projects = React.lazy(() => import("./pages/Projects"));
const Experience = React.lazy(() => import("./pages/Experience"));
const Skills = React.lazy(() => import("./pages/Skills"));

const LoadingFallback = () => (
  <div className="w-screen h-screen flex justify-center items-center bg-black text-white">
    Loading...
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/projects",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Projects />
      </Suspense>
    ),
  },
  {
    path: "/experience",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Experience />
      </Suspense>
    ),
  },
  {
    path: "/skills",
    element: (
      <Suspense fallback={<LoadingFallback />}>
        <Skills />
      </Suspense>
    ),
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}

