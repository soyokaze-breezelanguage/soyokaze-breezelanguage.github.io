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

type NewsItem = {
  date: string;
  tag: string;
  status: string;
  title: string;
  content: string;
  id: string;
};

export default function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNews() {
      const data = await import("../data/news/news.json");
      setNewsItems(data.default);
    }

    fetchNews();
  }, []);

  const handleCardClick = (id: string) => {
    navigate(`/news/${encodeURIComponent(id)}`);
  };

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} ta="center" m="xl">
        お知らせ
      </Title>

      <Grid gutter="lg">
        {newsItems.map((item, index) => (
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
