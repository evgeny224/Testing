import React from "react";
import style from "./MainPage.module.scss";
import HeaderComponent from "../Header";
import AuthForm from "../AuthPage/AuthPageForm";
import RegistratonPage from "../RegistrationPage/RegistarionPageForm";



class MainPageComponent extends React.PureComponent {
    render(){
        return(
            <div className={style.main_page_wrapper}>
                <HeaderComponent />
                {/* <AuthForm /> */}
                <RegistratonPage />
            </div>
        )
    }
}

export default MainPageComponent;