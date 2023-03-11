import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowStages = () => {
    const [stages, setStages] = useState([])

    const getStages = async () => {
        const response = await axios.get('http://localhost:8000/api/') 
        // console.log(response.data)  
        setStages(response.data)//она установит все stage, поступаемые из api в переменную stage
    }

    useEffect(() => {
        getStages();
    }, [])

    return (
        <div>   
            <div className="stages-card-info">
            {/* <h1>Show All the Stages</h1> */}
            {
                stages.map((stage, index) => (
                    <Card className="m=2 rounded shadow-lg" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{stage.name_stage}</Card.Title>
                        <Card.Text>{stage.execution_time}</Card.Text>
                        {/* <Button variant="primary">Show Detail</Button> */}
                        <Link className="btn btn-primary" to={`/${stage.pk}/`}>Detail</Link>
                    </Card.Body>
                    </Card>
                ))
            }
            </div>
        </div>
    );
};

export default ShowStages;