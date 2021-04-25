import React, { FC, useState } from "react";
import TextInputLogin from "../../Common/LoginInput";
import TextInputPassword from "../../Common/PasswordInput";
import style from "./RegistarionPageForm.module.scss";




// const CheckLogin: FC = (login) =>{
//     const logins = login;
//     console.log(login);
//     return(
//         <div>
//         {logins ?
//         <div>Логин введен</div>
//         :
//         <div>Введите пожалуйста логин</div>
            
//         }
//         </div>
//     )
// }

// const CheckPassword: FC = () =>{
//     const [password, setPassword] = useState<string>("1");
//     return(
//         <div>
//         { password   ?
//         <div>Пароль введен</div>
//         :
//         <div>Введите пожалуйста пароль</div>
            
//         }
//         </div>
//     )
// }



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