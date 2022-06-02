import {useState} from "react";

const ErrorNotification = (props) => {

    const [isDismiss, setDismiss] = useState(false)
    console.log(!isDismiss)


    return (
        !isDismiss && <div className="notification is-danger has-text-centered">
            <button className="delete"  onClick={() => setDismiss(true)}></button>
            {props.text}
        </div>
    )
}

export default ErrorNotification