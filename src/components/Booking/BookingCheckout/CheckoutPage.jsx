import moment from 'moment';
import img from '../../../images/avatar.jpg';
import { Link } from 'react-router-dom';
import './BookingCheckout.css';

const CheckoutPage = ({ handleChange, selectValue, isCheck, setIsChecked, data, selectedDate, selectTime }) => {
    const { nameOnCard, cardNumber, expiredMonth, cardExpiredYear, cvv, paymentType, paymentMethod } = selectValue;
    const handleCheck = () => {
        setIsChecked(!isCheck)
    }

    let price = data?.price ? data.price : 60;
    let doctorImg = data?.img ? data?.img : img

    const vat = (15 / 100) * (Number(price))
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7" >
                    <div className="rounded p-3" style={{ background: "#f8f9fa" }}>

                        <div className='row'>
                            <div className="col-md-6 mb-2">
                                <label className="payment-radio credit-card-option">
                                    <input type="radio"
                                        name="paymentType"
                                        value="creditCard"
                                        onChange={(e) => handleChange(e)}
                                        checked={paymentType === 'creditCard'}
                                    />
                                    <span className="ms-2"></span>
                                    Несие картасы
                                </label>
                            </div>
                            <div className="col-md-6 mb-2">
                                <label className="payment-radio credit-card-option">
                                    <input type="radio"
                                        name="paymentType"
                                        value="cash"
                                        onChange={(e) => handleChange(e)}
                                        checked={paymentType === 'cash'}
                                    />
                                    <span className="ms-2"></span>
                                    Қолма-қол ақша
                                </label>
                            </div>
                            <di mb-3v className="col-md-6">
                                <div className="form-group card-label mb-3">
                                    <label htmlFor="card_name">Картадағы аты</label>
                                    <input className="form-control" id="card_name" value={nameOnCard && nameOnCard} type="text" onChange={(e) => handleChange(e)} name='nameOnCard' />
                                </div>
                            </di>
                            <div className="col-md-6">
                                <div className="form-group card-label mb-3">
                                    <label htmlFor="card_number">Карта Нөмірі</label>
                                    <input className="form-control" id="card_number" value={cardNumber && cardNumber} placeholder="1234  5678  9876  5432" type="number" onChange={(e) => handleChange(e)} name='cardNumber' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group card-label mb-3">
                                    <label htmlFor="expiry_month">Жарамдылық айы</label>
                                    <input className="form-control" id="expiry_month" value={expiredMonth && expiredMonth} placeholder="MM" type="number" onChange={(e) => handleChange(e)} name='expiredMonth' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group card-label mb-3">
                                    <label htmlFor="expiry_year">Жарамдылық жылы</label>
                                    <input className="form-control" id="expiry_year" value={cardExpiredYear && cardExpiredYear} placeholder="YY" type="number" onChange={(e) => handleChange(e)} name='cardExpiredYear' />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group card-label mb-3">
                                    <label htmlFor="cvv">CVV</label>
                                    <input className="form-control" id="cvv" type="number" value={cvv && cvv} onChange={(e) => handleChange(e)} name='cvv' />
                                </div>
                            </div>
                        </div>

                        <div className="d-flex gap-2 mt-3 mb-3">
                            <div>
                                <input type="radio"
                                    name="paymentMethod"
                                    value="paypal"
                                    onChange={(e) => handleChange(e)}
                                    checked={paymentMethod === 'paypal'}
                                />
                                <span className="checkmark ms-3"></span>
                                Paypal
                            </div>
                            <div>
                                <input type="radio"
                                    name="paymentMethod"
                                    value="payoneer"
                                    onChange={(e) => handleChange(e)}
                                    checked={paymentMethod === 'payoneer'}
                                />
                                <span className="checkmark ms-3"></span>
                                Мир
                            </div>
                        </div>
                        <div className="terms-accept">
                            <div className="custom-checkbox">
                                <input
                                    type="checkbox"
                                    id="terms_accept" className='me-2'
                                    checked={isCheck}
                                    onChange={handleCheck} />
                                <label htmlFor="terms_accept"> Мен оқыдым және қабылдадым <a className='text-primary' style={{ cursor: 'pointer', textDecoration: 'none' }}>Ережелер мен Шарттар</a></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-5 col-sm-12">
                    <div className="rounded p-3" style={{ background: "#f8f9fa" }}>
                        {data && <Link to={`/doctors/profile/${data?.id}`} className="booking-doc-img d-flex justify-content-center mb-2">
                            <img src={doctorImg} alt="" />
                        </Link>}
                        {data && <div className='doc-title-info mt-3 mb-3'>
                            <h5 className='mt-3 text-center' style={{
                                fontSize: "22px", fontWeight: 700,
                            }}>Др. {data?.firstName + ' ' + data?.lastName}</h5>
                            <div className='text-center'>
                                <p className='form-text mb-0'>{data?.designation}</p>
                                <p className='form-text mb-0'>{data?.clinicAddress}</p>
                            </div>
                        </div>}

                        <div className="booking-item-wrap">
                            <ul className="booking-date">
                                <li>Күні <span>{moment(selectedDate).format('LL')}</span></li>
                                <li>Уақыт <span>{selectTime}</span></li>
                            </ul>
                            <ul className="booking-fee">
                                <li>Консультациялық Төлем <span>KZT {price}</span></li>
                                <li>Брондау Ақысы <span>KZT 10</span></li>
                                <li>Налог (15%) <span>KZT {vat}</span></li>
                            </ul>

                            <ul className="booking-total">
                                <li className='d-flex justify-content-between'>
                                    <span className='fw-bold'>Барлығы</span>
                                    <span className="total-cost" style={{ color: '#1977cc' }}>KZT {(Number(price) + 10 + vat)}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CheckoutPage;