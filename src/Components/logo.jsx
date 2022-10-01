import '../Style/logo.css'
export function Logo(props) {
    const size = props.size
    const center = props.center
    return (
        <div className={center ? 'center' : ''}>
            <img className={(size == 0 ? 'big' : size == 1 ? 'medium' : 'small')} src={require('../Assets/Logo/whiteLogo.png')} />
        </div>
    )

}