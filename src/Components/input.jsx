import '../Style/defaultInput.css'
export function DefaultInput(props) {
    const placeholder = props.placeholder
    return (
        <div className='parentDiv'>
        <input placeholder={placeholder} className="button input" placeholderTextColor='black'></input>
        </div>
    )
}