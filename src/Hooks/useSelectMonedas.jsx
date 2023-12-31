import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
    color: #fff;
    display: block;
    font-size: 30px;
    font-weight: 700;
    font-family: 'Lato',sans-serif;
    margin: 15px 0;
`

const Select = styled.select`
   width: 100%;
    border: none;
    border-radius: 10px;
    padding: 12px;
    font-size: 18px;
`

const useSelectMonedas = (label, opciones) => {

    const [state,setState]=useState("");
    const SelectMonedas = () => (
        <>
            <Label>{label}</Label>
            <Select value={state}
                    onChange={e=>{setState(e.target.value)}}
            >
                <option value="">Seleccione</option>
                {
                    opciones.map(opcion => (
                        <option
                            key={opcion.id}
                            value={opcion.id}
                        >
                            {opcion.nombre}
                        </option>)
                    )
                }
            </Select>
        </>
    )

    return [state,SelectMonedas]
}

export default useSelectMonedas
