import React from 'react';
import Map from '../../components/Map/Map.js';
import './Hero.scss';

class Hero extends React.Component {
    render() {
        return (
            <>
                <section className="main__hero">
                        <Map />
                    <div></div>
                </section>
            </>
        );
    }
}
export default Hero;
