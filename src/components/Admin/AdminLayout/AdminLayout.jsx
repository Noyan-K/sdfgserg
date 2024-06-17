import React from 'react'
import AdminSidebar from '../../UI/AdminSidebar'
import AdminHeader from '../../UI/AdminHeader'
import './AdminLayout.css';
const AdminLayout = ({ children }) => {
    return (
        <div className="main-wrapper">
            <AdminHeader />
            <AdminSidebar />
            <div className="page-wrapper">
                <div className="content container-fluid">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Добро пожаловать, Админ!</h3>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item active">Панель управления</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout