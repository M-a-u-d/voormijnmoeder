import React from 'react';
import './TegelGebeurtenisDetail.css';


function TegelGebeurtenisDetail({ naam, omschrijving, organisator, datum, naamwaar, straat, woonplaats, opmerking, children }) {
    return (

             <section className="achterkant-tegels">
                 <h1>{ naam } </h1>
                 <h2>{ omschrijving }</h2>
                 <p> organisator: { organisator } </p>
                 <p> tijdstip: { datum }</p>

                 <h4>w a a r  d a n :</h4>
                 <p> { naamwaar }  </p>
                 <p> { straat }  </p>
                 <p> { woonplaats }  </p>

                 <h4>o p m e r k i n g</h4>
                 <p> { opmerking }  </p>

                 {children}
             </section>

    );
}

export default TegelGebeurtenisDetail;


