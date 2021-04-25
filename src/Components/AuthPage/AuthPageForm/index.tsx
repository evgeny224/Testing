import React, { FC, useState } from "react";
import TextInputLogin from "../../Common/LoginInput";
import TextInputPassword from "../../Common/PasswordInput";
import style from "./AuthPageForm.module.scss"


const AuthForm: FC = () => {
    const[login, setLogin] =  useState<string>("");
    const[password, setPassword] = useState<string>("");
    const [isFormOpen, setFormOpen] = useState<boolean>(false);
    console.log(login, "user login");
    console.log(password, "user passeord");

    return(
            <div className={style.form}>
                <h2>Авторизация</h2>
                <button type="button" onClick={()=>setFormOpen(!isFormOpen)}>
                    {isFormOpen ? "Скрыть" : "Показать"}
                </button>
                    {isFormOpen && (
                        <>
                            <TextInputLogin setLogin={setLogin} />
                            <TextInputPassword setPassword={setPassword} />
                        </>
                    )}
            </div>
    )
}

export default AuthForm;