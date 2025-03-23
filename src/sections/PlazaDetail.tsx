import { Container, Title, Text, Badge } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type PlazaItem = {
  id: string;
  date: string;
  tag: string;
  status: string;
  title: string;
  content: string;
};

export default function PlazaDetail() {
  const { id } = useParams<{ id: string }>();
  const [plazaItem, setPlazaItem] = useState<PlazaItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPlaza() {
      const data = await import("../data/plaza/plaza.json");
      const foundItem = data.default.find((item: PlazaItem) => item.id === id);
      setPlazaItem(foundItem || null);
    }

    fetchPlaza();
  }, [id]);

  if (!plazaItem) {
    return (
      <Container>
        <Text>そよ風の広場の記事が見つかりませんでした。</Text>
      </Container>
    );
  }

  return (
    <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} m="xl">
        {plazaItem.title}
      </Title>
      <Text size="sm" color="dimmed">
        {plazaItem.date}
      </Text>
      <Badge color="blue" variant="light">
        {plazaItem.tag}
      </Badge>
      <Text size="md" dangerouslySetInnerHTML={{ __html: plazaItem.content }} />
      <Text
        style={{ cursor: "pointer", color: "blue", marginTop: "20px" }}
        onClick={() => navigate(-1)}
      >
        戻る
      </Text>
    </Container>
  );
}
