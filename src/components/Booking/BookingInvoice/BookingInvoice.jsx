import Footer from '../../Shared/Footer/Footer';
import logo from '../../../images/logo.png';
import './BookingInvoice.css';
import { useParams } from 'react-router-dom';
import { useGetAppointmentedPaymentInfoQuery } from '../../../redux/api/appointmentApi';
import moment from 'moment';
import { Empty, Button } from 'antd';
import Header from '../../Shared/Header/Header';
import { useRef } from "react";
import { FaPrint } from "react-icons/fa";
import ReactToPrint from "react-to-print";

const BookingInvoice = () => {
    const ref = useRef();
    const { id } = useParams();
    const { data, isLoading, isError } = useGetAppointmentedPaymentInfoQuery(id)

    let content = null;
    if (isLoading) content = <div>Loading ...</div>
    if (!isLoading && isError) content = <div>Бірдеңе Дұрыс Болмады!</div>
    if (!isLoading && !isError && !data) content = <Empty />
    if (!isLoading && !isError && data) content =
        <>
            <div className="col-lg-8 offset-lg-2">
                <div className="invoice-content">
                    <div className="invoice-item">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="invoice-logo">
                                    <img src={logo} alt="" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <p className="invoice-details">
                                    <strong>Тапсырыс:</strong> #00124 <br />
                                    <strong>Берілген:</strong> {moment(data.createdAt).format('LL')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="invoice-item">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="invoice-info">
                                    <strong className="customer-text">Шот-Фактура</strong>
                                    <p className="invoice-details invoice-details-two">
                                        Др. {data?.appointment?.doctor?.firstName ? `${data?.appointment?.doctor?.firstName} ${data?.appointment?.doctor?.lastName}`: ' DoctorOnCall'} <br />
                                        {data?.appointment?.doctor?.address ? data?.appointment?.doctor?.address : "Казахстан, Актобе, бр.Жубановых 8,3214"}, {data?.appointment?.doctor?.city && data?.appointment?.doctor?.city},<br />
                                        {data?.appointment?.doctor?.country && data?.appointment?.doctor?.country} <br />
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="invoice-info invoice-info2">
                                    <strong className="customer-text">Invoice To</strong>
                                    <p className="invoice-details">
                                        {data?.appointment?.patient?.firstName + ' ' + data?.appointment?.patient?.lastName} <br />
                                        {data?.appointment?.patient?.address}, {data?.appointment?.patient?.city} ,<br />
                                        {data?.appointment?.patient?.country} <br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-item">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="invoice-info">
                                    <strong className="customer-text">Төлем Әдісі</strong>
                                    <p className="invoice-details invoice-details-two">
                                        {data?.paymentType} <br />
                                        XXXXXXXXXXXX-2541 <br />
                                        {data?.paymentMethod}<br />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="invoice-item invoice-table-wrap">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="table-responsive">
                                    <table className="invoice-table table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Сипаттама</th>
                                                <th className="text-center">Дәрігердің Ақысы</th>
                                                <th className="text-center">Налог</th>
                                                <th className="text-right">Барлығы</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Жалпы Консультация</td>
                                                <td className="text-center">KZT {data?.DoctorFee}</td>
                                                <td className="text-center">KZT {data?.vat}</td>
                                                <td className="text-right">KZT {data?.totalAmount}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="col-md-12 col-xl-12 me-auto">
                                <div className="table-responsive">
                                    <table className="invoice-table-two table">
                                        <tbody>
                                            <tr>
                                                <th>Барлығы:</th>
                                                <td><span>KZT {data?.totalAmount}</span></td>
                                            </tr>
                                            <tr>
                                                <th>Жеңілдік:</th>
                                                <td><span>0%</span></td>
                                            </tr>
                                            <tr>
                                                <th>Жалпы Сомасы:</th>
                                                <td><span>KZT {data?.totalAmount}</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="other-info">
                        <h4>Басқа ақпарат</h4>
                        <p className="text-muted mb-0">Неліктен Институционализация Жеңісінің айқын белгілері тек маркетингтік және қаржылық алғышарттар тұрғысынан қарастырылғанын айту қиын.</p>
                    </div>

                </div>
            </div>
        </>
    return (
        <>
            <Header />
            <div className="content" style={{ marginBottom: '7rem', marginTop:'10rem' }}>
                <div className="d-flex justify-content-end mb-4" style={{ marginRight: '8rem' }}>
                    <ReactToPrint
                        bodyClass="print-agreement"
                        content={() => ref.current}
                        trigger={() => (<Button type="primary" icon={<FaPrint />}> Басып шығару</Button>)}
                    />
                </div>
                <div className="container-fluid" ref={ref}>
                    <div className="row">
                        {content}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default BookingInvoice;