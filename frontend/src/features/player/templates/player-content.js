import React from 'react'
import styled from 'styled-components'

import { CreatePlayerForm } from '@features/player/'
import { MainTemplate, CenterTemplate } from '@ui/templates'

const PlayerContent = () => {
    return (
        <MainTemplate>
            <CenterTemplate>
                <CreatePlayerForm />
            </CenterTemplate>
        </MainTemplate>
    )
}

export { PlayerContent }
