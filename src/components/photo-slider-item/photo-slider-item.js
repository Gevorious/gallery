import React from 'react'
import './photo-slider-item.css'


const PhotoSliderItem = ({ pos, image, deletePhoto, editable }) => {

    const url = image ? image.url : ''
    const name = image ? image.name : ''
    const removeBtnDisplay = editable ? "inline-block" : "none"
    return (
        <div className="PhotoSliderItem" style={{left: `${pos}%`}} >
            <img alt="" src={url} />
            <i className="fa fa-times" style={{display: removeBtnDisplay}} onClick={()=>deletePhoto(name)} />
        </div>
    )
}

export default PhotoSliderItem
