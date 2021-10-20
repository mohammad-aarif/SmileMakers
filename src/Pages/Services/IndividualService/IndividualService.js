import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import useService from '../../../Hooks/useServices';
import './individualService.css'
const IndividualService = () => {
    const {serviceid} = useParams();
    // const [details, setDetails] = useState([])
    const[service] = useService();
    const [singleResult, setSingleResult] = useState({})

    // useEffect(() => {
    //     fetch('/services.json')
    //     .then(res => res.json())
    //     .then(data => setDetails(data))
    // }, []);
    
    useEffect(() => {
        const found = service.find(element => element.key === +serviceid);
        // console.log(found)
        return () => {
            // setState({}); // This worked for me
            setSingleResult(found)
            console.log(singleResult)
          };
    }, [])

    // console.log(singleResult)

    const {name, desc, feature} = singleResult; 

    // const{name, img} = foundResult;
    return (
        <div>
            <h1 className="bg-dark text-center text-light py-5">{name}</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-lg-6 col-12 single-service-img">
                    <img src='' alt="" />
                    </div>
                    <div className="col-md-6 col-lg-6 col-12">
                        <h2>What is {name}?</h2>
                        <p>{desc}</p>
                        <ul>
                            {
                                // feature.map(item => <li>{item}</li>)
                            }
                        </ul>
                    </div>
                </div>
                <Link className="btn mx-auto d-block my-5 general-btn px-5" to='/appointment'> Get Appointment</Link>
            </div>
        </div>
    );
};

export default IndividualService;