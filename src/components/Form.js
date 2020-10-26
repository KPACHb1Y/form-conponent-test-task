import React, {useState} from 'react';

export const Form = () => {
    const metric = '\u00b2';
    const currency = '\u20bd';

    const [openCost, setOpenCost] = useState(false);
    const [openMetric, setOpenMetric] = useState(false);
    const [openField, setOpenField] = useState(false);
    const [valueCity, setValueCity] = useState('Москва');
    const [valueOption, setValueOption] = useState('Купить');
    const [valueOffice, setValueOffice] = useState('Офис');
    const [inputMinCostValues, setInputMinCostValues] = useState('');
    const [inputMaxCostValues, setInputMaxCostValues] = useState('');
    const [valueCurrency, setValueCurrency] = useState(`${currency}/месяц`);
    const [inputMinMetricValues, setInputMinMetricValues] = useState('');
    const [inputMaxMetricValues, setInputMaxMetricValues] = useState('');

    const handlerChangeCostMin = e => setInputMinCostValues(e.target.value);
    const handlerChangeCostMax = e => setInputMaxCostValues(e.target.value);
    const handlerChangeMetricMin = e => setInputMinMetricValues(e.target.value);
    const handlerChangeMetricMax = e => setInputMaxMetricValues(e.target.value);

    const handlerChangeCity = e => setValueCity(e.target.value);

    const handlerChangeOption = e => setValueOption(e.target.value);

    const handlerChangeOffice = e => setValueOffice(e.target.value);

    const handleChangeCurrency = e => setValueCurrency(e.target.value);

    const handlerSubmit = (event) => {
        event.preventDefault();
            alert(`Город: ${valueCity}
            - Вид сделки: ${valueOption}
            - Сделка по недвижимости: ${valueOffice};
               Цена за недвижимость от ${inputMinCostValues} до ${inputMaxCostValues} ${valueCurrency};
               Метраж недвижимости от ${inputMinMetricValues} до ${inputMaxMetricValues} за м${metric};
        `)
    }

    return (
        <>
            <form style={styles.formStyle} onSubmit={handlerSubmit}>
                <div className="form-group" style={styles.formGroupStyle}>
                    <div className={!openField ? "open form-row" : "hide"} style={{width: '100%'}}>
                        <div className="col-4">
                            <select name="cityName" className="form-control" onChange={handlerChangeCity} value={valueCity}>
                                <option>Москва</option>
                                <option>Санкт-Петербург</option>
                                <option>Екатеринбург</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-control" onChange={handlerChangeOption} value={valueOption}>
                                <option>Купить</option>
                                <option>Продать</option>
                                <option>Аренда</option>
                            </select>
                        </div>
                        <div className="col-4">
                            <select className="form-control" onChange={handlerChangeOffice} value={valueOffice}>
                                <option>Офис</option>
                                <option>Склад</option>
                                <option>Офис класса А</option>
                            </select>
                        </div>
                    </div>
                        <div className={openField ? "open form-row" : "hide"} style={{width: '100%'}}>
                            <div className="col">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Введите название объекта(бизнес центра, торгового центра, новостройки, логопарка)"
                                />
                            </div>
                        </div>
                    <div className="col-3">
                        <button type="submit" style={styles.btnStyle} className="btn btn-success">Найти</button>
                    </div>
                </div>
                <div className="form-row btn-blocks">
                    <div className="col-7">
                        <input type="button" className={!openCost ? "open form-control" : "hide"} value="Добавить цену" onClick={() => setOpenCost(!openCost)}/>
                        <div className={openCost ? "open form-row" : "hide"}>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="От" value={inputMinCostValues} onChange={handlerChangeCostMin} />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="До" value={inputMaxCostValues} onChange={handlerChangeCostMax}/>
                            </div>
                            <div className="col">
                                <select id="inputState" className="form-control" onChange={handleChangeCurrency} value={valueCurrency}>
                                    <option selected>&#8381;/месяц</option>
                                    <option selected>&#36;/месяц</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <input type="button" className={!openMetric ? "open form-control" : "hide"} value="Добавить метраж" onClick={() => setOpenMetric(!openMetric)}/>
                        <div className={openMetric ? "open form-row" : "hide"}>
                            <div className="col-5">
                                <input type="text" className="form-control" placeholder="От" value={inputMinMetricValues} onChange={handlerChangeMetricMin}/>
                            </div>
                            <div className="col-5">
                                <input type="text" className="form-control" placeholder="До" value={inputMaxMetricValues} onChange={handlerChangeMetricMax}/>
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" value="м&sup2;" readOnly/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <div className="row" style={styles.rowStyle}>
                <div className="col-7 switch-block">
                    <p>Основной поиск</p>
                    <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={() => setOpenField(!openField)} />
                        <label className="custom-control-label" htmlFor="customSwitch1">Искать по названию</label>
                    </div>
                </div>
                <div className="col-5" style={{textAlign: 'right'}}>
                    <span onClick={() => setOpenCost(!openCost)} className="cost-btn">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                              <path fillRule="evenodd"
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                            </svg>
                        Цена
                    </span>
                    <span onClick={() => setOpenMetric(!openMetric)} className="metric-btn">
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-x-circle" fill="currentColor"
                             xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                          <path fillRule="evenodd"
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                        Метраж
                    </span>
                </div>
            </div>
        </>
    )
}

const styles = {
    btnStyle: {
        width: '100%'
    },
    formStyle: {
        padding: 20,
        background: 'linear-gradient(90deg, rgba(132,180,230,1) 15%, rgba(141,189,230,1) 100%)'
    },
    formGroupStyle: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    rowStyle: {
        padding: 20,
        margin: 0,
        backgroundColor: '#e6f2fe'
    }
}