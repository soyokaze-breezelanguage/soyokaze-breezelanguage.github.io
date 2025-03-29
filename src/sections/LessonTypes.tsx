import { Grid, Card, Text, Image, Container, Title } from "@mantine/core";
import { useEffect, useState } from "react";

import dailyConversation from "../assets/images/lesson/dailyConversation.jpg";
import studyAbroad from "../assets/images/lesson/studyAbroad.png";
import children from "../assets/images/lesson/children.jpg";

type Lesson = {
  title: string;
  description: string;
  image: string;
};

export default function LessonTypes() {
  const [lessons, setLessons] = useState<Lesson[]>([]);

  const imageMap: { [key: string]: string } = {
    dailyConversation,
    studyAbroad,
    children,
  };

  useEffect(() => {
    async function fetchLessons() {
      const data = await import("../data/lesson/lesson-type.json");
      setLessons(data.default);
    }

    fetchLessons();
  }, []);

  return (
    <Container>
      <Title order={1} ta="center" m={"xl"}>
        レッスン概要
      </Title>
      <Grid gutter="lg">
        {lessons.map((lesson, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
            <Card shadow="sm" padding="lg" radius="lg" withBorder>
              <Card.Section>
                <Image
                  src={imageMap[lesson.image]}
                  alt={lesson.title}
                  height={120}
                  fit="cover"
                />
              </Card.Section>
              <Text
                fw={700}
                size="lg"
                style={{ marginTop: "10px", marginBottom: "5px" }}
              >
                {lesson.title}
              </Text>
              <Text size="sm" c="dimmed" style={{ marginBottom: "5px" }}>
                {lesson.description}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <Title order={3} mt={40}>
        オンラインレッスン
      </Title>
      <Text mt={10} mb={10}>
        直接センターにお越しいただかなくてもレッスンを受けていただけるので、遠方の生徒様にもご利用いただいております。オンラインでの無料体験レッスンも随時受け付けておりますので、お気軽にお試しください。
      </Text>
      <Text>形式：プライベートレッスン‐随時開講可能</Text>
      <Text>日時：要相談</Text>
      <Text>料金：下記の料金表のとおり</Text>
      <Text>
        教材：生徒様とご相談の上、教材を決めさせていただき、発送いたします。
      </Text>
      <Text>お支払い方法：銀行振り込み等</Text>
    </Container>
  );
}
