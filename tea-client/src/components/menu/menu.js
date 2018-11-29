import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import MenuButtons from '../menuButtons/menuButtons'


class Menu extends Component {
    render () {
        return (
            <div>
                <div className={css(styles.topBanner)}></div>
                <MenuButtons />
            </div>
        )
    }
}

const styles = StyleSheet.create({
    topBanner: {
        width: '100vw',
        height: '16vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: 'url(https://res.cloudinary.com/momojunzi/image/upload/v1543028941/Tea/home_banner_2.jpg)',
    }
})

export default Menu;