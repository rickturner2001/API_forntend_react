import {Bar} from "react-chartjs-2";

const BarChart = (props) =>{
        return (
            <div>
                <Bar
                    data={props.data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Changes in the SP500"
                            },
                            scales: {

                            }
                        }
                    }}
                />
            </div>
        );
    };

export default BarChart
