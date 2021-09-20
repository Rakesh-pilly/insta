// import backimage from './backimage'
import styled from 'styled-components'

export default function IndexLogin(props){

    const Div = styled.div`
    width: 100vw;
    height: 500px;
    background-image :linear-gradient(rgba(255,255,255,.2), rgba(255,255,255,.2)), url("https://static.instahyre.com/images/home/back-image.jpg");
    background-repeat : no-repeat;
    display:grid;
    justify-content: center;
    align-content:center;
    background-size: cover;
    background-position:center center;

    `

    return (
        <Div>{props.children}</Div>

    )
}