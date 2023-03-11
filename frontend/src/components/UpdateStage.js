import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateStage = () => {

    const [name_stage, setName] = useState("")
    const [work_id, setWorkId] = useState("")
    const [execution_time, setExecutionTime] = useState("")
    const [priority, setPriority] = useState("")
    const [machine, setMachine] = useState("")

    const navigate = useNavigate();
    const {id} = useParams();

    const loadStage = async () => {
        const {data} = await axios.get(`http://localhost:8000/api/${id}`);
        console.log(data)
        setName(data.name_stage)
        setWorkId(data.work_id)
        setExecutionTime(data.execution_time)
        setPriority(data.priority)
        setMachine(data.machine)
    }

    useEffect(() => {
        loadStage()
    }, [])

    // Update Stages
    const UpdateStageInfo = async () => {
        let formField = new FormData()
        formField.append('name_stage', name_stage)
        formField.append('work_id', work_id)
        formField.append('execution_time', execution_time)
        formField.append('priority', priority)
        formField.append('machine', machine)

        await axios({
            method: 'PUT',
            url: `http://localhost:8000/api/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data)
            navigate('/', {replace: true});
        })
    }

    return (
        <div>
            <h1>Update stage page</h1>
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
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter machine"
                        name="machine"
                        value={machine}
                        onChange={(e) => setMachine(e.target.value)}
                    />
                </div>
                <button className="btn btn-success" onClick={UpdateStageInfo}>Update Stage</button>
            </div>
        </div>
    );
};

export default UpdateStage;