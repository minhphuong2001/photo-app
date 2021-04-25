import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'reactstrap'
import Banner from '../../../../components/banner/Banner'
import Images from '../../../../constants/image'
import PhotoList from '../../components/PhotoList/PhotoList'

export default function index() {

    return (
        <div className="photo-main">
            <Banner title="Your awesome photos" backgroundUrl={Images.PINK_BG}/>

            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>

                <PhotoList/>
            </Container> 
        </div>
    )
}
