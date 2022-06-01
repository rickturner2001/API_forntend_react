import {Bubble} from "react-chartjs-2";


const BubbleChart = (props) => {
    return (
        <div>
            <Bubble
                data={props.data}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Changes in the SP500"
                        },
                        scales: {
                            yAxis: [
                                {ticks :{
                                            max: 100,
                                            min: -100
                                }
                                }
                            ]
                        }

                    }
                }}
            />
        </div>
    );
};

export default BubbleChart