import { useParams } from "react-router-dom";
import logo from '../../../images/logo.png';
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import { useGetPrescriptionQuery } from "../../../redux/api/prescriptionApi";
import moment from "moment";
import { Empty, Table, Button } from "antd";
import './index.css';
import { useRef } from "react";
import { FaPrint } from "react-icons/fa";
import ReactToPrint from "react-to-print";

const PrescriptionView = () => {
    const ref = useRef();
    const { id } = useParams();
    const { data, isLoading, isError } = useGetPrescriptionQuery(id);

    const columns = [
        {
            title: 'Лекарство',
            dataIndex: 'medicine',
            key: 'medicine',
        },
        {
            title: 'Дозировка',
            dataIndex: 'dosage',
            key: 'dosage',
        },
        {
            title: 'Частота',
            dataIndex: 'frequency',
            key: 'frequency',
        },
        {
            title: 'Период',
            key: 'duration',
            render: function (data) {
                const duratinDate = data.duration.split(',');
                const endDate = moment(duratinDate[0]);
                const startDate = moment(duratinDate[1]);
                const getDiffrent = endDate.diff(startDate, "days");
                return (
                    <>{getDiffrent} дни</>
                )
            }
        },

    ];

    let content = null;
    if (isLoading) content = <div>Загрузка ...</div>
    if (!isLoading && isError) content = <div>Что-то пошло не так!</div>
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
                                    <strong>Идентификатор для отслеживания:</strong> {data?.appointment?.trackingId} <br />
                                    <strong>Изданный:</strong> {moment(data.createdAt).format('LL')}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="invoice-item">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="invoice-info p-2 rounded" style={{ background: '#c9c9c92b' }}>
                                    <div className="invoice-details invoice-details-two " >
                                        <h3>Dr.{data?.doctor?.firstName + ' ' + data?.doctor?.lastName}</h3>
                                        <p>{data?.doctor?.designation} ,</p>
                                        <p>{data?.doctor?.college}</p>
                                        <span className="form-text">{data?.doctor?.address}, {data?.doctor?.state},{data?.doctor?.country}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="invoice-info">
                                    <strong className="customer-text text-secondary">Информация о пациенте:</strong>
                                    <div className="invoice-details invoice-details-two">
                                        <div className="d-flex justify-content-between patient-name">
                                            <div>
                                                <h5 style={{ fontWeight: 700 }}>Науқастың аты: {data?.patient?.firstName + ' ' + data?.patient?.lastName}</h5>
                                                <p className="form-text">Адрес: {data?.patient?.address}, {data?.patient?.city}, {data?.patient?.country}</p>
                                            </div>
                                            <div>
                                                <p>Пол: {data?.patient?.Gender}</p>
                                                <p>Возраст: {moment().diff(data?.patient?.dateOfBirth, 'years')}</p>
                                                <p>Вес : {data?.patient?.weight}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="invoice-item invoice-table-wrap">
                        <div className="row border-top border-2">
                            <div className="col-md-3 col-xl-3 border-end border-2 symptoms-section">
                                <div className="mt-3">
                                    <div>
                                        <h5>Симптомы</h5>
                                        <p>{data?.disease}</p>
                                    </div>
                                    <div>
                                        <h5>Диагнозы</h5>
                                        <p>{data?.daignosis}</p>
                                    </div>
                                    <div>
                                        <h5>Тесты</h5>
                                        <p>{data?.test}</p>
                                    </div>
                                    <div>
                                        <h5>Следующая встреча</h5>
                                        <p>
                                            <span>Дата : {moment(data?.followUpdate).format('LL')}</span> <br />
                                            <span>Время : {moment(data?.followUpdate).format('LT')}</span>
                                        </p>
                                    </div>
                                    <div>
                                        <h5>СОВЕТ</h5>
                                        <p>{data?.instruction}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-9 col-xl-9 px-0">
                                <Table columns={columns} dataSource={data?.medicines} pagination={false} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    return (
        <>
            <Header />

            <div className="content" style={{ marginTop: '10rem', marginBottom: '7rem' }}>
                <div className="d-flex justify-content-end" style={{ marginRight: '8rem' }}>
                    <ReactToPrint
                        bodyClass="print-agreement"
                        content={() => ref.current}
                        trigger={() => (<Button type="primary" icon={<FaPrint />}> Print</Button>)}
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

export default PrescriptionView