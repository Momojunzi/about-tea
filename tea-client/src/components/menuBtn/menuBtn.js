import React, {Component} from 'react';
import {StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';

class MenuBtn extends Component {

    render(){

        const styles = StyleSheet.create({
            menBtn: {
                paddingTop: '2%',
                marginTop: '3%',
                marginBottom: '5%',
                height: '16.5%',
                backgroundColor: this.props.bgColor,
                borderRadius: '12px'
            },
            btnText: {
                fontFamily: '"Philosopher", sans-serrif',
                fontSize: '45px',
                fontWeight: 'bold',
                color: this.props.txtColor
            }
        })

        return(
            <Link to={this.props.btnLink}>
                <div className={css(styles.menBtn)}>
                    <p className={css(styles.btnText)}>{this.props.text}</p>
                </div>
            </Link>
            
        )
    }
}

export default MenuBtn;