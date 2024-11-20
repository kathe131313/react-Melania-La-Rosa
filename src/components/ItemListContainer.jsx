import React from "react";
import Greeting from './Greeting';

function ItemListContainer({greeting}) {
    return (
        <Greeting mensaje= {greeting}/>

    )
}
export default ItemListContainer