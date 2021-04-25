import React, { FC } from "react";
import style from "./Header.module.scss";




const HeaderComponent: FC = () =>{
    return(
        <header className={style.list}>
            <div>Logo</div>
            <div>Spisok</div>
            <div>UserInfo</div>
            <div>Info</div>
        </header>
    )
}

// class HeaderComponent extends React.PureComponent {
//     render(){
//         return(
//             <header className={style.list}>
//                 <div>Logo</div>
//                 <div>Spisok</div>
//                 <div>UserInfo</div>
//                 <div>Info</div>
//             </header>
//         )
//     }
// }

export default  HeaderComponent;