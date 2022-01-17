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
                type="candlestick"
                series={[
                    {
                        name: 'Price',
                        data: data?.map(price => ({
                                x: price.time_close,
                                y: [price.open.toFixed(3), price.high.toFixed(3), price.low.toFixed(3), price.close.toFixed(3)]
                        }))
                    },
                ]}
                options={{
                    theme:{
                        mode: "dark"
                    },
                        chart: {
                            type: 'candlestick',
                            height: 800,
                            toolbar: {
                                show: false
                                },
                                background: "transperent"
                        },
                        title: {
                            text: 'CandleStick Chart',
                            align: 'left'
                          },
                          xaxis: {
                            labels: {
                                show: false
                            },
                            axisTicks: {
                                show: false
                            },
                            type: 'datetime',
                            tickPlacement: 'on'
                          },
                          yaxis: {
                            tooltip: {
                              enabled: true
                            }
                          },
                        stroke: {
                            width: 3,
                        },
                    }} 
                />}
        </div>
        )
}

export default Chart;