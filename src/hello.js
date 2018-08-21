import React, { Component } from 'react';
import css from './hello.css';
import icon from './icon.png';

class hello extends Component {
    render() {
        return (
            <div>
                <h1 className={css.title}>안녕하세요</h1>
                <img src={icon} />
            </div>
        );
    }
}

export default hello;