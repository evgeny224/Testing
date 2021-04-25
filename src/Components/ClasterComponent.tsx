import React from "react";
import style from "./ClasterComponent.module.scss"


interface IProps{
    data?:string;
}

interface IState{
    click: number;
}


class ClasterComponent extends React.Component <IProps, IState>{
    constructor(props: IProps){
        super(props);
        this.state  = {click: 0};
    }

    handleClick = () =>{
        const {click} = this.state;
        this.setState({click: click + 1});
    }

    superHandleClick = () => {
        const {click} = this.state;
        this.setState({click: click - 1});
    }

    render(){
        const {data} = this.props;
        const {click} = this.state;
        return(
            <>
                <h1>Мой тестовый компонент</h1>
                <h1>{data}</h1>
                <br />
                <h1 className={style.result}>{click}</h1>
                <br />
                <button type="button" onClick={this.handleClick} className={style.button_plus}>Прибавить</button>
                <button type="button" onClick={this.superHandleClick} className={style.button_minus}>Вычесть</button>
            </>
        )
    }
}

export default ClasterComponent;