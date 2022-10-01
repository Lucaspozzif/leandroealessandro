import { SignInButton } from "./signInButton";

import '../Style/signInButton.css'
import { useState } from "react";
import { NameInput } from "./nameInput";
import { BlurButton } from "../../../Components/Buttons/blurButton";

export function LoginForm() {
    const [logged, setLogged] = useState(false)
    return (
        <>
            {
                logged ?
                    <SignInButton />
                    :
                    <NameInput />
            }

            <BlurButton active={true} text={'Continuar'} />
        </>
    )
}