import React from 'react';
import './GebeurtenisInfoKaart.css';

//voorbeeld pokemon en reddit en handbags


function GebeurtenisInfoKaart ({naam, naamwaar, straat, woonplaats, organisator, opmering}) {

    return (

        <section className="Gebeurtenis-info-kaart">

                    <p className="gebeurtenis-title"> { naam } </p>
                    <p> organisator: { organisator } </p>

                    <h4>w a a r  d a n :</h4>
                    <p> { naamwaar }  </p>
                    <p> { straat }  </p>
                    <p> { woonplaats }  </p>

                    <h4>o p m e r k i n g</h4>
                    <p> { opmering }  </p>

        </section>
    );
}

export default GebeurtenisInfoKaart;

