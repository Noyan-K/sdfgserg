import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container">
                <div>
                    <small>ДЕНСАУЛЫҚҚА АРНАЛҒАН ТОЛЫҚ ШЕШІМ</small>
                    <h1>Сіздің ең сенімді <br />Денсаулық серіктесіңіз</h1>
                    <small>Неліктен Институционализация Жеңісінің айқын белгілері тек маркетингтік және қаржылық алғышарттар тұрғысынан қарастырылғанын айту қиын.</small>
                </div>
                <div className="d-flex justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Бастау</Link>
                    <Link to={'/track-appointment'} className="btn-get-started scrollto">Кездесуді қадағалау</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;