const TickerTable = (props) =>{

    //TODO Re-used
    const fixUnderscoredKey = (key) =>{
        let splitKey = key.split("_")
        let fullKey = ""
        for (let word of splitKey){
            if (word === splitKey[splitKey.length]){
                fullKey += word[0].toUpperCase() + word.substring(1)
            }else {
                fullKey += word[0].toUpperCase() + word.substring(1) + " "
            }
        }
        return fullKey
    }

    const getRowsData = () =>{
        let values = []

        for(let strategy of props.strategies){
           values.push(props.generalData[props.ticker][strategy].values)
        }
        const finalValues = values.map((obj, i) =>{
            return [Object.values(obj), Object.keys(obj)]
        })
        console.log(finalValues)
    }
    getRowsData()

    const classes = "table is-hoverable " + props.className ? props.className : null
    return(
        <table className={classes}>
            <thead>
                <tr>
                    {props.strategies.map((strategy, index) =>{
                        return (
                            <th key={index}>{fixUnderscoredKey(strategy)}</th>
                        )
                    })}
                </tr>

            </thead>
            <tbody>

            </tbody>
        </table>
    )
}

export default TickerTable