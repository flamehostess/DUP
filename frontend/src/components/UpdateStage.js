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
        const {data} = await axios.get(`http://localhost:8000/api/${id}`)
        console.log(data);
    }

    useEffect(() => {
        loadStage()
    }, [])

    return (
        <div>
            <h1>Update stage page</h1>
        </div>
    );
};

export default UpdateStage;