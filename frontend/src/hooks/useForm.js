import { useState } from 'react'
import * as R from 'ramda'

export const useForm = (initialValue, submitCallback, validateCallaback) => {
    const [inputs, setInputs] = useState(initialValue)
    const [errors, setErrors] = useState({})

    const handleSubmit = event => {
        if (event) {
            event.preventDefault()
        }
        const e = validate()
        if (R.isEmpty(e)) submitCallback()
    }

    const validate = () => {
        let e = validateCallaback(inputs)
        setErrors(e)
        return e
    }

    const handleInputChange = event => {
        event.persist()
        const { name, value } = event.target

        setInputs(inputs => ({ ...inputs, [name]: value }))
    }

    const handleBlur = () => {
        if (!R.isEmpty(errors)) validate()
    }

    return { handleSubmit, handleInputChange, handleBlur, inputs, errors }
}
