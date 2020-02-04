import React from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'

import { playerApi } from '@api/player'
import { playerValidation } from '@features/player/utils/'
import { Field, Input, Button, Card, Title } from '@ui'

const CreatePlayerForm = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = data => {
        console.log(data)
    }

    const { firstNameValidation, lastNameValidation } = playerValidation()
    return (
        <Content>
            <Card>
                <Title>New player</Title>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Col>
                        <Field
                            label="First name"
                            component={
                                <Input
                                    name="firstName"
                                    ref={register(firstNameValidation)}
                                    styling={{
                                        borderColor: errors.firstName && '#dd3030',
                                    }}
                                />
                            }
                            error={errors}
                        />
                        <Field
                            label="Last name"
                            component={
                                <Input
                                    name="lastName"
                                    ref={register(lastNameValidation)}
                                    styling={{
                                        borderColor: errors.firstName && '#dd3030',
                                    }}
                                />
                            }
                            error={errors}
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
