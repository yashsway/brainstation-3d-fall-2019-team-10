import React from 'react';
import Map from '../../components/Map/Map.js';
import './Hero.scss';
import Image from '../../assets/plot_barriers_ON.png';

class Hero extends React.Component {
    render() {
        return (
            <>

            <div>
                <h4>Unfold. The Possibilities.</h4>
                <p className="test">Gain more control over adopting</p><p className="test"> digital technology and unfold infinite possibilities to </p><p className="test">grow your business</p>
            </div>
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
