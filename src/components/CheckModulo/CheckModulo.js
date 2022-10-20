import React  from "react"
import { Button } from "./styles";
import { useState, useEffect } from "react"

function CheckModulo() {
    

    const [simula, setSimula] = useState()

    return(
    <div>
   
   <div>
   </div>
<div>
    <p>MECAUTO</p>
    <p>Acessos simultâneos: 5</p>
    <h3>Tabela </h3>
</div>

<div>
    <p>MECAUTO-BOX</p>
    <p>Acessos simultâneos: 5</p>
    <h3>Tabela </h3>
</div>
       
    </div>
    )
}

export default CheckModulo;