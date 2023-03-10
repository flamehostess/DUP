import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StageDetail = () => {

    const navigate = useNavigate();

    const [stage, setStage] = useState("")

    const {id} = useParams();

    const getSingleStage = async () => {
        const {data} = await axios.get(`http://localhost:8000/stage/${id}`);
        console.log(data)
        setStage(data)
    }

    useEffect(() => {
        getSingleStage();
    }, [])

    //Delete Stage
    const deleteStage = async (id) => {
        await axios.delete(`http://localhost:8000/stage/${id}/`)
        navigate('/Stage', {replace: true});
    }

    return (
        <div>
            <h1>Stage Detail</h1>
            <div className="single-stage-info">
                <p>{stage.name_stage}</p>
                <p>{stage.execution_time}</p>
                {/* <Link className='btn btn-primary m-2' to={`${stage.id}/update`}>Update</Link> */}
                <Link className='btn btn-primary m-2' to={`update`}>Update</Link>
                <Link className='btn btn-danger m-2' onClick={() => deleteStage(stage.id)}>Delete</Link>
           </div>
        </div>
    );
};

export default StageDetail;