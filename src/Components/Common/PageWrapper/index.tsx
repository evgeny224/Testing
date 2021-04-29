import React, { FC } from "react";
import HeaderComponent from "../../Header";
import FooterComponent from "../../Footer";
import style from "./PageWrapper.module.scss";

interface IProps{
    children: React.ReactNode;
}


const PageWrapper: FC <IProps> = ({children}: IProps) => {
    return (
        <div className={style.page_wrapper}>
            <HeaderComponent />
                {children}
            <FooterComponent />
    </div>
    )
}

export default PageWrapper;