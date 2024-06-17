import React from 'react';
import './AdminSidebar.css';
import { FaHome } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaUserAstronaut } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className="sidebar" id="sidebar">
            <div className="sidebar-inner slimscroll">
                <div id="sidebar-menu" className="sidebar-menu">
                    <ul>
                        <li className="menu-title">
                            <span>Main</span>
                        </li>
                        <li className="active">
                            <Link to={'/admin/dashboard'}>
                                <FaHome /> <span>Бақылау тақтасы</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admin/appointments'}>
                                <FaListUl /> <span>Кездесулер</span>
                            </Link>


                        </li>
                        <li>
                            <Link to={'/admin/specialites'}>
                                <FaPeopleArrows /> <span>Мамандықтар</span>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/admin/doctors'}>
                                <FaUserAstronaut /> <span>Дәрігерлер</span>
                            </Link>

                        </li>
                        <li>
                            <Link to={'/admin/patients'}>
                                <FaRegUser /> <span>Науқастар</span>
                            </Link>

                        </li>
                        <li>
                            <Link to={'/admin/reviews'}>
                                <FaRegStar /> <span>Пікірлер</span>
                            </Link>

                        </li>
                        <li>
                            <Link to={'/admin/transaction'}>
                                <FaBriefcase /><span>Мәмілелер</span>
                            </Link>

                        </li>

                        <li className="submenu">
                            <a href="#"><i className="fe fe-document"></i> <span> Reports</span> <span className="menu-arrow"></span></a>
                            <ul style={{ display: "none" }}>
                                <li><a >Шот-Фактуралар Туралы Есептер</a></li>
                            </ul>
                        </li>
                        <li className="menu-title">
                            <span>Беттер</span>
                        </li>
                        <li className='text-white'>
                            <Link to={'/admin/profile'}>
                                <FaRegUser /> <span>Профиль</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AdminSidebar