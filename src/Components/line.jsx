import '../Style/line.css'
export function Line(props) {
    const dark = props.dark
    return(
        <div className={"line "+(dark?'dark':'light')}></div>
    )
    
}