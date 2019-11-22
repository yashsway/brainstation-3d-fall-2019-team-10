import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Main.scss';

class Main extends React.Component {
    render() {
        return(
            <main className= "main">
                <Hero />
            </main>
        );
    }
}
export default Main;
