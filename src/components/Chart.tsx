// src/components/BarChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
} from "chart.js";

// 필요한 구성 요소를 Chart.js에 등록합니다.
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

// 차트 데이터 타입
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data: ChartData<"bar", number[], string> = {
  labels,
  datasets: [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};

// 차트 옵션 타입
const options: ChartOptions<"bar"> = {
  plugins: {
    tooltip: {
      enabled: true,
      mode: "index", // 툴팁 모드를 'index'로 설정
      callbacks: {
        label: (context) => {
          let label = context.dataset.label || "";
          if (label) {
            label += ": ";
          }
          if (context.raw !== null) {
            label += new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.raw as number);
          }
          return label;
        },
        title: (context) => `Month: ${context[0].label}`,
      },
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      titleColor: "#ffffff",
      bodyColor: "#ffffff",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const BarChart: React.FC = () => {
  return <Bar data={data} options={options} />;
};

export default BarChart;
