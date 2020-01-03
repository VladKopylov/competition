export const playerValidation = values => {
    const { firstName, lastName } = values
    let errors = {}
    const hasNumber = /\d/

    if (firstName.length <= 2)
        errors = {
            ...errors,
            firstName: 'First name must contain at least 3 characters',
        }
    if (lastName.length <= 1)
        errors = {
            ...errors,
            lastName: 'Last name must contain at least 2 characters',
        }
    if (!firstName) errors = { ...errors, firstName: 'First name is required' }
    if (!lastName) errors = { ...errors, lastName: 'Last name is required' }
    if (hasNumber.test(firstName))
        errors = { ...errors, firstName: "First name can't contain numeric" }
    if (hasNumber.test(lastName))
        errors = { ...errors, lastName: "Last name can't contain numeric" }
    return errors
}
