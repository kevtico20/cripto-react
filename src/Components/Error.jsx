import styled from "@emotion/styled"
const Parrafo=styled.p`
   color: #fff;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
    background-color: #c52121;
    font-family: 'Lato',sans-serif;
    border-radius: 13px;
    padding: 12px 0;
`

const Error = ({children}) => {
  return (
    <div>
      <Parrafo>{children}</Parrafo>
    </div>
  )
}

export default Error
