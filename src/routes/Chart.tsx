import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from 'react-apexcharts';

interface IHistorical {
    time_open: string;
    time_close: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
}

function Chart({coinId}:ChartProps){
    const {isLoading, data} = useQuery<IHistorical[]>(
        ['ohlcv', coinId],
         () => fetchCoinHistory(coinId),
         {
             refetchInterval: 10000
         }
         )
    return (
        <div>{isLoading 
            ? "Loading chart..." 
            : <ApexChart 
                type="line"
                series={[
                    {
                        name: 'Price',
                        data: data?.map(price => price.close),
                    },
                ]}
                options={{
                    theme:{
                        mode: "dark"
                    },
                    chart:{
                        height: 300, 
                        width: 500,
                        toolbar: {
                            show: false
                            },
                            background: "transperent"
                        },
                    grid: {
                        show: false
                    },
                    stroke: {
                        curve: 'smooth',
                        width: 5,
                    },
                    yaxis: {
                        show: false
                    },
                    xaxis: {
                        labels: {
                            show: false
                        },
                        axisTicks: {
                            show: false
                        },
                        axisBorder: {
                            show: false
                        },
                        type: 'datetime',
                        categories: data?.map(price => price.time_close)
                    },
                    fill: { 
                        type: 'gradient', 
                        gradient: {gradientToColors: ['#2ecc71'], stops: [0, 100]}
                    },
                    colors: ['#ecf0f1'],
                    tooltip: {
                        y: {
                            formatter: (value) => `$ ${value.toFixed(2)}`
                        }
                    }
                    }} 
                />}
        </div>
        )
}

export default Chart;