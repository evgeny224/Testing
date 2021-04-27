import React, { FC, useState } from "react";
import TextInputLogin from "../../Common/LoginInput";
import TextInputPassword from "../../Common/PasswordInput";
import style from "./RegistarionPageForm.module.scss";





const RegistratonPage: FC = () => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isFormOpen, setFromOpen] = useState<boolean>(true);
    console.log(login, "user login");
    console.log(password, "user password");

    
    return(
        <div className={style.reg}>
            <h2>Регистрация</h2>
            {isFormOpen ? 
                <div>
                    <TextInputLogin setLogin={setLogin} />
                    <TextInputPassword setPassword={setPassword} />
                    <button type="button" onClick={()=> setFromOpen(!isFormOpen)}>Регистрация</button>
                </div>
                :
                <div>
                    <div>Поздравляю, вы успешно зарегистрировались</div>
                    <button type="button" onClick={()=> setFromOpen(!isFormOpen)}>Назад</button>
                </div>
            }
        </div>
    )
}



export default RegistratonPage;