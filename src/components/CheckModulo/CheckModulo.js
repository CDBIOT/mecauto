import React  from "react"
import { Button } from "./styles";
import { useState, useEffect } from "react"
import styles from "./Check.module.css"


function CheckModulo() {
    
    const [simula, setSimula] = useState()

    return(
<div className={styles.container_boxs}>
   
    <div className={styles.box}>
        <p>MECAUTO</p>
        <p>Acessos simultâneos: {}</p>
        <h3>Tabela </h3>
    </div>

    <div className={styles.box}>
        <p>MECAUTO-BOX</p>
        <p>Acessos simultâneos: 5</p>
        <h3>Tabela </h3>
    </div>
       
</div>
    )
}

export default CheckModulo;