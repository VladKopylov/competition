import React from 'react'
import { enGB } from 'date-fns/locale'
import { DatePicker as DPicker } from 'react-nice-dates'
import 'react-nice-dates/build/style.css'

function DatePicker({ date, handleChange }) {
    return (
        <DPicker date={date} onDateChange={handleChange} locale={enGB}>
            {({ inputProps, focused }) => (
                <input
                    className={'input' + (focused ? '-focused' : '')}
                    {...inputProps}
                />
            )}
        </DPicker>
    )
}

export { DatePicker }
