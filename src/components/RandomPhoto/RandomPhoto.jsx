import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

RandomPhoto.propTypes = {
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    onIamgeUrlChange: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
}

RandomPhoto.defaultProps = {
    name: '',
    imageUrl: '',
    onIamgeUrlChange: null,
    onRandomButtonBlur: null
}

const getRandomImageUrl = () => {
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`
}

export default function RandomPhoto(props) {
    const {name, imageUrl, onIamgeUrlChange, onRandomButtonBlur} = props;

    const handleRandomPhotoClick = () => {
        if(onIamgeUrlChange) {
            const randomImage = getRandomImageUrl();
            onIamgeUrlChange(randomImage)
        }
    }

    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button
                    outline
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                >
                    Random a photo
                </Button>
            </div>

            <div className="random-photo__photo">
                {imageUrl && (
                    <img 
                        src={imageUrl}
                        alt="Ooops ... not found. Please click random again!!!"
                        onError={handleRandomPhotoClick}
                    />
                )}
            </div>
        </div>
    )
}
