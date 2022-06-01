const Section = (props) =>{

    const classes ="section " + (props.className ? props.className : null)
    const childClasses = props.childClassName + " title"
    return (
        <section className={classes}>
            <h1 className={childClasses}>{props.title}</h1>
            {props.children}
        </section>
    )
}

export default Section