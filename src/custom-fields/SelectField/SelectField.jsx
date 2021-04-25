import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, FormGroup, Label } from 'reactstrap'
import { ErrorMessage } from 'formik'
import {default as Select} from 'react-select';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool,
    options: PropTypes.array
}

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disable: false,
    options: []
}

function SelectField(props) {
    const {field, form, options, label, placeholder, disable} = props;
    const {name,value, onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    const selectOption = options.find(option => option.value === value)

    const handleSelectOptionChange = (selectOption) => {
        const selectedValue = selectOption ? selectOption.value : selectOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        }
        field.onChange(changeEvent)
    }

    return (
        <FormGroup>
            {label && <Label for={name}>Category</Label>}

            <Select
                id={name}
                name={name}
                onBlur={onBlur}
                value={selectOption}
                onChange={handleSelectOptionChange}

                placeholder={placeholder}
                isDisabled={disable}
                options={options}
                className={showError ? 'is-invalid' : ''}
            />

            <ErrorMessage name={name} component={FormFeedback}/>
        </FormGroup>
    )
}

export default SelectField;
