import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
position: absolute;
z-index:500;
top: 15%;
left: 0;
right:0;
font-size:0.7em;
text-align:center;
color:${Ilex.textos};
background-color: #fff;
padding:2em 1em 2.8em 1em;
border-radius:1.5em;
box-shadow:0 0 1em 0 rgba(0,0,0,0.2);
display:${props => props.visible ? 'block' : 'none'};
.btn-close{
    position: absolute;
    width:1.5em;
    height:1.5em;
    bottom:0.8em;
    right:1em;
}

`

export default styles
    