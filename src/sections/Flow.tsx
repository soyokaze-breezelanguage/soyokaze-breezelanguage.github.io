import { Timeline, Text, Title, Container } from "@mantine/core";
import {
  IconGitBranch,
  IconGitPullRequest,
  IconGitCommit,
  IconMessageDots,
  IconPhone,
  IconChalkboard,
  IconUsers,
  IconVocabulary,
} from "@tabler/icons-react";

export default function Flow() {
  return (
    <>
      <Container style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Title order={1} align="center" m={"xl"}>
          受講までの流れ
        </Title>
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item
            bullet={<IconPhone size={12} />}
            title="無料体験レッスンお申込 or お問合せ"
          >
            <Text c="dimmed" size="sm">
              電話☎078-855-6522
              またはお問合せフォームにて申し込みを受け付けております。
            </Text>
            {/* <Text size="xs" mt={4}>
            2 hours ago
          </Text> */}
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconChalkboard size={12} />}
            title="無料体験レッスン・教室見学"
          >
            <Text c="dimmed" size="sm">
              無料体験レッスンを皆様受講いただき、教室や授業の雰囲気を感じていただきます。
            </Text>
            {/* <Text size="xs" mt={4}>
            52 minutes ago
          </Text> */}
          </Timeline.Item>

          <Timeline.Item
            title="レッスンスケジュール相談"
            bullet={<IconUsers size={12} />}
          >
            <Text c="dimmed" size="sm">
              受講を決めていただけましたら今後のスケジュールや今後の学びの計画をご一緒に決めさせていただきます。
            </Text>
            {/* <Text size="xs" mt={4}>
            34 minutes ago
          </Text> */}
          </Timeline.Item>

          <Timeline.Item
            title="レッスン受講開始"
            bullet={<IconVocabulary size={12} />}
          >
            <Text c="dimmed" size="sm">
              実際に受講スタートです！一緒に台灣華語の勉強を頑張りましょう！
            </Text>
            {/* <Text size="xs" mt={4}>
            12 minutes ago
          </Text> */}
          </Timeline.Item>
        </Timeline>
      </Container>
    </>
  );
}
