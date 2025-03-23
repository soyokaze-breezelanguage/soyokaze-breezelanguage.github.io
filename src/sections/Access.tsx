import { Title, Container, Text, Flex } from "@mantine/core";

export default function Access() {
  return (
    <Container mb={50}>
      <Title order={1} ta="center" mb="xl">
        アクセス
      </Title>
      {/* <Title order={2} align="center" mb="xl">
        住所
      </Title> */}
      <Text mb={20}>
        住所: 兵庫県神戸市灘区森後町一丁目3-19 リトルブラザーズ六甲ビル2B
      </Text>

      <Flex justify="center" mb={20}>
        <iframe
          title="Google Map"
          width="100%"
          height="450"
          style={{
            border: 0,
            borderRadius: "8px",
            maxWidth: "800px",
            width: "100%",
          }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1008.9418583086515!2d135.2382890534097!3d34.717151727194704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008dd95e5a563d%3A0x8cde6680eb2bca9f!2z6Kqe5a2m44K744Oz44K_44O844O755WZ5a2m44K144Od44O844OIIOOBneOCiOmiqA!5e0!3m2!1szh-TW!2sjp!4v1739777837786!5m2!1szh-TW!2sjp"
        ></iframe>
      </Flex>
      <Text>
        ＊当センターは「リトルブラザーズ六甲ビル」2階にございます。エレベーターをご利用の場合は、3階で降りていただくとすぐです。
      </Text>
      <Text>＊ ご不明な点等ございましたら、お気軽にお問い合わせください。</Text>
    </Container>
  );
}
