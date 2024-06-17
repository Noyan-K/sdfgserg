import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import { FaAngleDoubleRight } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="footer position-relative">
			<div className="footer-top">
				<div className="container-fluid">
					<div className="row">
						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-about">
								<div className="footer-logo">
									<Link to={'/'}>
										<img src={logo} alt="logo" style={{ maxWidth: '160px' }} />
									</Link>
								</div>
								<div className="footer-about-content">
									<p className='form-text' style={{maxWidth:200}}>Неліктен Институционализация Жеңісінің айқын белгілері тек маркетингтік және қаржылық алғышарттар тұрғысынан қарастырылғанын айту қиын.</p>
								</div>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-menu">
								<h2 className="footer-title">Для пациентов</h2>
								<ul>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Поиск врачей</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  Авторизоваться</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' />  регистр</Link></li>
									<li><Link to={'/doctors'}><FaAngleDoubleRight className='icon' />  Бронирование</Link></li>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' />  Панель управления пациента</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">

							<div className="footer-widget footer-menu">
								<h2 className="footer-title">For Doctors</h2>
								<ul>
									<li><Link to={'/'}><FaAngleDoubleRight className='icon' /> Назначения</Link></li>
									<li><Link to={'/login'}><FaAngleDoubleRight className='icon' /> Авторизоваться</Link></li>
									<li><Link to={'/register'}><FaAngleDoubleRight className='icon' /> Регистрация</Link></li>
									<li><Link to={'/dashboard'}><FaAngleDoubleRight className='icon' /> Панель управления доктора</Link></li>
								</ul>
							</div>
						</div>

						<div className="col-6 col-md-6 col-lg-3">
							<div className="footer-widget footer-contact">
								<h2 className="footer-title mt-3 mt-md-0">Связаться с нами</h2>
								<div className="footer-contact-info">
									<div className="footer-address">
										<span><i className="fas fa-map-marker-alt"></i></span>
										<p> 121, Бр.Жубновых,<br /> Актобе, Казахстан</p>
									</div>
									<p>
										<i className="fas fa-phone-alt"></i>
										+8 707 513 0404
									</p>
									<p className="mb-0">
										<i className="fas fa-envelope"></i>
										noyan992@gmail.com
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="container-fluid">

					<div className="copyright">
						<div className="row">
							<div className="col-md-6 col-lg-6">
								<div className="copyright-text">
									<p className="mb-0"><a href="templateshub.net">
										<div className="copyRight text-center">
											<p>Copyright {(new Date()).getFullYear()} Все права защищены</p>
										</div></a></p>
								</div>
							</div>
							<div className="col-md-6 col-lg-6">
								<div className="copyright-menu">
									<ul className="policy-menu d-flex gap-2 justify-content-center">
										<Link to={'/'} className='text-white'>Условия и положения</Link>
										<Link to={'/'} className='text-white'>Политика</Link>
									</ul>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>

		</footer>
	);
};

export default Footer;