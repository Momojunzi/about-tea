import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import MenuBtn from '../menuBtn/menuBtn';
import menuBtnData from '../../data/menuBtnData';


class MenuButtons extends Component {
    render() {

        const styles = StyleSheet.create({
            menuBox: {
                paddingTop: '3%',
                paddingBottom: '3%',
                height: '84vh',
                backgroundColor: '#EFEAE0'
            }
        })

        return(
            <div className={`container-fluid ${css(styles.menuBox)}`}>
                {menuBtnData.map(item => <MenuBtn text={item.btnText} bgColor={item.bgColor} btnLink={item.linkAddr} txtColor={item.txtColor} />)}
            </div>
        )
    }
}



export default MenuButtons; 