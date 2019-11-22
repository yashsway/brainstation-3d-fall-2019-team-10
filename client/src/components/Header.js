import React, { Component } from 'react'
import logo from './assets/19ece135-2063-4eda-a0fa-62061b1ebcf1.svg'
import './header.scss'

export default class Header extends Component {
    render() {
        return (
            <div className='main-header-container'>
                <div className='logo-container'>
                    <img className='logo' src={logo} alt='' />
                </div>
                <div className='div-right'>
                <div className='about'>
                    <p>About</p>
                </div>
                <div className='publications'>
                    <p>Publications</p>
                </div>
                </div>
            </div>
        )
    }
}
