import { Accordion, Container, Flex, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function FAQ() {
  const [faqList, setFaqList] = useState<FAQItem[]>([]);

  useEffect(() => {
    async function fetchFAQ() {
      const data = await import("../data/faq/faq.json"); // FAQデータを取得
      setFaqList(data.default);
    }

    fetchFAQ();
  }, []);

  return (
    <Container size="md" style={{ marginTop: "40px", marginBottom: "40px" }}>
      <Title order={1} ta="center" mb="xl">
        レッスンQ＆A
      </Title>

      <Accordion variant="separated">
        {faqList.map((item, index) => (
          <Accordion.Item key={index} value={item.question}>
            <Accordion.Control>
              <Flex>
                <Text c={"blue"} fw={700} mr={10}>
                  Q
                </Text>
                {item.question}
              </Flex>
            </Accordion.Control>
            <Accordion.Panel>
              <Flex>
                <Text c={"red"} fw={700} mr={10}>
                  A
                </Text>
                {item.answer}
              </Flex>
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Container>
  );
}
