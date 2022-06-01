const Button = (props) =>{
        const classes = "button " + (props.className ? props.className : null)

    return (
        <button onClick={props.onClick} className={classes}>
            <span>{props.text}</span> {props.children}</button>
    )
}

export default Button
