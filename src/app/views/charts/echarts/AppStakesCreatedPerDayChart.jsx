import React from 'react'
import LineChartTotalStakePerDay from './LineChartTotalStakePerDay'
import { useTheme, Box, styled } from '@mui/system'
import ComparisonChartTotalStakePerDay from './ComparisonChartTotalStakePerDay'
import SimpleCard from 'app/components/cards/SimpleCard'
import Breadcrumb from 'app/components/Breadcrumb/Breadcrumb'
import LineChartTotalStakes from './LineChartTotalStakes'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const AppStakesCreatedPerDayChart = () => {
    const theme = useTheme()
    return (
        <Container>
            <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Charts', path: '/charts' },
                        { name: 'AppStakesCreatedPerDayChart' },
                    ]}
                />
            </div>

            <Box sx={{ py: '12px' }} />
            <SimpleCard title="Total Stake Created and Removed per day">
                <LineChartTotalStakePerDay
                    height="350px"
                    color={[
                        theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <Box sx={{ py: '12px' }} />
            <SimpleCard title="Comparison between Stake Created and Stake Removed">
                <ComparisonChartTotalStakePerDay
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        // theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
            <Box sx={{ py: '12px' }} />
            <SimpleCard title="TotalStakes">
                <LineChartTotalStakes
                    height="350px"
                    color={[
                        theme.palette.primary.dark,
                        // theme.palette.primary.main,
                        theme.palette.primary.light,
                    ]}
                />
            </SimpleCard>
        </Container>
    )
}

export default AppStakesCreatedPerDayChart
