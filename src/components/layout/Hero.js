const Hero = (props) =>{

    const classes = `hero is-medium ${props.className ? props.className : null}`
    return (
        <section className={classes}>
            <div className="hero-body">
                    {props.title ? <p className="title">{props.title}</p> : null}
                    {props.subtitle ? <p className="subtitle">{props.subtitle}</p> : null}
                {props.children}
            </div>
        </section>
    )
}
export default Hero