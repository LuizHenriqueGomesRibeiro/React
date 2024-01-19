import styled from 'styled-components'

export const Button = styled.button`

    width: 100px;
    height: 100px;
    background-color: red;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    
    &:hover{
        background-color: blue;
    }

    & p{
        text-decoration: none;
        font-size: medium;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 700;
    }

    & div{
        width: 20px;
        height: 15px;
        background-color: gray;
    }
`

export const Div = styled.div`
    width: 250px;
    height: 150px;
    background-color: blue;
    border-radius: 25px;
`