import React from 'react';
import "./main.css"

class Modal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const {elShowModal, showModalBtn, isBtn, data, closeModal} = this.props

        return (
            <div className={`modal ${elShowModal ? 'show-modal' : ''}`}>
                <div className="modal-card">
                    <h2 className="modal-title"></h2>
                    <p className="modal-count"></p>
                    <p className="modal-error"></p>
                    <ul className="modal-list">
                        {
                           isBtn && data?.map(item =>
                                <li key={item.id}>
                                    <div className="card">
                                        <img className="card-img" src={require(`../../images/${item.symbol_img}`)}
                                             alt={item.symbol_title}
                                             data-id={item.id}/>
                                        <h2 className="card-title">{item.symbol_title}</h2>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                    <button className={`modal-btn ${isBtn ? 'd-none' : ''}`} onClick={showModalBtn}>siz topa olmagan
                        belgilar
                    </button>
                    <button className="modal-close" onClick={closeModal}>X</button>
                </div>
            </div>
        );
    };
}

export default Modal;