import React from 'react';
import Map from '../../components/Map/Map.js';
import './Hero.scss';
// import Image from '../assets/plot_barriers_on.png';

class Hero extends React.Component {
    render() {
        return (
            <>
                <section className="main__hero">
                        <Map />
                        
                    <div>
                        {/* <img src={Image} alt="image"></img> */}
                        </div>
                        <div className="main__hero-buttons">
                            <button> Secuirty</button>
                            <button> Barriers</button>
                        </div>
                </section>
            </>
        );
    }
}
export default Hero;
