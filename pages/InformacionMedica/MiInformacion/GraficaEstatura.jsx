import { gql, useQuery } from "@apollo/client";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box } from "@theme-ui/components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Estatura",
    },
  },
};

const QUERY = gql`
  query CreateEstaturaGraphData($idUser: String!) {
    createEstaturaGraphData(idUser: $idUser) {
      datasets {
        backgroundColor
        borderColor
        data
        label
      }
      labels
    }
  }
`;

export default function GraficasEstatura({ userId }) {
  const { data, error, loading } = useQuery(QUERY, {
    variables: { idUser: userId },
  });
  if (error) {
    console.error(error);
    return <p>Error</p>;
  }
  if (loading) {
    return <p>Cargando...</p>;
  }
  return (
    <Box m={1} sx={{ width: ["100%", "40%"], height: ["400px", "50vh"] }}>
      <Line
        data={data.createEstaturaGraphData}
        options={options}
        type="line"
        height={400}
        width={600}
      />
    </Box>
  );
}
