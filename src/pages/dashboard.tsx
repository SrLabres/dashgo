import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import { theme } from "../styles/theme";

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
})

export default function Dashboard() {

  const options = {
    chart: {
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600]
      },
      axisTicks: {
        color: theme.colors.gray[600]
      },
      categories: [
        '2021-03-18t00:00:00.000Z',
        '2021-03-19t00:00:00.000Z',
        '2021-03-20t00:00:00.000Z',
        '2021-03-21t00:00:00.000Z',
        '2021-03-22t00:00:00.000Z',
        '2021-03-23t00:00:00.000Z',
      ],
    },


    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3
      }
    }
  };

  const series = [
    { name: 'series1', data: [1, 2, 3, 3, 2, 6]}
  ]

  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">

        <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            pb="4"
          >
            <Text fontSize="lg" mb="4" >Inscritos da semana</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
          >
            <Text fontSize="lg" mb="4" >Taxa de abertura</Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}