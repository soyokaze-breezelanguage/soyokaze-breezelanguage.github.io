import { Container, Text, Title } from "@mantine/core";

export default function Price() {
  return (
    <>
      <Container>
        <Title order={1} align="center" m={"xl"}>
          レッスン料金
        </Title>
        <Text fw={700} mb={10}>
          入会金 ¥5,000のところ、 華語学習応援キャンペーン！ 入会金¥5,000 →無料
          !!
        </Text>
        <Text mb={10}>
          プライベートレッスン 1対1 3,500円/1回60分 （※教材費別途）
        </Text>
        <Text mb={10}>
          1対2（例：ご家族・ご友人と受講される場合）
          2,000円/1回60分　（おひとり様あたり）（※教材費別途）。
          こちらの金額に各種割引を適用していただけます。
        </Text>
        <Text>
          ※4回のレッスンを一回まとめのお支払いです。1ヶ月で4回でも1週間で4回でも構いません。皆様のペースに合わせた柔軟な授業構成が可能です。
        </Text>
      </Container>
    </>
  );
}
