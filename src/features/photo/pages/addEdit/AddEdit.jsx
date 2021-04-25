import React from 'react'
import Banner from '../../../../components/banner/Banner'
import PhotoForm from '../../components/PhotoForm/PhotoForm'
import ORANGE_BG from '../../../../assets/images/orange-bg.jpg'

function AddEdit() {
    return (
        <div className="photo-edit">
           <Banner title="Pick your amazing photo" backgroundUrl={ORANGE_BG}/>

           <div className="photo-edit__form">
               <PhotoForm/>
           </div>
        </div>
    )
}

export default AddEdit;