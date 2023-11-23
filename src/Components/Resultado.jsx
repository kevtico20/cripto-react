import styled from "@emotion/styled"
import { useState } from "react"

const Resultados=styled.div`
    color: #fff;
    font-family: 'Lato',sans-serif;
    display: flex;
    align-items: start;
    gap: 3rem;
    margin-top: 30px;
`
const Precio=styled.p`
    font-size: 24px;
    span{
        font-weight: 700;
    }
    
`
const Parrafo=styled.p`
  font-size: 18px;
    span{
        font-weight: 700;
    }
`
const Img=styled.img`
    background-attachment: fixed;
    display: block;
    background-image: center center;
    width: 120px;
    
`
const Resultado = ({resultado}) => {
const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE}=resultado
  
  return (
    <Resultados>
      <Img src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de la cripto Moneda" />

      <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Parrafo>Precio más alto del día: <span>{HIGHDAY}</span></Parrafo>
        <Parrafo>Precio más bajo del día: <span>{LOWDAY}</span></Parrafo>
        <Parrafo>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Parrafo>
        <Parrafo>Última Actualizacion: <span>{LASTUPDATE}</span></Parrafo>
      </div>
    </Resultados>
  )
}

export default Resultado
