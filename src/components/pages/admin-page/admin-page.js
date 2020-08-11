import React, { Component } from 'react'
import { uploadFiles } from '../../../services/storage-api-service'
import { resizeImage } from '../../../services/resize-image'
import './admin-page.css'
import PhotoSlider from '../../photo-slider/photo-slider'

class AdmiPage extends Component {

    state = {
        selectedPics: null,
    }

    fileHandler = (e) => {
        const arr = [...e.target.files]
        const selectedPics = []
        arr.map(img => resizeImage(img).then(res=> selectedPics.push(res)))

        this.setState({ selectedPics })
    }

    uploadHandler = () => {
        if(this.state.selectedPics){
            uploadFiles(this.state.selectedPics) 
        } 
    }

    render() {
        return (
            <div className="AdminPage">
                <div className="card file-content">
                    <input type="file" className="input" name="selectedPics" onChange={this.fileHandler} multiple />
                    <button className="btn btn-dark" onClick={this.uploadHandler}>Upload</button>
                </div>
                <PhotoSlider editable={ true } />
            </div>
        )
    }
}

export default AdmiPage


    

