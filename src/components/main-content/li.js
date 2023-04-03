import React from 'react';
import "./main.css"

class LiComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: false
        }
    }

    render() {

        const {item, categoriesChose, currentData} = this.props
        const {style} = this.state
        const sty = currentData.includes(item)

        return (
            <li key={item.id}>
                <div className="card text-center">
                    <img className="card-img" src={require(`../../images/${item.symbol_img}`)}
                         alt={item.symbol_title}
                         // style={{opacity: !sty ? '0.2' : ''}}
                         data-id={item.id}/>
                    <img className={`card-img__success ${style ? 'd-block' : ''}`}
                         src={require('../../images/success.png')}/>
                    <img className={`card-img__error`}
                         src={require('../../images/error-img.png')}/>
                </div>
            </li>

        );
    };
}

export default LiComponent;