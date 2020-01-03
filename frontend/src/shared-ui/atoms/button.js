import styled from 'styled-components'

export const Button = styled.button`
    background-color: #3abeff;
    padding: 10px 15px;
    border: none;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #2579a3;
        transition-delay: 0s;
    }

    &:disabled {
        background-color: #93dbff;
        cursor: not-allowed;
    }
`
