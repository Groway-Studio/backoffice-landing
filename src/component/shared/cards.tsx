import React from "react";
import "./../../sass/shared/_cards.scss";

export default function CardComponent(props: any){
    return(
        <React.Fragment>
            <div className="CardComponent">
                <img src={props.image} alt="" />
                <h3>{props.titleCard}</h3>
                <p>{props.detail}</p>
            </div>
        </React.Fragment>
    )   
}
