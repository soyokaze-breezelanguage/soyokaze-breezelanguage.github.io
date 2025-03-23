import { Title, Table, Loader, Center, Container, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function About() {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    async function fetchAbout() {
      try {
        const data = await import("../data/about/about.json");
        setAboutData(data.default);
      } catch (error) {
        console.error("Error loading about.json:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchAbout();
  }, []);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <div>
      <Title order={1} align="center" mb="xl" m={40}>
        会社情報
      </Title>
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Table>
          <Table.Tbody>
            {aboutData &&
              Object.entries(aboutData).map(([key, value]) => (
                <Table.Tr key={key}>
                  <Table.Td style={{ fontWeight: "bold", width: "30%" }}>
                    {key}
                  </Table.Td>
                  <Table.Td>{value}</Table.Td>
                </Table.Tr>
              ))}
          </Table.Tbody>
        </Table>
        <Text
          style={{ cursor: "pointer", color: "blue", marginTop: "20px" }}
          onClick={() => navigate(-1)}
        >
          戻る
        </Text>
      </Container>
    </div>
  );
}
