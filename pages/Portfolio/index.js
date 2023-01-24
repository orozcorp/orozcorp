import { AdminContainer } from "../../components/context/AdminContext";
import { Heading, Button, Badge, Box } from "@theme-ui/components";
import { gql, useQuery } from "@apollo/client";
import { format_date_month } from "../../lib/helpers/formatters";
import { uniqueId } from "lodash";
import Image from "next/image";
import { rgbDataURL } from "../../lib/helpers/blur";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const QUERY = gql`
  query Query {
    listPortfolio {
      tecUsed
      _id
      client
      description
      endDate
      mainImage {
        _id
        photo
      }
      show
      startDate
      website
      projectName
    }
  }
`;
export default function PortfolioMain() {
  const { data } = useQuery(QUERY);
  const portfolio = (data && data.listPortfolio) || [];
  return (
    <AdminContainer>
      <Heading as="h1">Portfolio</Heading>
      <Button mb={3}>Add Portfolio</Button>
      <Box sx={{ overflowX: "auto" }}>
        <table>
          <thead>
            <tr>
              <th>Time frame</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Website</th>
              <th>TecUsed</th>
              <th>Image</th>
              <th>Client</th>
              <th>Show</th>
            </tr>
          </thead>
          <tbody>
            {portfolio.map((val) => (
              <tr key={val._id}>
                <td>
                  {format_date_month(val.startDate)} -{" "}
                  {format_date_month(val.endDate)}
                </td>
                <td>{val.projectName}</td>
                <td>{val.description}</td>
                <td>{val.website}</td>
                <td>
                  {val.tecUsed.map((tec) => (
                    <Badge key={uniqueId()}>{tec}</Badge>
                  ))}
                </td>
                <td>
                  <Image
                    src={val.mainImage?.photo}
                    width={100}
                    height={100}
                    alt={val.mainImage?._id}
                    style={{ maxWidth: "100%", height: "auto" }}
                    placeholder="blur"
                    blurDataURL={rgbDataURL(178, 238, 230)}
                  />
                </td>
                <td>{val.client}</td>
                <td>
                  <Button>
                    {val.show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Box>
    </AdminContainer>
  );
}
