import { css } from 'styled-components'
// import Ilex from '../../App/variables'

const area = 150
const cols = 4 // Celdas horizontales son 4 items
const rows = 3 // Celdas verticales son 1 fila
const spriteX = area * cols
const styles = css`
width:${area}px;
height:${area}px;
margin:0.6em 0;
position: relative;

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

export default styles
    