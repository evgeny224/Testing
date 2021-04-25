import { count } from 'node:console';
import React from 'react'

interface IProps {
    data?: string ;
    counts?:  number;
}

interface IState{
    click: number;
    name: string;
}

class ClassComponent extends React.Component <IProps, IState> {
    constructor(props: IProps){
        super(props);
        this.state = {click: 0, name: "Alex"};
    }

    handleClick = () =>{
        const{click} = this.state;
        this.setState({click: click + 1});
    };

    anotherHandleClick = () => {
        const{click} = this.state;
        this.setState({click: click - 1});
    };

    render(){
        
        const {data, counts} = this.props;
        const{click, name} = this.state
        return (
            <>
            <h1>Привет! Я классовый компонент </h1>
            {data}
            {counts}
            <br />
            <h1>{click}</h1>
            <h1>{name}</h1>
            <button type="button" onClick={this.handleClick}>Plus one</button>
            <button type="button" onClick={this.anotherHandleClick}>Minus one</button>
            </>
        )
}
}

export  default  ClassComponent;