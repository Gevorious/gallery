import React from 'react'
import './home-page.css'
import PhotoSlider from '../../photo-slider/photo-slider'

const HomePage = () => {

    return (
        <div className="HomePage">
            <PhotoSlider editable={ false } />
        </div>
    )
}

export default HomePage
