import React, { useEffect, useState } from 'react'
import { useTheme } from '@mui/system'
import ReactEcharts from 'echarts-for-react'
import { observer } from 'mobx-react-lite'
import { useStore } from 'app/hooks/useStore'
import { convertToDate } from 'app/utils/convertToDate'
import { ethers } from "ethers";
import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/fr';

const LineChartTotalStakes = observer(({ height, color = [] }) => {

    const dataStore = useStore()
    const theme = useTheme()
    const [ourDays, setOurDays] = useState([]);
    const [totalStakes, setTotalStakes] = useState([]);

    useEffect(() => { 
        const getData = async () => {
            await dataStore.fetchStakesPerDayData() //TODO pass startDate and endDate here as paramters.
            let days = [];
            let totalStakesArr = [];

            for (let index = 0; index < dataStore.stakesPerDayData.length; index++) {
              const element = dataStore.stakesPerDayData[index];
              const newDate = convertToDate(parseInt(element.dayId));
              const convertedTotalStakes = ethers.utils.formatEther(element.totalStake)
              const ourTotalStakes = Number(convertedTotalStakes).toFixed(2)
          
              days.push(moment(newDate).format("L"));
              totalStakesArr.push(ourTotalStakes)
            }
            setOurDays(days)
            setTotalStakes(totalStakesArr)
        }
        getData()
    /* we have to think about putting dataStore in here, 
    in order to check if can change the data live when 
    something new is happening in the blockchain*/
    },[]) 
    const option = {
        grid: {
            top: '10%',
            bottom: '10%',
            left: '5%',
            right: '5%',
        },
        legend: {
            itemGap: 20,
            icon: 'circle',
            textStyle: {
                color: theme.palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        tooltip: {},
        xAxis: {
            type: 'category',
            data: ourDays,
            // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            axisLabel: {
                color: theme.palette.text.secondary,
                fontSize: 14,
                fontFamily: 'roboto',
            },
        },
        yAxis: {
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            splitLine: {
                // show: false
                lineStyle: {
                    color: theme.palette.text.secondary,
                    opacity: 0.15,
                },
            },
            axisLabel: {
                color: theme.palette.text.secondary,
                fontSize: 13,
                fontFamily: 'roboto',
            },
        },
        series: [
            {
                // data: [20, 50, 15, 50, 30, 70, 95],
                data: totalStakes,
                type: 'line',
                stack: 'Total Stakes',
                name: 'Total Stakes',
                smooth: true,
                symbolSize: 4,
                lineStyle: {
                    width: 4,
                },
            },
        ],
    }

    return (
        <ReactEcharts
            style={{ height: height }}
            option={{
                ...option,
                color: [...color],
            }}
        />
    )
})

export default LineChartTotalStakes
