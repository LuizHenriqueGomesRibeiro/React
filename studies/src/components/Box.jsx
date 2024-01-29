import styled from 'styled-components';

const centralize = `
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Screen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: gray;
`

const Screen_box = styled.div`
    width: 700px;
    height: 500px;
    background-color: #555555;

    ${centralize}
`

export default function Encard() {
    return <Screen>
        <Screen_box></Screen_box>
    </Screen>
}