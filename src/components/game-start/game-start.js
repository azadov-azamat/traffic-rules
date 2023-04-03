import React from 'react';
import './game.css'

class GameStart extends React.Component {

    constructor() {
        super();
        this.state = {
            category: '',
            timer: ''
        };
    }


    render() {

        const {click, isModal} = this.props
        const {timer, category} = this.state

        return (
            <div className={`game-start ${isModal ? 'd-none' : ''}`}>
                <form className="form">
                    <select id="option" className="select" required
                            onClick={(e) => this.setState({category: e.target.value})}>
                        <option value="" hidden>Kategoriyani tanlang</option>
                        <option value="all">Barcha kategoriyalar</option>
                        <option value="easy">Oson</option>
                        <option value="medium">O'rta</option>
                        <option value="hard">Qiyin</option>
                    </select>
                    <select className="select-time" required onClick={(e) => this.setState({timer: e.target.value})}>
                        <option hidden value="">Vaqtni tanlang</option>
                        <option value="3">3 min</option>
                        <option value="5">5 min</option>
                        <option value="10">10 min</option>
                    </select>
                    <button className="form-btn" type={'button'} onClick={() => click(category, timer)}>O'yin</button>
                </form>
            </div>
        );
    };
}

export default GameStart;