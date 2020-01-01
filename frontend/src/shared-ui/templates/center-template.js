import React from 'react'
import styled from 'styled-components'

const CenterTemplate = ({ children }) => {
    return <CenterContent>{children}</CenterContent>
}

const CenterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width:100%;
`

export { CenterTemplate }
