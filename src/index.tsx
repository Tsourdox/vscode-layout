import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import Explorer from './sidebar/drawer-content/Explorer.tsx';
import Extensions from './sidebar/drawer-content/Extensions.tsx';
import RunAndDebug from './sidebar/drawer-content/RunAndDebug.tsx';
import Search from './sidebar/drawer-content/Search.tsx';
import SourceControl from './sidebar/drawer-content/SourceControl.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route index element={<Navigate to="explorer" />} />
      <Route path="/explorer" Component={Explorer} />
      <Route path="/search" Component={Search} />
      <Route path="/source-control" Component={SourceControl} />
      <Route path="/run-and-debug" Component={RunAndDebug} />
      <Route path="/extensions" Component={Extensions} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
