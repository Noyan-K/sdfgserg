import React from 'react'
import AdminLayout from '../AdminLayout/AdminLayout'
import userImg from '../../../images/avatar.jpg';
import './Dashboard.css';

const AdminDashboard = () => {
    return (
        <>
            <AdminLayout >
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-primary border-primary">
                                        <i className="fe fe-users"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>168</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">
                                    <h6 className="text-muted">Врачи</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-primary w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-success">
                                        <i className="fe fe-credit-card"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>487</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Пациенты</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-danger border-danger">
                                        <i className="fe fe-money"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>485</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Встреча</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-warning border-warning">
                                        <i className="fe fe-folder"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>62523 KZT</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Доход</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-6">

                     
                        <div className="card card-chart">
                            <div className="card-header">
                                <h4 className="card-title">Доход</h4>
                            </div>
                            <div className="card-body">
                                <div id="morrisArea"></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12 col-lg-6">

                     
                        <div className="card card-chart">
                            <div className="card-header">
                                <h4 className="card-title">Статус</h4>
                            </div>
                            <div className="card-body">
                                <div id="morrisLine"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 d-flex">
                        <div className="card card-table flex-fill">
                            <div className="card-header">
                                <h4 className="card-title">Список врачей</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Имя врача</th>
                                                <th>Специальность</th>
                                                <th>Заработано</th>
                                                <th>Отзывы</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt=""/></a>
                                                        <a>Доктор Руби Перрин</a>
                                                    </h2>
                                                </td>
                                                <td>Стоматология</td>
                                                <td>32000 KZT</td>
                                                <td>
                                                    <i className="fe fe-star text-warning"></i>
                                                    <i className="fe fe-star text-warning"></i>
                                                    <i className="fe fe-star text-warning"></i>
                                                    <i className="fe fe-star text-warning"></i>
                                                    <i className="fe fe-star-o text-secondary"></i>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 d-flex">

                        <div className="card  card-table flex-fill">
                            <div className="card-header">
                                <h4 className="card-title">Список пациентов</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Науқастың аты</th>
                                                <th>Телефон</th>
                                                <th>Последнее посещение</th>
                                                <th>Төленген</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt=""/></a>
                                                        <a href="profile.html">Шарлин Рид</a>
                                                    </h2>
                                                </td>
                                                <td>8286329170</td>
                                                <td>20 октябрь 2019</td>
                                                <td className="text-right">10000 KZT</td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">

                        <div className="card card-table">
                            <div className="card-header">
                                <h4 className="card-title">Список встреч</h4>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Имя врача</th>
                                                <th>Специальность</th>
                                                <th>Науқастың аты</th>
                                                <th>Время встречи</th>
                                                <th>Статус</th>
                                                <th className="text-right">Количество</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt=""/></a>
                                                        <a href="profile.html">Доктор Руби Перрин</a>
                                                    </h2>
                                                </td>
                                                <td>Стоматология</td>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt=""/></a>
                                                        <a href="profile.html">Шарлин Рид </a>
                                                    </h2>
                                                </td>
                                                <td>9 Nov 2019 <span className="text-primary d-block">11.00 AM - 11.15 AM</span></td>
                                                <td>
                                                    <div className="status-toggle">
                                                        <input type="checkbox" id="status_1" className="check" checked/>
                                                            <label for="status_1" className="checktoggle">флажок</label>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    20000 KZT
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </AdminLayout>
        </>
    )
}
export default AdminDashboard;