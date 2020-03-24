//Import
import React from 'react'
import styled from 'styled-components'
import styles from './PersonaHover_styles'
// components
import Tooltip from '../Tooltip'
import { useState } from 'react'


// Componente base
const PersonaHover_base = ({student, tooltip, ...props}) => {
    const [visible, mostrarTooltip] = useState(false)

    return (
        <div {...props}>
            <div className="workspace">
                <div className={'person ' + student } onClick={() => mostrarTooltip(!visible)}>
                </div>
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
                
               
                <div>
                    <Tooltip visible={visible} onClick={() => mostrarTooltip(!visible)} > {tooltip} </Tooltip>
                </div>
        </div>
    )
}
const PersonaHover = styled(PersonaHover_base)`${ styles }`
export default PersonaHover
