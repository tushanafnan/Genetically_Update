import React, { useEffect, useState } from 'react';
import Services from "./Services"
import './Service.css'
import database from "../firedb"
const Service = () => {
    const [services , setServices] = useState ([]);
    useEffect (()=> {
        const serviceRef = database.ref("Service");
        serviceRef.on ("value", (snapshot) => {
            const multiServices=snapshot.val();
            setServices(multiServices) })

    }, [] )
    return (
<div>
        <div className="row text-center">
        <div className="col-md-12">
    
        <div className="row g-4 row-cols-1 row-cols-md-3 ms-2 row-solve">
              
        {services.map ( sub => <Services key= {sub.title} sub={sub}></Services>)}
              
        </div>
        </div>
        </div>

        
    </div>
          
       
    );
};

export default Service;