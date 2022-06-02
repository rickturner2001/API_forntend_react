const Hero = (props) =>{

    const classes = `hero is-medium ` + (props.className ? props.className : null)

    console.log("REF TYPE")
    console.log(typeof  props.innerRef)
    return (

        <section className={classes} ref={props.innerRef}>
            <div className="hero-body">
                    {props.title ? <p className="title">{props.title}</p> : null}
                    {props.subtitle ? <p className="subtitle">{props.subtitle}</p> : null}
                {props.children}
            </div>
        </section>
    )
}
export default Hero