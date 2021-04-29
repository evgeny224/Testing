import React, {FC} from "react";
import AuthForm from "./AuthPageForm";
import PageWrapper from "../Common/PageWrapper";



const AuthFormComponent: FC = () => {
    
        return(
            <div>
                <PageWrapper>
                    <AuthForm />
                </PageWrapper>
            </div>
        )
    }


export default AuthFormComponent;