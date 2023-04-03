import React from 'react';
import "./main.css"
import LiComponent from "./li";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 0,
                    symbol_title: "Yo'l bering",
                    symbol_img: "signs/yol_bering.gif"
                }
            ]
        }
    }

    render() {

        const {
            dataArr,
            isModal,
            errorArray,
            title,
            categoriesFunction,
            decrement,
            increment,
            showModal,
            showModalBtn
        } = this.props
        let {countError, count, elCount} = this.props

        console.log(this.state.data)

        const data = dataArr
        const categoriesChose = (evt) => {

            if (evt.target.matches(".card-img")) {
                let btnId = Number(evt.target.dataset.id);
                let itemId = dataArr.find(item => item.id === btnId);
                if (itemId?.symbol_title === title) {
                    let itemDel = data.findIndex(item => item.id === btnId);
                    data.splice(itemDel, 1);

                    if (data.length === 0) {
                        showModal()
                        document.querySelector(".modal-count").textContent = "To'plagan balingiz: " + count;
                        document.querySelector(".modal-error").textContent = "Qilgan xatolaringiz: " + countError;
                        return;
                    }

                    if (data.length === 0 && errorArray.length === 0) {
                        showModalBtn()
                        document.querySelector(".modal-title").textContent = "Siz hamma savolga to'g'ri javob berdingiz"
                    }

                    categoriesFunction(data);
                    increment()
                } else {
                    decrement()
                    setTimeout(function () {
                        evt.target.parentElement.classList.add("error")
                        setTimeout(function () {
                            evt.target.parentElement.classList.remove("error")
                        }, 100)
                    }, 0)
                    if (!errorArray.includes(itemId)) {
                        errorArray.push(itemId);
                    }
                    elCount = count;
                    if (countError >= 5) {
                        showModal()
                    }
                }
            }
        }

        return (
            <main className={isModal ? 'show-modal' : ''}>
                <section>
                    <div className="container">
                        <ul className="list" onClick={(e) => categoriesChose(e)}>
                            {
                                dataArr?.map(item =>
                                    <LiComponent item={item} categoriesChose={categoriesChose}
                                                 currentData={this.state.data}/>
                                )
                            }
                        </ul>
                    </div>
                </section>
            </main>
        );
    };
}

export default Main;