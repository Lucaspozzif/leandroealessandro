import { useState } from "react"

import '../../Style/Buttons/blurButton.css'
export function BlurButton(props) {
    const [active, setActive] = useState(false)
    if (props.active && !active) { setActive(true) }

    const text = props.text
    return (
        < div className="blur" >
            <div className={"button largeButton " + (active ? 'goldenButton' : 'greyButton')}>
                <h1 className="lightText100">{text}</h1>
            </div>
        </div >
    )
}