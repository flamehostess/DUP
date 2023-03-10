import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

const AddStage = () => {

    const [machines, setMachines] = useState([])

    const getMachines = async () => {
        const response = await axios.get('http://localhost:8000/machine/') 
        // console.log(response.data)  
        setMachines(response.data)//она установит все machine, поступаемые из api в переменную machine
    }

    useEffect(() => {
        getMachines();
    }, [])

    const options = machines.map((machine, index) => {
        return <option value={machine.id}>{machine.name_machine}</option>;
    });

    // const options = asOptions.map((text, index) => {
    //     return <option key={index}>{text}</option>
    // })

    const [name_stage, setName] = useState("")
    const [work_id, setWorkId] = useState("")
    const [execution_time, setExecutionTime] = useState("")
    const [priority, setPriority] = useState("")
    const [machine, setMachine] = useState("")

    const navigate = useNavigate();

    const AddStageInfo = async () => {
        let formField = new FormData()

        formField.append('name_stage', name_stage)
        formField.append('work_id', work_id)
        formField.append('execution_time', execution_time)
        formField.append('priority', priority)
        formField.append('machine', machine)

        await axios({
            method: 'post', //отправляем информацию из формы в api
            url: 'http://localhost:8000/stage/',
            data: formField
        }).then((response) => {
            console.log(response.data);
            // history.push('/')
            navigate('/stage', {replace: true});
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
                        placeholder="Enter name stage"
                        name="name_stage"
                        value={name_stage}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter work id"
                        name="work_id"
                        value={work_id}
                        onChange={(e) => setWorkId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter execution time"
                        name="execution_time"
                        value={execution_time}
                        onChange={(e) => setExecutionTime(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter priority"
                        name="priority"
                        value={priority}
                        onChange={(e) => setPriority(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <select 
                    // type="text"
                    className="form-control form-control-lg"
                    // placeholder="Enter priority"
                    name="machine"
                    value={machine} 
                    onChange={(e) => setMachine(e.target.value)}>
                        <option selected>Choose machine</option>
                        {options}
                    </select>
                    {/* <select
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter machine"
                        name="machine"
                        value={machine}
                        onChange={(e) => setMachine(e.target.value)}>

                    </select> */}
                </div>
                <button className="btn btn-success" onClick={AddStageInfo}>Add Stage</button>
            </div>
        </div>
    );
};

export default AddStage;