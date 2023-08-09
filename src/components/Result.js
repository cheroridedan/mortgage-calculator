import { Stack, Typography } from '@mui/material';
import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const result = ({ data }) => {

  const { downPayment, homeValue, loanAmount, loanTerm, intrestRate } = data;

  const totalLoanMonths = loanTerm * 12;
  const interestPerMonth = intrestRate / 100 / 12;

  const monthlyPayment = (
    loanAmount *
    interestPerMonth *
    (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1)

  const totalIntrestGenerated = monthlyPayment * totalLoanMonths - loanAmount

  const pieChartData = {
    labels: ["Princple", "Interst"],
    datasets: [
      {
        label: 'Ratio of Principle and Intrest',
        data: [homeValue, totalIntrestGenerated],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };


  return (
    <Stack gap={4}>
      <Typography textAlign='center' variant='h5'>
        Monthly Payment: $ {monthlyPayment.toFixed(2)}
      </Typography>

      <Stack direction="row" justifyContent="center">
        <div>
          <Pie data={pieChartData} />
        </div>

      </Stack>


    </Stack>
  );
};

export default result