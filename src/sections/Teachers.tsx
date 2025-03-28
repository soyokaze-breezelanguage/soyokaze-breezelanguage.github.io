import { useEffect, useState } from "react";
import {
  Container,
  Title,
  Grid,
  Card,
  Text,
  Avatar,
  Group,
} from "@mantine/core";

import sai from "../assets/images/teachers/sai.jpg";
import miyake from "../assets/images/teachers/miyake.jpg";

type Teacher = {
  name: string;
  position: string;
  bio: string;
  image?: string;
};

export default function Teachers() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const imageMap: { [key: string]: string } = {
    sai,
    miyake,
  };

  useEffect(() => {
    async function fetchTeachers() {
      const data = await import("../data/teachers/teachers.json");
      setTeachers(data.default);
    }

    fetchTeachers();
  }, []);

  return (
    <Container size="md" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} ta="center" mb="xl">
        講師紹介
      </Title>

      <Grid gutter="lg">
        {teachers.map((teacher, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Group align="center" justify="center" mb="md">
                <Avatar
                  src={teacher.image ? imageMap[teacher.image] : undefined}
                  size={250}
                  radius="xl"
                />
              </Group>
              <Title order={3} mb={5}>{teacher.name}</Title>
              <Text size="sm" c="dimmed" mb="sm">
                {teacher.position}
              </Text>
              <Text size="md">{teacher.bio}</Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
