import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const ShowANDAddWorks = () => {

    const [name_work, setNameWork] = useState("")
    const [release_dates, setReleaseDates] = useState("")
    const [due_dates, setDueDates] = useState("")

    const navigate = useNavigate();

    const AddWorkInfo = async () => {
        let formField = new FormData()

        formField.append('name_work', name_work)
        formField.append('release_dates', release_dates)
        formField.append('due_dates', due_dates)

        await axios({
            method: 'post', //отправляем информацию из формы в api
            url: 'http://localhost:8000/work/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            // history.push('/')
            navigate('/works', {replace: true});
        })

    }

    return (
        <div className="container">
            <h1>Add Stage</h1>
            <div className="form-group">
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter name work"
                        name="name_work"
                        value={name_work}
                        onChange={(e) => setNameWork(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter release dates"
                        name="release_dates"
                        value={release_dates}
                        onChange={(e) => setReleaseDates(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter due dates"
                        name="due_dates"
                        value={due_dates}
                        onChange={(e) => setDueDates(e.target.value)}
                    />
                </div>
                <button className="btn btn-success" onClick={AddWorkInfo}>Add Work</button>
            </div>
        </div>
    );
};

export default ShowANDAddWorks;