import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  Badge,
  Group,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type PlazaItem = {
  date: string;
  tag: string;
  status: string;
  title: string;
  content: string;
  id: string;
};

export default function Plaza() {
  const [plazaItems, setPlazaItems] = useState<PlazaItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlaza() {
      const data = await import("../data/plaza/plaza.json");
      setPlazaItems(data.default);
    }

    fetchPlaza();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/plaza/${encodeURIComponent(id)}`);
  };

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} ta="center" m="xl">
        そよ風の広場
      </Title>

      <Grid gutter="lg">
        {plazaItems.map((item, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
            <Card
              shadow="sm"
              padding="lg"
              radius="md"
              withBorder
              onClick={() => handleCardClick(item.id)}
              style={{ cursor: "pointer" }}
            >
              <Group style={{ marginBottom: "10px" }}>
                <Text size="xs" color="dimmed">
                  {item.date}
                </Text>
                <Badge color="blue" variant="light">
                  {item.tag}
                </Badge>
              </Group>

              <Text fw={700} size="lg" style={{ marginBottom: "10px" }}>
                {item.title}
              </Text>

              <Text
                size="sm"
                color="dimmed"
                lineClamp={2}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
