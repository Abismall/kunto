import React from 'react';
import AdminDashboardLayout from '../components/admin-dashboard/layout';
import dynamic from 'next/dynamic';
import "../globals.css"
const MarkdownEditor = dynamic(() => import('../components/admin-dashboard/markdown-editor'), { ssr: false });

const AdminPage: React.FC = () => {
  return (
  
    <AdminDashboardLayout>
      <MarkdownEditor />
      </AdminDashboardLayout>

  );
};

export default AdminPage;
