import { DefaultInput } from "../../../Components/input";
import { Line } from "../../../Components/line";

import '../Style/loginText.css'
export function LoginText() {
    return (
        <div className="loginText">
            <Line />
            <div className="textBlock">
                <h2 className="title lightText100">Atendimento é a nossa prioridade!</h2>
                <h6 className="subtitle lightText100">Para isso precisamos te conhecer melhor</h6>
            </div>
            <Line />
        </div>
    )

}