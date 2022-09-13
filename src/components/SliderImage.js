import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Style.css';
import img1 from '../Image/Image.png'
import img2 from '../Image/Image_1.png'
import img3 from '../Image/Image_2.png'
import Card from 'react-bootstrap/Card';
const Example = () => {
    const images = [
        "https://theme.hstatic.net/1000197303/1000796534/14/image_slider-2.jpg?v=2971%22",
        "https://img.freepik.com/premium-vector/men-s-fashion-magazine-template_144648-669.jpg?w=1380",
        "https://www.dmu.ac.uk/webimages/study-images/courses/art-design-and-humanities/undergraduate/fashion-design-ba-degree/fashion-design-img.jpg",
    ];

    return (
        <Card style={{width:"1520px",height:"2798px"}}>
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
        <br/>
        <br/>
        <div>
            <img src={img1}/>
        </div>
        <br/>
        <br/>
        <div>
            <img src={img2}/>
        </div>
        <br/>
        <br/>
        <div>
            <img src={img3}/>
        </div>
        </Card>
    );
};

export default Example;