import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import MoviesPage from './pages/Movies';
import SigninPage from './pages/SignIn';
import SignupPage from './pages/Signup';
import ProfilePage from './pages/Profile';
import ProfileEditPage from './pages/ProfileEdit';
import NotFoundPage from './pages/NotFound';
import ErrorBoundaryWrapper from './components/ErrorBoundaryWrapper';

import { Paths } from './utils/constants';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ErrorBoundaryWrapper>
          <Routes>
            <Route index element={(<MoviesPage />)} />
            <Route path={Paths.SIGN.IN} element={(<SigninPage />)} />
            <Route path={Paths.SIGN.UP} element={(<SignupPage />)} />
            <Route path={Paths.PROFILE.INDEX} element={(<ProfilePage />)} />
            <Route path={Paths.PROFILE.EDIT} element={(<ProfileEditPage />)} />
            <Route path="*" element={(<NotFoundPage />)} />
          </Routes>
        </ErrorBoundaryWrapper>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
