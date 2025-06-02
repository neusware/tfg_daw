// src/layouts/DashboardLayout.jsx
import React from 'react';

import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/Admin/Dashboard/Sidebar';
import MainContent from '../../components/Admin/Dashboard/MainContent';

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
};

export default DashboardLayout;
