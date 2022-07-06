import React from 'react';
import './GebeurtenisInfoKaart.css';

//voorbeeld pokemon en reddit en handbags


function GebeurtenisInfoKaart ({naam, naamwaar, straat, woonplaats, organisator, opmerking}) {

    return (

        <section className="achterkant-tegels">

                    <p className="gebeurtenis-title"> { naam } </p>
                    <p> organisator: { organisator } </p>

                    <h2>w a a r:</h2>
                    <p> { naamwaar }  </p>
                    <p> { straat }  </p>
                    <p> { woonplaats }  </p>

                    <h4>o p m e r k i n g</h4>
                    <p> { opmerking }  </p>

        </section>
    );
}

export default GebeurtenisInfoKaart;

