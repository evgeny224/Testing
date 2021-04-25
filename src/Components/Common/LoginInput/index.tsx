import React, { FC } from "react";
import style from "./LoginInput.module.scss"

interface IProps{
    setLogin:any;
}

const TextInputLogin: FC<IProps> = (props: IProps) =>{
const { setLogin } = props;

    return(
        <div>
            <h4 className={style.login}>Логин</h4>
            <input type="text" 
            className={style.inputLogin} 
            onChange={(e)=>setLogin(e.currentTarget.value) } />
        </div>
    )
}

export default TextInputLogin;