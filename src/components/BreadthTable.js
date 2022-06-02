import Tag from "./elements/Tag";

const BreadthTable = (props) =>{

    const classes = "table has-text-centered is-bordered " + (props.className ? props.className : null)

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
    const tickers = props.tableData.tableHeads
    const strategies = props.tableData.tableRows.map((value, index) =>{
        return value[0]
    })

    const tableHeads = tickers.map((ticker, index) =>{
        return <th className='hes-text-centered' style={{textAlign: 'center'}} key={index}>{ticker}</th>
    })
    const tableRows = props.tableData.tableRows.map((row, index) =>{

        let [strategy, status] = row

        strategy = fixUnderscoredKey(strategy)
        return(
            <tr key={(index + 1) * 2}>
                <td key={index + 1}>
                  <Tag className='is-light' text={strategy}></Tag>
                </td>
                {status.map((stat) =>{
                    // TODO Math.random() questionable choice
                    return <td key={(index + Math.random()) * 100}><Tag className={`is-light ${stat ? "is-primary" : " is-links"}`} text={stat ? "Long" : "Neutral"}></Tag></td>
                })}
            </tr>
        )
    })

    return(
        <table className={classes}>
            <thead>
                <tr className='is-selected has-text-centered'>
                    <th key={1991} className='has-text-centered'>Label</th>
                    {tableHeads}
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
    )
}

export default BreadthTable


