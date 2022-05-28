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

const LineChartTotalStakePerDay = observer(({ height, color = [] }) => {

    const dataStore = useStore()
    const theme = useTheme()
    const [ourDays, setOurDays] = useState([]);
    const [stakeCreatedSum, setStakeCreatedSum] = useState([]);
    const [stakeRemovedSum, setStakeRemovedSum] = useState([]);

    useEffect(() => { 
        const getData = async () => {
            await dataStore.fetchStakesPerDayData()
            let days = [];
            let stakeCreatedSumArr = [];
            let stakeRemovedSumArr = [];
            for (let index = 0; index < dataStore.stakesPerDayData.length; index++) {
              const element = dataStore.stakesPerDayData[index];
              const newDate = convertToDate(parseInt(element.dayId));
              const convertedStakeCreatedSum = ethers.utils.formatEther(element.stakeCreatedSum)
              const ourStakeCreatedSum = Number(convertedStakeCreatedSum).toFixed(2)
              const convertedStakeRemovedSum = ethers.utils.formatEther(element.stakeRemovedSum)
              const ourStakeRemovedSum = Number(convertedStakeRemovedSum).toFixed(2)
          
              days.push(moment(newDate).format("L"));
              stakeCreatedSumArr.push(ourStakeCreatedSum)
              stakeRemovedSumArr.push(ourStakeRemovedSum)
            }
            setOurDays(days)
            setStakeCreatedSum(stakeCreatedSumArr)
            setStakeRemovedSum(stakeRemovedSumArr)
        }
        getData()
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
                data: stakeCreatedSum,
                type: 'line',
                stack: 'Stakes Created',
                name: 'Stakes Created',
                smooth: true,
                symbolSize: 4,
                lineStyle: {
                    width: 4,
                },
            },
            {
                // data: [30, 40, 20, 50, 40, 80, 90],
                data: stakeRemovedSum,
                // data: ourDays,
                type: 'line',
                stack: 'Stakes Removed',
                name: 'Stakes Removed',
                smooth: true,
                color: 'yellow',
                symbolSize: 4,
                lineStyle: {
                    width: 4,
                },
            }
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

export default LineChartTotalStakePerDay
