import React from 'react'
import styled from 'styled-components'

import { playerApi } from '@api/player'
import { useForm } from '@hooks/useForm'
import { playerValidation } from '@features/player/utils/'
import { Field, Input, Button, Card, Title } from '@ui'

const CreatePlayerForm = () => {
    const initialValues = { firstName: '', lastName: '' }

    const submitCallback = () => {
        const { firstName, lastName } = inputs
        playerApi.createPlayer({ firstName, lastName })
    }

    const { inputs, handleInputChange, handleSubmit, handleBlur, errors } = useForm(
        initialValues,
        submitCallback,
        playerValidation
    )

    return (
        <Content>
            <Card>
                <Title>New player</Title>
                <Form onSubmit={handleSubmit}>
                    <Col>
                        <Field
                            label="First name"
                            component={
                                <Input
                                    name="firstName"
                                    value={inputs.firstName}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    borderColor={errors.firstName && '#dd3030'}
                                    autoComplete="off"
                                />
                            }
                            error={errors.firstName}
                        />
                        <Field
                            label="Last name"
                            component={
                                <Input
                                    name="lastName"
                                    value={inputs.lastName}
                                    onChange={handleInputChange}
                                    onBlur={handleBlur}
                                    borderColor={errors.lastName && '#dd3030'}
                                    autoComplete="off"
                                />
                            }
                            error={errors.lastName}
                        />
                    </Col>
                    <Col align="flex-end">
                        <Button disabled={Object.keys(errors).length}>Create</Button>
                    </Col>
                </Form>
            </Card>
        </Content>
    )
}

const Form = styled.form`
    margin: 15px 0 20px 0;
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
