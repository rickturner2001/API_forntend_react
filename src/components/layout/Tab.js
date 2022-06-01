import {useState} from "react";

const Tab = (props) =>{

    const [isActive, setActive] = useState(null)

    const classes = "tabs is-full-width" + (props.className ? props.className : null)
    const activate = (event) =>{
        setActive(true)
    }

    let first = false
    const firstIsActive = () =>{
        first = true
        return "is-active"
    }

    return (
        <div className={classes}>
            <ul>
                {props.items ? props.items.map((item, index) =>{
                    return(
                        <li onClick={activate} key={index}>
                            <a>{item}</a>
                        </li>
                    )
                }): null}
            </ul>
        </div>
    )
}
export default Tab
