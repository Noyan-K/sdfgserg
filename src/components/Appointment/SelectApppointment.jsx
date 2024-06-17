import { Button } from 'antd'
import moment from 'moment';
import './index.css';
import { doctorTimeSlot } from '../../constant/global';
import { FaBriefcase, FaRegClock, FaLocationArrow, FaLink, FaCalendarAlt } from "react-icons/fa";

const SelectApppointment = ({ selectedDate, handleDateChange, selectTime, setSelectTime }) => {
    const handleSelectTime = (date) => { setSelectTime(date) }

    const amTimeSlot = doctorTimeSlot.filter((item) => item.includes('AM'));
    const pmTimeSlot = doctorTimeSlot.filter((item) => item.includes('PM'));

    const last5Days = Array.from({ length: 5 }, (_, index) =>
        moment().clone().subtract(index, 'days')
    )

    return (
        <div style={{ marginTop: '5rem' }}>

            <dir className="p-3" style={{ background: '#f8f9fa' }}>
                <div className="row">
                    <div className="col-md-3 col-sm-12 mt-3 info-part border-end">
                        <p className='py-2 border-bottom info-head-date'>Кездесуге жазылғыңыз келе ме? Күн мен уақытты таңдаңыз</p>
                        <div className='icon-box'>
                            <div className='d-flex gap-3'>
                                <FaBriefcase className='icon' />
                                <p>Дәрігермен</p>
                            </div>
                            <div className='d-flex gap-3'>
                                <FaRegClock className='icon' />
                                <p>30 минут</p>
                            </div>
                            <div className='d-flex gap-3'>
                                <FaLocationArrow className='icon' />
                                <p>Актобе, Казахстан<br /><span className="form-text">Бр.Жубановых 14</span></p>
                            </div>
                            <div className='d-flex gap-3'>
                                <FaLink className='icon' />
                                <p>Google-конференция</p>
                            </div>
                            <div className='d-flex gap-3'>
                                <FaCalendarAlt className='icon' />
                                <p>{(selectedDate && selectTime) && moment(selectedDate).format('LL') + ' ' + selectTime}</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-5 col-sm-12 mt-3 border-end">
                        <p className='py-2 border-bottom info-head-date'>
                            {selectedDate ? `Таңдалған - ${moment(selectedDate).format('LL')}` : 'Уақытты таңдаңыз'}
                        </p>
                        <div className='info-date-card row'>
                            {
                                last5Days.map((item, index) => (
                                    <div key={index + 5} className="mb-3 col-md-6" onClick={() => handleDateChange(item)}>
                                        <div className={`p-3 mb-3 rounded text-center select-date ${moment(item).format('LL') === moment(selectedDate).format('LL') ? 'active' : ''}`}>
                                            <div className='select-month'>{moment(item).format('MMMM YYYY')}</div>
                                            <div className='select-day-num'>{moment(item).format('D')}</div>
                                            <div className='select-month'>{moment(item).format('dddd')}</div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-12 mt-3">
                        <p className='py-2 border-bottom info-head-date'>
                            {selectTime ? `Таңдалған -  ${selectTime} дейін ${moment(selectTime, 'hh:mm A').add(30, 'minutes').format('hh:mm A')}` : 'Уақытты таңдаңыз'}
                        </p>

                        <div className='select-time-div'>
                            <h4>Таңертеңгі уақыт <span className='text-secondary'>(8-12)</span></h4>
                            <div className="row text-center mt-3">
                                {
                                    amTimeSlot.map((item, id) => (
                                        <div className="col-md-4 col-sm-6" key={id + 155}>
                                            <Button type={item === selectTime ? "primary" : "default"} shape="" size='small' className='mb-3' onClick={() => handleSelectTime(item)}>{item}</Button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className='select-time-div'>
                            <h4>Түстен кейін<span className='text-secondary'>(14:00 - 17:00)</span></h4>
                            <div className="row text-center mt-3">
                                {
                                    pmTimeSlot.map((item, id) => (
                                        <div className="col-md-4" key={id + 155}>
                                            <Button type={item === selectTime ? "primary" : "default"} shape="" size='small' className='mb-3' onClick={() => handleSelectTime(item)}> {item} </Button>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </dir>
        </div>
    )
}

export default SelectApppointment;