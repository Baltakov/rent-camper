import React, { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import { Toaster } from 'react-hot-toast';

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Suspense>
  );
};
