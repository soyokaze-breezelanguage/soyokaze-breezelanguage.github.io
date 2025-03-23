import Footer from "../components/Footer";
import Plaza from "../sections/Plaza";
import Price from "../sections/Price";
import Flow from "../sections/Flow";
import News from "../sections/News";
import MainVisual from "../sections/MainVisual";
import Introduction from "../sections/Introduction";
import FAQ from "./FAQ";
import Teachers from "./Teachers";
import Access from "./Access";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <MainVisual />
      <Introduction />
      <News />
      <Price />
      <Flow />
      <Plaza />
      <FAQ/>
      <Teachers/>
      <Access/>
      <Footer />
    </div>
  );
}
