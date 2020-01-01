import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.background};
    padding: 10px;
    box-shadow: 0 0.6rem 1rem rgba(36, 37, 38, 0.08);
`

Card.defaultProps = {
    background: 'white',
}
