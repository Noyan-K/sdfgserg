import React from 'react'

const Availibility = () => {
    return (
        <div className="col-md-6 offset-md-3">

            <div className="widget business-widget">
                <div className="widget-content">
                    <div className="listing-hours">
                        <div className="listing-day current">
                            <div className="day">Today <span>5 Nov 2019</span></div>
                            <div className="time-items">
                                <span className="open-status"><span className="badge bg-success-light">Open Now</span></span>
                                <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                        <div className="listing-day">
                            <div className="day">ДҮЙСЕНБІ</div>
                            <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                        <div className="listing-day">
                            <div className="day">СЕЙСЕНБІ</div>
                            <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                        <div className="listing-day">
                            <div className="day">СӘРСЕНБІ</div>
                            <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                        <div className="listing-day">
                            <div className="day">БЕЙСЕНБІ</div>
                            <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                        <div className="listing-day">
                            <div className="day">ЖҰМА</div>
                            <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                        <div className="listing-day">
                            <div className="day">СЕНБІ</div>
                            <div className="time-items">
                                <span className="time">07:00 AM - 09:00 PM</span>
                            </div>
                        </div>
                        <div className="listing-day closed">
                            <div className="day">ЖЕКСЕНБІ</div>
                            <div className="time-items">
                                <span className="time"><span className="badge bg-danger-light">Closed</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Availibility