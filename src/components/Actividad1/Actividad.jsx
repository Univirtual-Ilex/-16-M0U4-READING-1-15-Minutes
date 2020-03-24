import React, { useEffect, useRef, useState } from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
import PersonaHover from '../PersonaHover'
import ButtonCheck from '../ButtonCheck'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'

// Data
import data from './Actividad_data'
import img from './Actividad_imgs'


import DraggableItem from '../Draggable'
import Tooltip from '../Tooltip'

import Modal from '../Generales/Modal'




const Actividad_base =  ({staticContext,...props}) => {


    const [visible0, mostrarTooltip0] = useState(false)
    const [visible1, mostrarTooltip1] = useState(false)
    const [visible2, mostrarTooltip2] = useState(false)
    const [visible3, mostrarTooltip3] = useState(false)
    
    const [modalFlag, setModal] = useState(false)
    const [ok, setOk] = useState(false)
    const [err, setErr] = useState(false)
    // Refs de las areas
    const area_0_1 = useRef()
    const area_0_2 = useRef()
    const area_0_3 = useRef()
    const area_1_1 = useRef()
    const area_1_2 = useRef()
    const area_1_3 = useRef()
    const area_2_1 = useRef()
    const area_2_2 = useRef()
    const area_2_3 = useRef()
    const area_3_1 = useRef()
    const area_3_2 = useRef()
    const area_3_3 = useRef()


    const setStatusCheck = (id, status) => {
        img[id].status = status
    }
    const checkActivity = () => {
        var count = 0
        img.map((image, i) => {
            if(image.status === 1){
                count ++
            }else{
                setErr(true)
                setModal(true)
            }

            if(count === img.length){
                setOk(true)
                setModal(true)
            }
        })
    }

    const mostrar = (index) => {
        eval('mostrarTooltip' + index)(!eval('visible' + index))
        for (var i = 0 ; i < 4; i++) {
            if( i !== index)
                eval('mostrarTooltip' + i)(false)
        }
    }
    const images = img.map((item, index) => {
                            return(
                                <DraggableItem elementId={index} key={index} setStatus={setStatusCheck} idArr={index} areaDrag={'#area'} target={item.belongsTo}  ref={[area_0_1, area_0_2, area_0_3, area_1_1, area_1_2, area_1_3, area_2_1, area_2_2, area_2_3, area_3_1, area_3_2, area_3_3]}>
                                    <div className="boxes"  >
                                        <img src={item.img} alt="Img para arrastrar" />
                                    </div>
                                </DraggableItem>
                            )
                        })
    
    const personas = data.map((item, index) => {
                        return(
                            <div key={item.id} >
                                <div className="workspace">
                                    <div className={'person ' + item.student } onClick={() => mostrar(index)}>
                                    </div>
                                    <div className="box" data-target={'area_' + index + '_1'}   target={'area_' + index + '_1'} id={'area_' + index + '_1'} ref={eval('area_' + index + '_1')}></div>
                                    <div className="box" data-target={'area_' + index + '_2'}   target={'area_' + index + '_2'} id={'area_' + index + '_2'} ref={eval('area_' + index + '_2')}></div>
                                    <div className="box" data-target={'area_' + index + '_3'}   target={'area_' + index + '_3'} id={'area_' + index + '_3'} ref={eval('area_' + index + '_3')}></div>
                                    <div >
                                        <Tooltip visible={eval('visible' + index)} onClick={() => mostrar(index)} > {item.tooltip} </Tooltip>
                                    </div>
                                </div>
                                    
                                   
                            </div>
                            )
                    })
    return (
        <Container bgImage='./src/bg_actividad1.png' id="area" {...props} h={55}>
            
            <UiButtonsContainer>
                <ButtonUi icon='ilx-ayuda' tooltip='Click on the characters to see the routine of each one, then drag the corresponding images' />
                <ButtonUi icon='ilx-volver' tooltip='Start Again' />
            </UiButtonsContainer>
            <IRow pt={1.5}>
                <ICol py={ 3 }>
                    <MainTitle color={Ilex.violeta2} size={1.5}>
                    READ THE ROUTINES OF DIFFERENT STUDENTS AND THEN ASSOCIATE THE IMAGES CORRESPONDINGLY
                    </MainTitle>  
                </ICol>
            </IRow>

            <IRow justify='center' align='center' w={100} gutters={0.5}>
                <ICol w={60}>
                    <IRow>
                        {personas}
                    </IRow>
                </ICol>
                <ICol w={30} py={2}>
                    <IRow gutters={1} >
                        {images}
                    </IRow>
                </ICol>
                <IRow>
                    <ICol pt={1}><ButtonCheck onClick={checkActivity} /></ICol>
                </IRow>

            </IRow>
            <Modal visible={modalFlag} ok={ok} err={err} w={25} repeatUrl={'/actividad1'} finished={ok} />
        </Container>
    )

}

const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad