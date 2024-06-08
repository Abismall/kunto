import React from 'react';
import AdminDashboardSidebar from './sidebar';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminDashboardLayout: React.FC<AdminDashboardLayoutProps> = ({ children }) => {
  return (
    <div className="h-[100vh] p-20">
      <AdminDashboardSidebar />
      <div className="ml-20 md:ml-40">
         
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
