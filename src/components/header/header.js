import React from 'react';
import "./main.css"

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        const {timer, title, isModal, count, color} = this.props

        return (
            <header className={isModal ? 'show-modal' : ''}>
                <div className="container">
                    <div className="header d-flex justify-content-between align-items-center w-100 position-fixed">
                        <div
                            className="header-wrapper w-100 d-flex align-items-center justify-content-between text-white">
                            <p>Time: <time className="timer" style={{color: color}}>{timer}</time></p>
                            <h1 className="title">{title}</h1>
                            <p>Count: <span className="count">{count}</span></p>
                        </div>
                    </div>
                </div>
            </header>
        );
    };
}

export default Header;