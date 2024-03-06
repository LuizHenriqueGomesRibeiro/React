import styled from 'styled-components';
import useCustomHandleChange from '../events/transformation';

const Box = styled.div`
    width: calc(100% - 80px);
    height: calc(100vh - 120px);
    background-color: gray;
    padding: 40px 40px 80px 40px;
`

const Button = styled.button`
    width: 100px;
    height: 20px;
    background-color: white;
`

export default function Component() {

    const handleChange = useCustomHandleChange();

    return <Box>
        <Button onClick={handleChange}>
            hello react!
        </Button>
    </Box>
}