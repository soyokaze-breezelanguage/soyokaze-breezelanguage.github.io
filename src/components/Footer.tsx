import { Box, Container, Text, Center, Title, Anchor } from "@mantine/core";

export default function Footer() {
  return (
    <Box
      bg="#98dbce"
      sx={{
        padding: "20px 0",
        width: "100%",
        marginTop: "auto",
      }}
    >
      <Container mb={20}>
        <Center>
          <div style={{ textAlign: "center" }}>
            <Title order={2} align="center" mt={"xl"} mb={"sm"} c={"white"}>
              語学センター・留学サポート そよ風
            </Title>

            <Text c={"white"}>
              住所：神戸市灘区森後町一丁目3-19　リトルブラザーズ六甲ビル2B
            </Text>

            <Text c={"white"} style={{ marginTop: "10px" }}>
              電話：078-855-6522
            </Text>
            <Text c={"white"} mb={"lg"}>
              Email：contact@breezelanguage.com
            </Text>
            <Text c={"white"} mb={"lg"}>
              お問合せ時間：10:00-20:00　(祝日休)
            </Text>

            <Anchor href="/about" c="white" underline="always">
              会社情報を見る
            </Anchor>
          </div>
        </Center>
      </Container>
    </Box>
  );
}
