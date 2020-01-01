import React from 'react'
import styled from 'styled-components'

import { Field, Input, Button, Card, Title } from '@ui'

const CreatePlayerForm = () => {
    return (
        <Content>
            <Card>
                <Title>New player</Title>
                <Form>
                    <Col>
                        <Field
                            label="First name"
                            component={<Input />}
                        />
                        <Field
                            label="Last name"
                            component={<Input />}
                            error="Name too short, please chose another name"
                        />
                    </Col>
                    <Col align="flex-end">
                        <Button>Create</Button>
                    </Col>
                </Form>
            </Card>
        </Content>
    )
}

const Form = styled.form`
    margin: 15px 0 20px 15px;
`
const Content = styled.div`
    width: 25%;
`
const Col = styled.div`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.align};
`

Col.defaultProps = {
    align: '',
}

export { CreatePlayerForm }
