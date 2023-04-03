import React from "react";
import "./index.css"
import Header from "./components/header/header";
import Main from "./components/main-content/main";
import {roadSymbol} from "./data";
import GameStart from "./components/game-start/game-start";
import Modal from "./components/modal/modal";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            time: 0,
            elCount: 0,
            dataArr: [],
            title: '',
            isModal: false,
            elShowModal: false,
            elShowModalBtn: false,
            errorArr: [],
            countErr: 0,
            count: 0,
            timerColor: ''
        }
    }

    render() {

        let easyArray = roadSymbol.slice(0, 20);
        let mediumArray = roadSymbol.slice(0, 40);
        let hardArray = roadSymbol.slice(0, 70);

        const onSubmit = (category, timer) => {
            if (category !== '' && timer !== '') {
                const time = timer * 60;
                switch (category) {
                    case 'all':
                        this.setState({time: time, dataArr: roadSymbol})
                        categoriesFunction(roadSymbol)
                        break;
                    case 'easy':
                        this.setState({time: time, dataArr: easyArray})
                        categoriesFunction(easyArray)
                        break;
                    case 'medium':
                        this.setState({time: time, dataArr: mediumArray})
                        categoriesFunction(mediumArray)
                        break;
                    case 'hard':
                        this.setState({time: time, dataArr: hardArray})
                        categoriesFunction(hardArray)
                        break;
                }
                startTimer(time)
                this.setState({isModal: true})
            }
        }

        const categoriesFunction = (arr) => {
            const text = arr[Math.floor(Math.random() * arr.length)].symbol_title
            this.setState({title: text})
        }

        const {
            title,
            isModal,
            time,
            dataArr,
            errorArr,
            countErr,
            count,
            elCount,
            elShowModal,
            elShowModalBtn,
            timerColor
        } = this.state

        const startTimer = (duration) => {
            const display = document.querySelector(".timer")
            let timer = duration, minutes, seconds;
            let timerFunction = setInterval(() => {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);
                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
                display.textContent = minutes + ":" + seconds;
                if (--timer < 0) {
                    clearInterval(timerFunction);
                }
                if (timer >= 10) {
                    this.setState({timerColor: "green"})
                } else {
                    this.setState({timerColor: "red"})
                }
                if (timer === 0) {
                    showModal()
                }
            }, 1000);
        }

        const increment = () => {
            this.setState({count: this.state.count + 2, elCount: this.state.count})
        }
        const decrement = () => {
            this.setState({count: this.state.count - 1, countErr: this.state.countErr + 1, elCount: this.state.count})
        }
        const showModal = () => {
            this.setState({elShowModal: !this.state.elShowModal})
        }
        const showModalBtn = () => {
            this.setState({elShowModalBtn: true, elCount: this.state.count})
        }
        const closeModal = () => {
            this.setState({elShowModalBtn: false, elCount: this.state.count})
            window.location.reload();
        }

        return (
            <>
                <Header timer={time} title={title} isModal={isModal} count={count} color={timerColor}/>
                <Main
                    dataArr={dataArr}
                    isModal={isModal}
                    errorArray={errorArr}
                    countError={countErr}
                    count={count}
                    title={title}
                    decrement={decrement}
                    increment={increment}
                    showModal={showModal}
                    categoriesFunction={categoriesFunction}
                    elCount={elCount}
                    showModalBtn={showModalBtn}
                />
                <GameStart click={onSubmit}/>
                <Modal
                    elShowModal={elShowModal}
                    data={errorArr}
                    showModalBtn={showModalBtn}
                    isBtn={elShowModalBtn}
                    closeModal={closeModal}
                />
            </>
        );
    };
}

export default App;
