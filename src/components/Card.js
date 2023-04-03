import { useState } from "react";

function Card( {image, price, id, name, info, removeTour}) {
    const[readmore,setReadmore] = useState(false)

    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore); {/* we handled the toggle between showless &readmore*/}
    }

    return (
        
            <div className="card">

                <img src={image} className="image"></img>

                <div className="tour-info">
                    <div className="tour-details">
                        <h4 className="tour-price">₹ {price}</h4>
                        <h4 className="tour-name">{name}</h4>
                    </div>

                    <div className="description">{description}
                        <span className="read-more" onClick={readmoreHandler}> 
                            {readmore ? `Show Less`: `Read More`} {/*using ternary operator to show the text or showless & readmore*/}
                        </span>
                    </div>
                </div>
                
                <button className="btn-red" onClick={() => removeTour(id)}>
                    Not Interested
                </button>
            </div>
        
    );

}


export default Card;