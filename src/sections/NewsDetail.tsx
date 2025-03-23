import { Container, Title, Text, Badge, Flex } from "@mantine/core";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

type NewsItem = {
  id: string;
  date: string;
  tag: string;
  status: string;
  title: string;
  content: string;
};

export default function NewsDetail() {
  const { id } = useParams<{ id: string }>();
  const [newsItem, setNewsItem] = useState<NewsItem | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchNews() {
      const data = await import("../data/news/news.json");
      const foundItem = data.default.find((item: NewsItem) => item.id === id);
      setNewsItem(foundItem || null);
    }

    fetchNews();
  }, [id]);

  if (!newsItem) {
    return (
      <Container>
        <Text>ニュースが見つかりませんでした。</Text>
      </Container>
    );
  }

  return (
    <>
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Title order={1} m="xl">
          {newsItem.title}
        </Title>
        <Text size="sm" color="dimmed">
          {newsItem.date}
        </Text>
        <Badge color="blue" variant="light">
          {newsItem.tag}
        </Badge>
        <Text
          size="md"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />
        <Text
          style={{ cursor: "pointer", color: "blue", marginTop: "20px" }}
          onClick={() => navigate(-1)}
        >
          戻る
        </Text>
      </Container>
      <Flex
        direction="column"
        // style={{ minHeight: "100vh" }}
        justify="flex-end"
      >
        <Footer />
      </Flex>
    </>
  );
}
