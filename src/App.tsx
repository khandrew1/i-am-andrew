import { Analytics } from "@vercel/analytics/react";
import { MainColumn } from "./components/portfolio/MainColumn";
import { PageShell } from "./components/portfolio/PageShell";
import { ProfileColumn } from "./components/portfolio/ProfileColumn";

function App() {
  return (
    <PageShell>
      <ProfileColumn />
      <MainColumn />
      <Analytics />
    </PageShell>
  );
}

export default App;
