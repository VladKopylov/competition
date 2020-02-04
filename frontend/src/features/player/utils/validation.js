export const playerValidation = () => {
    const firstNameValidation = {
        required: 'This field is required',
        minLength: {
            value: 3,
            message: 'Name is too short',
        },
        maxLength: {
            value: 15,
            message: 'Name is too long',
        },
    }

    const lastNameValidation = {
        required: 'This field is required',
        minLength: {
            value: 3,
            message: 'Name is too short',
        },
        maxLength: {
            value: 15,
            message: 'Name is too long',
        },
    }
    
    return { firstNameValidation, lastNameValidation }
}
