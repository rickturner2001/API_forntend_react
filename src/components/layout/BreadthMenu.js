import BreadthTable from "../BreadthTable";
import Tab from "./Tab";
import TickerTable from "../TickerTable";
import BubbleChart from "../elements/BubbleChart";
import {Chart as ChartJs} from "chart.js/auto"
import Section from "./Section";
import BarChart from "../elements/BarChart";
import {Fragment} from "react";

const BreadthMenu = (props) =>{
    const classes = "is-hoverable " + props.className

    const tableHeads = Object.keys(props.data.entries)
    const strategies = Object.keys(props.data.entries[tableHeads.at(0)])
    const tableRowsData = tableHeads.map((key, index) =>{
        return [strategies[index], props.data.entries[key][strategies[index]].status]
    })
    const sefiPlottingData = props.data.plotting.breadth.SEFI.values
    const adrPlottingData = props.data.plotting.breadth.ADR.values

    const sefiNegativeData = sefiPlottingData.map((data, index) =>{
        const [ticker, d] = data
        if (d < 0){
            return {x: index, y:d, r:5}
        }
    })


    const sefiPositiveData = sefiPlottingData.map((data, index) =>{
        const [ticker, d] = data
        if (d > 0){
            return {x: index, y:d, r:5}
        }
    })

    console.log(sefiPositiveData)
    console.log(sefiNegativeData)

    const sefiData = {
        labels: sefiPlottingData.map((data, index) =>{
            const [ticker, d] = data
            if (d > 0)
            return ticker
        }),
         datasets: [
             {
            label: 'Positive change',
            data: sefiPlottingData.map((data, index) =>{
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
                <div className='is-flex is-flex-wrap-wrap is-justify-content-space-around slide-to-left'>
                    <BreadthTable className={classes} tableData={{generalTableData: props.data.entries, tableHeads: tableHeads, tableRows: tableRowsData}}></BreadthTable>
                    <BreadthTable className={classes} tableData={{generalTableData: props.data.entries, tableHeads: tableHeads, tableRows: tableRowsData}}></BreadthTable>
                </div>
                <BarChart data={sefiData}></BarChart>
                <BarChart data={negativeSefi}></BarChart>
            </div>
    )
}

export default BreadthMenu