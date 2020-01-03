import styled from 'styled-components'

export const Input = styled.input`
    padding: 10px;
    font-size: 14px;
    border: 1px solid;
    border-color: ${props => props.borderColor};

    &:focus{
        outline:none;
    }
`

Input.defaultProps = {
    borderColor: '#3abeff',
}
