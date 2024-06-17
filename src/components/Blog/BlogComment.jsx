import React from 'react';
import userImg from '../../images/avatar.jpg';
import { Button } from 'antd';

const BlogComment = () => {
    return (
        <div className='mx-3' style={{ marginTop: '7rem' }}>
            <h5 className="mb-5" style={{ fontWeight: '900' }}>ПІКІРЛЕР</h5>

            {
                Array(4).fill(null).map((_item, index) => (
                    <div className='d-flex gap-3 mb-3' key={index + 5}>
                        <div>
                            <img src={userImg} width={80} className='' alt='user imge' />
                        </div>
                        <div>
                            <div className='mb-2'>
                                <h6>Эндрю Саймон</h6>
                                <p className='form-text mb-0'>Тамыз 2023</p>
                            </div>
                            <p className='form-text'>
                                Неліктен Институционализация Жеңісінің айқын белгілері тек маркетингтік және қаржылық алғышарттар тұрғысынан қарастырылғанын айту қиын. Неліктен Институционализация Жеңісінің айқын белгілері тек маркетингтік және қаржылық алғышарттар тұрғысынан қарастырылғанын айту қиын.
                            </p>
                        </div>
                    </div>
                ))
            }

            <div className="mx-auto" style={{ marginTop: '7rem', marginBottom: '7rem' }}>

                <div className="card mb-5 p-3 shadow border-0">
                    <form className="row form-row">
                        <div className="col-md-6">
                            <div className="form-group mb-2 card-label">
                                <label>Аты</label>
                                <input placeholder='Аты' className="form-control" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group mb-2 card-label">
                                <label>Тегі</label>
                                <input placeholder='Тегі' className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group mb-2 card-label">
                                <label>Пән</label>
                                <input placeholder='Пән' className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="form-group mb-2 card-label">
                                <label>Пікір</label>
                                <textarea placeholder='Пікіріңіз' className="form-control" rows={5} />
                            </div>
                        </div>

                        <div className='text-center my-3'>
                            <Button htmlType='submit' type="primary" size='large'>
                                Пікір қалдыру
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default BlogComment