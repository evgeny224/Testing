import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";




const HeaderComponent: FC = () =>{
    return(
        <header className={style.list}>
                <div>Логотип</div>
                <div>Список</div>
            <Link to="/auth">
                <div>Авторизация</div>
            </Link>
            <Link to="/">
                <div>Регистрация</div>
            </Link>
        </header>
    )
}



export default  HeaderComponent;