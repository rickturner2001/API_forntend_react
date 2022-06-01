const cardContainer = (props) =>{

    return (
        <div className="card">
            {   props.title ?
                <header className="card-header has-text-centered">
                    <p className='card-header-title has-text-centered'>{props.title}</p>
                </header> :
                null
            }
            <div className="card-content">
                <div className="content">
                    {props.children}
                </div>
            </div>

        </div>
    )
}

export default cardContainer