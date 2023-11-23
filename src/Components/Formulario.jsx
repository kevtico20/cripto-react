import { useState } from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import { useEffect } from 'react'
import Error from './Error'

const InputSubmit = styled.input`
     background-color: #9497FF;
    color: white;
    text-align: center;
    font-size: 20px;
    padding: 10px;
    border: none;
    border-radius: 3px;
    width: 100%;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color .3s ease;
    margin-top: 30px;
    

    &:hover{
        background-color: #767afa;
        cursor:pointer;
    }
`

const Formulario = ({setMonedas}) => {
    const [moneda, SelectMonedas] = useSelectMonedas('Elije tu moneda!', monedas);
    const [criptos, setCriptos] = useState([]);
    const [error, setError] = useState(false);
    const [monedasCripto, SelectCripto] = useSelectMonedas('Elije tu Cripto Moneda', criptos);


    useEffect(() => {

        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

            const respuesta = await fetch(url);
            const resultado = await respuesta.json()
            const arrayCriptos = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos);
        }
        consultarAPI();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if ([monedasCripto, moneda].includes('')) {
            setError(true);
        }
      setTimeout(()=>{
        setError(false);
        setMonedas({moneda,monedasCripto});
      },2000)
    }

    return (
        <>
        {error&& <Error>Todos los campos son obligatorios</Error>}
            <form onSubmit={handleSubmit}>
                <SelectMonedas>
                </SelectMonedas>
                <SelectCripto>

                </SelectCripto>
                <InputSubmit type="submit" value='Cotizar' />
            </form>
        </>
    )
}


export default Formulario
