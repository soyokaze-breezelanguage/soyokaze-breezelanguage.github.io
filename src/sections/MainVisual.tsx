import { Container, Text, Stack } from "@mantine/core";
import mainVisual from "../assets/images/mainvisual/soyokaze_top.jpeg";

export default function MainVisual() {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${mainVisual})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container>
        <Stack spacing={0} align="center">
          <Text
            size="40px"
            color="white"
            fw={600}
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
              animation: "fadeUp 1.5s ease-out forwards",
            }}
          >
            台湾政府公認華語教室
          </Text>
          <Text
            size="55px"
            color="white"
            fw={700}
            style={{
              textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
              animation: "fadeDown 1.5s ease-out forwards",
              animationDelay: "0.5s",
            }}
          >
            語学センター・留学サポート そよ風
          </Text>
        </Stack>
      </Container>

      {/* アニメーション定義 */}
      <style>
        {`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(0);
            }
            100% {
              opacity: 1;
              transform: translateY(-20px);
            }
          }

          @keyframes fadeDown {
            0% {
              opacity: 0;
              transform: translateY(0);
            }
            100% {
              opacity: 1;
              transform: translateY(20px);
            }
          }
        `}
      </style>
    </div>
  );
}
