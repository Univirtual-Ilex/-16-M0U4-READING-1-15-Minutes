
//Import
import React from 'react'
import styled from 'styled-components'
import styles from './Tooltip_styles'

// Componente base
const Tooltip_base = ({visible,...props}) => {
    return (
        <div {...props}>
            { props.children }
            <button className='btn-clean btn-close'>
                <img src="./src/btn-cerrar.svg" alt="Cerrar tooltip"/>
            </button>
        </div>
    )
}
const Tooltip = styled(Tooltip_base)`${ styles }`
export default Tooltip
