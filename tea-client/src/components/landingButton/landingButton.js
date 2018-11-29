import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { StyleSheet, css } from 'aphrodite';

class LandingButton extends Component {
    render() {
        return(
            <div>
                <Link to="/menu/" className={css(styles.langingLink)}>Enter</Link>    
            </div>
        )
    }
}

export default LandingButton;

const styles = StyleSheet.create({
    langingLink: {
        fontFamily: "'Roboto', sans-serif",
        fontSize: '48px',
        textDecoration: 'none',
        color: '#514941'
    }
})