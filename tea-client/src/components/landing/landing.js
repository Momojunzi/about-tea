import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import LandingButton from '../landingButton/landingButton';

class Landing extends Component {
    render () {
        return (
            <div className={css(styles.background)}>
                <div className={`col-8 offset-2 ${css(styles.landingTitle)}`}>
                    <p className={css(styles.titleText)}>T E A</p>
                </div>
                <div className={css(styles.landingButton)}>
                    <LandingButton />
                </div>
            </div>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundImage: 'url("https://res.cloudinary.com/momojunzi/image/upload/v1543181170/Tea/landing-background.jpg")',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw'
    },
    landingTitle: {
        paddingTop: '15vh',

    },
    titleText: {
        fontFamily: '"Philosopher", sans-serif',
        fontWeight: 'bold',
        fontSize: '89px',
        color: '#514941'
    },
    landingButton: {
        paddingTop: '30vh'
    } 

})

export default Landing;