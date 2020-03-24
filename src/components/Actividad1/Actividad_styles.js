import styled, {css} from 'styled-components'
// eslint-disable-next-line
import Ilex from '../../App/variables'
// eslint-disable-next-line
import animations from './Actividad_animations'
const area = 150
const cols = 4 // Celdas horizontales son 4 items
const rows = 3 // Celdas verticales son 1 fila
const spriteX = area * cols
const mistyles = css`

.fondo-correo{
    width: 58.06em;
    height: 27.125em;
    background-image: url(./src/bg-mail.png);
    background-repeat: no-repeat;
    background-position:0 0;
    background-size: contain;
    font-size:0.95em;
    position: relative;
    color: ${Ilex.textos};
}


.to,.subject,.content{
    width: 80%;
    margin:0 auto;
    font-size: 0.8em;
    padding: 1em;
}
.label{
    font-weight:bold;
    margin-right:1em;
}
.to{
    margin-top:3.5em;
    .mail{
        color: ${Ilex.violeta2};
        font-weight:medium;
    }
}
.boxes{
    margin: auto;
    background-color: #F2F2F2;
    border-radius:0.5em;
    width: 7em;
    height:6em;
    margin-bottom:0.3em;
}

.person{
    width:${area}px;
    height:${area}px;
    margin:0.2em 0;
    background-image: url(./src/sprite.png); 
    background-size: ${ area * cols}px ${ area * rows}px;
    background-position: 0 0;
    cursor: pointer;
    transition: transform 0.15s ease-in-out;
   
    &.Natalia{
        background-position-x: -7px;
        &:hover{
            
        }
    }
    &.Armando{
        background-position-x:-150px;
        &:hover{
            
        }
    }
    &.Gabriela{
        background-position-x:-300px;
        &:hover{
            
        }
    }
    &.Ramon{
        background-position-x: -450px;
        &:hover{
            
        }
    }

}

.recorder {
    position: relative;
    z-index:4;
    display: flex;
    justify-content:center;
    align-items:flex-start;


    button {
        width:2em;
        height:2em;
        display: inline-block;
        cursor:pointer;
        position: relative;
        top:-1em;
        margin: 0 0.3em;
    }
}
.workspace{
    margin-top: 1.5em;
    background-color:#F2F2F2;
    height: 35em;
    border-radius:1em;
    margin-right: 0.4em;
    margin-left: 0.2em;
}
.box{
    margin: auto;
    background-color: #CCCCCC;
    border-radius:0.5em;
    width:8em;
    height:6em;
    margin-bottom:2em;
}
`

export const DraggablesContainer = styled.div`
    width: 90%;
    margin: auto;
    padding: 0.4em 1em;
    text-align:center;
`

export const AreasContainer = styled(DraggablesContainer)`

    display:flex;
    justify-content:center;
    align-items: center ;
`

export const ProgressbarContainer = styled.div`
    width: 60%;
    margin:auto;
`

export const UiButtonsContainer = styled.div`
    width:6.5em;
    height:3em;
    display: flex;
    justify-content:space-between;
    position:absolute;
    right:${props => props.right || '1.6' }em;
    top:${props => props.top || '1' }em;

`

export default {mistyles , DraggablesContainer, AreasContainer, ProgressbarContainer}