import React, {useEffect, useState} from "react";
import PageHeader from "../../components/header/PageHeader";
import Loader from "../../components/loader/Loader";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import GebeurtenisInfoKaart from "../../components/gebeurtenisInfo/GebeurtenisInfoKaart";
import axios from "axios";
import "./Gebeurtenis.css"


function Gebeurtenis () {
    const [gebeurtenissen, setGebeurtenissen] = useState([]);
    const [loading, toggleLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchData() {
            toggleLoading(true);
            setError(false);

            try {
                const { data } = await axios.get (`http://localhost:8081/gebeurtenissen`);
                setGebeurtenissen(data);
                console.log (data)

            } catch (e) {
                console.error(e);
                setError(true);
            }
            toggleLoading(false);
        }

        fetchData();

    }, []);

    if (loading) return `loading...`

    return (

<>
            <PageHeader>
                <h1>b e L e v e n</h1>
            </PageHeader>
    <>
        <div className="outer-content-container">
            <div className="inner-content-container">
                <h2>Wat is er te doen in dit dorp</h2>

                <div className="gebeurtenis-artikel-container">
                    {gebeurtenissen.map((gebeurtenis) => {
                        return (
                            <GebeurtenisInfoKaart
                                key={gebeurtenis.id}

                                naam={gebeurtenis.naam}
                                organisator={gebeurtenis.organisator}
                                waar={gebeurtenis.waar}
                                naamwaar={gebeurtenis.naamwaar}
                                straat={gebeurtenis.straat}
                                plaats={gebeurtenis.woonplaats}
                                opmerking={gebeurtenis.opmering}
                        />
                        )


                })}

                        {loading && <Loader/>}
                        {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
                </div>
                <h4>best leuk</h4>
            </div>
        </div>
    </>
    </>
    );
}

export default Gebeurtenis;