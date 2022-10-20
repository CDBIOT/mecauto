import React from "react"

import {CiCircleCheck } from 'react-icons/ci'

function orcamento() {
    return(
<div>
            <p>Seu orçamento</p>
            <p>Esses são os módulos disponíveis. Os que estão marcados, são os que você solicitou:</p>
            <div className="check">
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
            <CiCircleCheck/>
        </div>

</div>

    )
}
export default orcamento