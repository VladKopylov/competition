import React from 'react'
import styled from 'styled-components'

const MainTemplate = ({ children, header }) => {
    return (
        <MainContainer>
            {header && <Header>{header}</Header>}
            {children}
        </MainContainer>
    )
}

const MainContainer = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #d2fdff;
`

const Header = styled.header``

export { MainTemplate }
