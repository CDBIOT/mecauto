import React  from "react"
import { Button } from "./styles";
import { useState, useEffect } from "react"
import {CiCircleCheck } from 'react-icons/ci'
import { FcCollapse, FcExpand} from 'react-icons/fc'

function CheckModulo() {

    const [simula, setSimula] = useState()

    return(
        <div>
      
        <Button > Simulação <FcExpand /> <FcCollapse />
       </Button>

        <CiCircleCheck />
        

        <>
        
        </>
        
        </div>
    )
}

export default CheckModulo;