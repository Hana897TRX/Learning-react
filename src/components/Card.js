import react from "react";

import '../css/card.css'

function Card(props) {
    return(
        <div className='containerCard'>
            <div className="card">
                {props.children}
            </div>
        </div>
    )
}

export { Card }