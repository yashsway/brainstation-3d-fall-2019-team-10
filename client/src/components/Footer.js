import React, { Component } from 'react'
import image1 from '../assets/28f0e475-677b-4890-80de-c286fc296358.svg';
import image2 from '../assets/89d57001-e658-4906-918f-9a82415d6f15.svg';
// import image3 from './assets/41393a9c-47e7-41b6-a24d-e84d218eba14.svg';
import image4 from '../assets/d3c55d1d-4e0e-483f-804c-10d52c76e9a1.svg';
import './footer.scss';



export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <img src={image1} alt='' />
                <img src={image2} alt='' />
                <img src={image4} alt='' />
            </div>
        )
    }
}