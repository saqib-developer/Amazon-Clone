import React, { useState, useEffect } from 'react'
import './ImgSlider.css'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';

export default function ImgSlider(props) {
    const images = props.images;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        const id = setInterval(() => {
            setCurrentImageIndex((currentImageIndex + 1) % images.length);
        }, 4000);
        setIntervalId(id);
        return () => clearInterval(id);
    }, [currentImageIndex, images.length]);

    const handlePrevious = () => {
        setCurrentImageIndex(
            (currentImageIndex + images.length - 1) % images.length
        );
        clearInterval(intervalId);
    };

    const handleNext = () => {
        setCurrentImageIndex((currentImageIndex + 1) % images.length);
        clearInterval(intervalId);
    };

    return (
        <div className="image-slider">
            <img src={images[currentImageIndex]} alt="slider" />
            <div className="prv-nxt-btn">
                <button className="prev" onClick={handlePrevious}><ArrowBackIosRoundedIcon style={{ fontSize: '5em' }} /></button>
                <button className="next" onClick={handleNext}><ArrowForwardIosRoundedIcon style={{ fontSize: '5em' }} /></button>
            </div>
        </div>
    );
}
