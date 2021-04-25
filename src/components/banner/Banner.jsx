import React from 'react'
import PropTypes from 'prop-types'
import './banner.scss'

Banner.propTypes = {
    title: PropTypes.string,
    backgroundUrl: PropTypes.string
}

Banner.defaultProps = {
    title: ' ',
    backgroundUrl: ' '
}

export default function Banner(props) {
    const {title, backgroundUrl} = props;

    const bannerStyle = backgroundUrl 
    ? {backgroundImage: `url(${backgroundUrl})`} : {}

    return (
        <section className="banner" style={bannerStyle}>
            <h1 className="banner__title">{title}</h1>
        </section>
    )
}
