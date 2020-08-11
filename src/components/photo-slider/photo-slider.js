import React, { Component } from 'react'
import './photo-slider.css'
import PhotoSliderItem from '../photo-slider-item'
import { getFiles, deleteFile } from '../../services/storage-api-service'

class PhotoSlider extends Component {

    getPhotos = () => {
        const files = getFiles()
        return files
     }

     deletePhoto = async (name) => {
         deleteFile(name).then( ()=>{
                this.getPhotos().then(res=>{
                this.getPoisitions(res.length) 
                this.setState({images: res})
            }) 
        }    
        )
     }

     getPoisitions = (length) => {
        let pos = window.innerWidth<480 ? 100 : 20
        const arr = []

        for(let i=0; i<length; i++){
            arr.push(i*pos)
        }
        this.setState({positions: arr}) 
    } 

    state = {
             positions: [],
             images: [],
             speed: 100
            }
            
    componentDidMount(){
        this.getPhotos().then(res=>{
                this.getPoisitions(res.length) 
                this.setState({images: res})
            }
        )      
    }
            
    onClick = (direction) => {
   
        if(direction !== undefined){
            let speed = 100
            const arr = [ ...this.state.positions ]

            if(arr[0] >= 0 && direction > 0 ){
                return
            }
            if(arr[arr.length-1] <100 && direction < 0 ){
                return
            }
           
           if(window.innerWidth>480) {
                if(arr[0]>=-80 && direction>0){
                speed = -arr[0]
                }

                if(arr[arr.length-1]<180 && direction<0){
                speed = (arr[arr.length-1]-80)
                }
            }
           
            const newArr = arr.map(el => {
               return el = el + speed*direction
            } )
             
            this.setState({ positions: newArr })
        }
    }

    render (){
        const { positions, images } = this.state
        return (
                <div className="PhotoSlider" > 
                 <i className="fa fa-angle-left" aria-hidden="true"
                    id="leftBtn" 
                    onClick={ () => this.onClick(1) }>
                </i>

                    <div className="images">
                        { positions.map((pos, idx) => 
                        <PhotoSliderItem 
                            key={ idx }
                            editable = {this.props.editable} 
                            pos={ pos } 
                            image={ images[idx] }
                            deletePhoto={ this.deletePhoto }
                            />) }
                    </div> 
                    
                    <i className="fa fa-angle-right" aria-hidden="true"
                        id="rightBtn" 
                        onClick={ () => this.onClick(-1) }>
                    </i>

                   
                </div>
            )
    } 
}

export default PhotoSlider

