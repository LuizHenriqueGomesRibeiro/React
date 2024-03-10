import { useState } from 'react';
import styled from 'styled-components';

const ModalBackground = styled.div`

`

const ModalBody = styled.div`

`

export const Modal = ({ children }) => {
    const [shouldShow, setShouldShow] = useState(false);

    return <>
        <button onClick={setShouldShow(true)}>Show Modal</button>
        {shouldShow && (
        <ModalBackground onClick={setShouldShow(false)}>
            <ModalBody onClick={e => e.stopPropagation()}>
                <button onClick={setShouldShow(false)}>Hide Modal</button>
                {children}
            </ModalBody>
        </ModalBackground>)}
    </>
}