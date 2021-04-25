import React, { FC } from "react";
import style from  "./PasswordInput.module.scss";

interface IProps{
    setPassword: any;
}

const TextInputPassword: FC< IProps> = (props: IProps) =>{
    const { setPassword } = props;

    return(
        <>
            <div>
                <h4 className={style.password}>Пароль</h4>
                <input type="password" onChange={(e)=>setPassword(e.currentTarget.value) } />
            </div>
        </>
    )
}

export default TextInputPassword;