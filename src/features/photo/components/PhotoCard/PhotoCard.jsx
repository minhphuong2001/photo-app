import React from 'react'
import PropTypes from 'prop-types' 
import { Button } from 'bootstrap'

PhotoCard.propTypes = {
    photo: PropTypes.object,
}

PhotoCard.defaultProps = {
    photo: {}
}

export default function PhotoCard(props) {
    const {photo} = props

    return (
        <div className="photo">
            <img src={photo.photo} alt={photo.title}/>

            <div className="photo__overlay">
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__actions">
                    <div>
                        <Button>
                            Edit
                        </Button>
                        <Button>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
