import { useEffect, useState } from "react";

import {
  FormContact,
  Hero,
  Overlay,
  Plans,
  Services,
  Trial,
} from "../component";
import { Footer, Header } from "../component/shared";

export default function Home() {
  const [country, setCountry] = useState<string>("");
  const [showOverlay, setShowOverlay] = useState(false);

  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);

  useEffect(() => {
    if (searchParams.get("debug") === "true") return;

    (async () => {
      try {
        const request = await fetch("https://ipinfo.io/?token=7a04bba2097fbf", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const response: { country: string } = await request.json();

        setCountry(response.country);
      } catch (error: any) {
        throw new Error(error);
      }
    })();

    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (searchParams.get("debug") === "true") return;

    if (country !== "PE") {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }

    // eslint-disable-next-line
  }, [country]);

  return (
    <div className={`box ${showOverlay ? "overflow" : ""}`}>
      {showOverlay && <Overlay />}
      <Header />
      <Hero />
      <Services />
      <Trial />
      <Plans />
      <FormContact showOverlay={showOverlay} />
      <Footer />
    </div>
  );
}
