const Tag = (props) =>{

    const classes = "tag " + (props.className ? props.className : null)
    return(
        <span className={classes}>{props.text}</span>
    )
}

export default Tag