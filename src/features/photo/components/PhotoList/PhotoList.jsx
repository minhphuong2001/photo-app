import React from 'react'
import PhotoCard from '../PhotoCard/PhotoCard'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'

PhotoList.propTypes = {
    photoList: PropTypes.array
}

PhotoList.defaultProps = {
    photoList: []
}

export default function PhotoList(props) {
    const {photoList} = props;

    return (
        <Row>
            {photoList.map((photo) => (
                <Col key={photo.title}>
                    <PhotoCard
                        photo={photo}
                    />
                </Col>
            ))}
        </Row>
    )
}
