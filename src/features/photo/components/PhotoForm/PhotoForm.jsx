import React from 'react'
import { Button, FormGroup } from 'reactstrap'
import PropTypes from 'prop-types'
import { Formik ,Form, FastField} from 'formik'
import InputField from 'custom-fields/InputField/InputField'
import SelectField from 'custom-fields/SelectField/SelectField'
import {PHOTO_CATEGORY_OPTIONS} from 'constants/global'
import RandomPhotoField from 'custom-fields/RandomPhotoField/RandomPhotoField'
PhotoForm.propsTypes = {
    onSubmit: PropTypes.func
}

PhotoForm.defaultProps = {
    onSubmit: null
}

export default function PhotoForm(props) {
    const initialValues = {
        title: ''
    }

    return (
        <Formik
            initialValues={initialValues}
        >
            {formikProps => {
                const {values, errors, touched} = formikProps;
                console.log({values, errors, touched});

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}
                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />                       

                        <FastField
                            name="photo"
                            component={RandomPhotoField}
                            label="Photo"
                        />
                        <FormGroup>
                            <label for="photo">Photo</label>
                            <div>
                                <Button type="button" outline color="primary" onClick={values => console.log('form submit', values)}>
                                    Ramdom a photo
                                </Button>
                            </div>
                        </FormGroup>
                    </Form>
                )
            } }
        </Formik>
    )
}
