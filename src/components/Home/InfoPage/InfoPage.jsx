import React from 'react';
import './InfoPage.css';
import { FaClock, FaHeadset,FaHouseUser  } from "react-icons/fa";
import { Link } from 'react-router-dom';

const InfoPage = () => {
    return (
        <section className="why-us mt-5 mt-md-0">
            <div className="container">

                <div className="row">
                    <div className="col-lg-4 d-flex align-items-stretch">
                        <div className="content">
                            <h3>Неліктен бізді таңдайды?</h3>
                            <p>
                            Шамамен келесідей Даулы көзқарас бар: ішкі саясаттың кейбір ерекшеліктері тек фракциялық келіспеушіліктерді қосады және өте жағымды түрде ұсынылған. Әрине, оппозиция өкілдерінің әрекеттері негізгі факторлардың рөліне үміткерлер ретінде көрсетілген. Бұл мәселелердің маңыздылығы соншалықты айқын, сондықтан перспективалық жоспарлау терең ойлаудың маңыздылығын анықтайды.
                            </p>
                            <div className="text-center">
                                <Link href="/" className="more-btn">Көбірек білу<i className="bx bx-chevron-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 d-flex align-items-stretch">
                        <div className="icon-boxes d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHouseUser className="icon"/>
                                        <h4>Кездесу</h4>
                                        <small className='text-secondary'>24 сағаттық қызмет</small>
                                        <p>Неліктен Институционализация Жеңісінің айқын белгілері тек маркетингтік және қаржылық алғышарттар тұрғысынан қарастырылғанын айту қиын.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaHeadset className="icon"/>
                                        <h4>Төтенше жағдайлар</h4>
                                        <h6 className='text-secondary'>+7 707 123 23 23</h6>
                                        <p>Неліктен Институционализация Жеңісінің айқын белгілері тек маркетингтік және қаржылық алғышарттар тұрғысынан қарастырылғанын айту қиын.</p>
                                    </div>
                                </div>
                                <div className="col-xl-4 d-flex align-items-stretch">
                                    <div className="icon-box mt-4 mt-xl-0">
                                        <FaClock className="icon"/>
                                        <h4>Жұмыс уақыты</h4>
                                        <small className='text-secondary'>Жұмыс кестесі</small>
                                        <ul className='list-group list-group-flush'>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Жексенбі-Сәрсенбі : </p> <p>8:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Бейсенбі-Жұма: </p> <p>9:00 - 17: 00</p></li>
                                        <li className="list-group-item d-flex justify-content-between text-nowrap" ><p>Сенбі-Жексенбі : </p> <p>10:00 - 17: 00</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default InfoPage