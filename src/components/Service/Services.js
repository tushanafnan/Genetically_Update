import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Services= (props) => {
    const {title, period, price, data, id} = props.sub || {};
    
    const history = useHistory();


    return (
   

            <div className='col'>
                <div className='card text-center'>

            
  <Card >
    
    <Card.Body>
      <Card.Title><small> {title} </small> </Card.Title>
      <Card.Text> 
     <span className='fs-1'>${price} </span><span className='text-secondary fs-4'>/{period}</span>
      </Card.Text>
      <Card.Text>
     <p className="fs-8"> <small> {data}</small> </p>
      </Card.Text> 
      <button onClick={() => history.push(`/ServiceDetails/${id}`)}  className='btn w-100 btn-warning'>  <b>Get the Service</b> </button>
    </Card.Body>
  
   
 
      </Card>
                </div>

            </div>

     



    ); 

}
    
export default Services;