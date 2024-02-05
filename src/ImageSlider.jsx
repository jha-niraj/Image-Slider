import { useState } from "react";
import {ArrowBigLeft, ArrowBigRight} from 'lucide-react'
import './image.css';

function ImageSlider({imageUrls}) {
    const [imageIndex, setImageIndex] = useState(0);

    function showPrevImage() {
        setImageIndex(index => {
            if(index === 0) {
                return imageUrls.length - 1;
            } else {
                return index - 1;
            }
        })
    }
    function showNextImage() {
        setImageIndex(index => {
            if(index === imageUrls.length - 1) {
                return 0;
            } else {
                return index + 1;
            }
        })
    }

    return (
        <div style={
            {
                width: "100%", 
                height:"100%",
                position: "relative"
            }}>
            <img src={imageUrls[imageIndex]} className="image-slider-img" alt="First Image" />
            <button className="button" onClick={showPrevImage} style={{left : "0px"}}><ArrowBigLeft /></button>
            <button className="button" onClick={showNextImage} style={{right: "0px"}}><ArrowBigRight /></button>
        </div>
    )
}

export default ImageSlider;