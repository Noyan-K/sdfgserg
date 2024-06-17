import React from 'react';
import img1 from '../../../images/specialities/specialities-01.png';
import img2 from '../../../images/specialities/specialities-02.png';
import img3 from '../../../images/specialities/specialities-03.png';
import img4 from '../../../images/specialities/specialities-04.png';
import img5 from '../../../images/specialities/specialities-05.png';
import { FaCheckDouble } from "react-icons/fa";
import './index.css';

const ClinicAndSpecialities = () => {
	return (
		<section className="section section-specialities position-relative">
			<div className="container-fluid">
				<div className='mb-5 section-title text-center'>
					<h2>Клиника және мамандандыру</h2>
					<p className='m-0'>Шамамен келесідей Даулы көзқарас бар: ішкі саясаттың кейбір ерекшеліктері тек фракциялық келіспеушіліктерді қосады және өте жағымды түрде ұсынылған. Әрине, оппозиция өкілдерінің әрекеттері негізгі факторлардың рөліне үміткерлер ретінде көрсетілген. Бұл мәселелердің маңыздылығы соншалықты айқын, сондықтан перспективалық жоспарлау терең ойлаудың маңыздылығын анықтайды.</p>
				</div>

				<div className="row justify-content-center">
					<div className="col-md-9">
						<div className="specialities-slider d-flex justify-content-center align-items-center gap-5">
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img1} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Урология</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img2} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Неврология</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img3} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Ортопедиялық</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img4} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Кардиолог</p>
							</div>
							<div className="speicality-item text-center">
								<div className="speicality-img">
									<img src={img5} className="img-fluid" alt="" />
									<span><i><FaCheckDouble/></i></span>
								</div>
								<p>Дантист</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ClinicAndSpecialities;