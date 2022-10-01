import { BlurButton } from "../../../Components/Buttons/blurButton";
import { Line } from "../../../Components/line";
import { Logo } from "../../../Components/logo";
import { LoginForm } from "../Components/loginForm";
import { LoginText } from "../Components/loginText";

export function Login() {
    return (
        <>
        <Logo size={0} center={true}/>
        <LoginText />
        <LoginForm />
        </>
    )
}