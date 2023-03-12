import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowMachines = () => {

    const [machines, setMachines] = useState([])

    const getMachines = async () => {
        const response = await axios.get('http://localhost:8000/machine/') 
        // console.log(response.data)  
        setMachines(response.data)//она установит все machine, поступаемые из api в переменную machine
    }

    useEffect(() => {
        getMachines();
    }, [])

    return (
        <div>   
            <div className="card-info machines-card-info">
            {/* <h1>Show All the Stages</h1> */}
            {
                machines.map((machine, index) => (
                    <Card className="m=2 rounded shadow-lg" style={{ width: '18rem' }}>
                    {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                    <Card.Body>
                        <Card.Title>{machine.name_machine}</Card.Title>
                        <Card.Text className="machine-description-info">{machine.description}</Card.Text>
                        {/* <Button variant="primary">Show Detail</Button> */}
                        <Link className="btn btn-primary" to={`machine/${machine.id}/`}>Detail</Link>
                    </Card.Body>
                    </Card>
                ))
            }
            </div>
        </div>
    );
};

export default ShowMachines;