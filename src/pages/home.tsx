import { FormContact, Hero, Plans, Services, Trial } from "../component";
import { Footer, Header } from "../component/shared";

export default function Home() {
  return (
    <div className="box">
      <Header />
      <Hero />
      <Services />
      <Trial />
      <Plans />
      <FormContact />
      <Footer />
    </div>
  );
}
