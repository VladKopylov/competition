import React from 'react'
import styled from 'styled-components'

const Field = ({ label, component, error }) => {
    return (
        <FieldContainer>
            {label && <Label>{label}</Label>}
            {component}
            {error && <Error>{error}</Error>}
        </FieldContainer>
    )
}

const FieldContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
`

const Label = styled.label`
    margin-bottom: 10px;
`

const Error = styled.label`
    font-size: 13px;
    color: #dd3030;
`

export { Field }
