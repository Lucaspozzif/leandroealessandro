import { DefaultInput } from "../../../Components/input";
import '../Style/nameInput.css'
export function NameInput(){
    return(
        <>
        <h4 className="lightText100 nameInputText">Como gostaria de ser chamado(a)?</h4>
        <DefaultInput placeholder={'Digite seu nome'}/>
        </>
    )
}