import React, { forwardRef } from 'react'
import styled from 'styled-components'

const InputComponent = styled.input`
    padding: 10px;
    font-size: 14px;
    border: 1px solid;
    border-color: ${props => props.borderColor};

    &:focus {
        outline: none;
    }
`

const Input = forwardRef(({ name, styling }, refs) => {
    return <InputComponent ref={refs} name={name} autoComplete="off" {...styling}/>
})

InputComponent.defaultProps = {
    borderColor: '#3abeff',
}

export { Input }
