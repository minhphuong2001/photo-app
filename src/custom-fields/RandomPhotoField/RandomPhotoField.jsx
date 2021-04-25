import React from 'react'
import PropTypes from 'prop-types'
import { FormFeedback, Label } from 'reactstrap'
import RandomPhoto from 'components/RandomPhoto/RandomPhoto'
import { handleInputChange } from 'react-select/src/utils'
import { ErrorMessage } from 'formik'

RandomPhotoField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string
}

RandomPhotoField.defaultProps = {
    label: ''
}
export default function RandomPhotoField(props) {
    const {field,form,label} = props;
    const {name,value, onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name];

    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl)
    }
    
    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}

            <RandomPhoto
                name={name}
                imageUrl={value}
                onIamgeUrlChange={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
            />
            
            <div className={showError ? 'is-invalid' : ''}></div>
            <ErrorMessage name={name} componen={FormFeedback}/>
        </FormGroup>
    )
}
