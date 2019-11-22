import React, { Component } from 'react'
import './provincecontent.scss'
import torontoimg from '../assets/image.png'
import quebecimg from '../assets/imageQ.png'

export default class ProvinceContent extends Component {
    state={
        data: []
    }

    render() {
        return (
            <>
            <div className='main-container'>
                <div className='title-img-container'>
                    <div className='title-container'>
                    <h1 className='title'>Central Canada</h1>
                    </div>
                    <div className='img-container'>
                    <img className='toronto-img' src={torontoimg} alt='' />
                    </div>
                </div>
                <div className='province-description-title-container'>
                <div className='province-container'>
                <p>Ontario</p>
                </div>
                <div className='province-description'>
                <p>Canada’s most populous province is also the home of the country’s capital. Key business sectors are  high tech, agriculture, manufacturing, energy and mining. With the decrease in manufacturing jobs and a growing tech sector, the capital of the province, Toronto, created more tech jobs than Silicon Valley in 2018.</p>   
                </div>
                </div>
            </div>
            <div className='main-container quebec-float'>
                <div className='title-img-container'>
                    <div className='title-container'>
                    <h1 className='title-quebec'>Central Canada</h1>
                    </div>
                    <div className='img-container'>
                    <img className='toronto-img' src={quebecimg} alt='' />
                    </div>
                </div>
                <div className='province-description-title-container'>
                <div className='province-container province-container-quebec'>
                <p>Quebec</p>
                </div>
                <div className='province-description'>
                <p className='quebec-text'>Partner in the original move for confederation, French speaking Quebec is a province responsible for nearly 20% of the GDP of Canada. The capital, Quebec City, was in the top ten worldwide for its diverse economic base in 2016.</p>   
                </div>
                </div>
            </div>
            
            </>
        )
    }
}
