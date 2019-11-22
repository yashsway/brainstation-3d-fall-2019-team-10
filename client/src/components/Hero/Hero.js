import React from 'react';
import Map from '../../components/Map/Map.js';
import './Hero.scss';
import Image from '../../assets/plot_barriers_ON.png';

class Hero extends React.Component {
    render() {
        return (
            <>
                <section className="main__hero">
                    <Map />
                    <img className="main__hero-img" src={Image} alt="image"></img>
                </section>
                <div className="main__hero-buttons">
                    <button> Secuirty</button>
                    <button> Barriers</button>
                </div>
            </>
        );
    }
}
export default Hero;
