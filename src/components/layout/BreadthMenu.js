import BreadthTable from "../BreadthTable";
import {Chart as ChartJs} from "chart.js/auto"
import BarChart from "../elements/BarChart";
import Section from "./Section";


const BreadthMenu = (props) =>{



    const classes = "is-hoverable " + props.className

    const tableHeads = Object.keys(props.data.entries)
    const strategies = Object.keys(props.data.entries[tableHeads.at(0)])

    const tableRowsData = strategies.map((strategy, index) =>{

                  return [strategy, tableHeads.map(ticker =>{
                    return props.data.entries[ticker][strategy].status
                  })]
    })
    console.log("Row data")
    console.log(tableRowsData)

    const sefiPlottingData = props.data.plotting.breadth.SEFI.values
    const adrPlottingData = props.data.plotting.breadth.ADR.values



    const sefiData = {
        labels: sefiPlottingData.map((data) =>{
            const [ticker, d] = data
            if (d > 0)
            return ticker
        }),
         datasets: [
             {
            label: 'Positive change',
            data: sefiPlottingData.map((data) =>{
                const [ticker, d] = data
                if (d > 0)
                return d
            }),
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        },
        ]
    }
    const negativeSefi = {
        labels: sefiPlottingData.map((data) =>{
            const [ticker, d] = data
            if (d <= 0)
                return ticker
        }),
        datasets: [
            {
                label: 'Negative change',
                data: sefiPlottingData.map((data) =>{
                    const [ticker, d] = data
                    if (d <= 0)
                        return d
                }),
                backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                        ],
                borderWidth: 1
            },
        ]

    }

    return (
            <div className='is-flex is-flex-direction-column is-flex-wrap-wrap is-justify-content-space-around slide-to-left'>
                    <BreadthTable className={classes} tableData={{generalTableData: props.data.entries, tableHeads: tableHeads, tableRows: tableRowsData}}></BreadthTable>
                <Section>
                    <BarChart data={sefiData}></BarChart>
                    <BarChart data={negativeSefi}></BarChart>
                </Section>
            </div>

)
}

export default BreadthMenu