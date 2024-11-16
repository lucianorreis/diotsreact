import React from "react";
import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Card
          id={1}
          paragraph="TypeScript"
          details="TS para Frontend e Backend"
        />
        <Card id={2} paragraph="HTML" details="HTML para Frontend e Backend" />
        <Card id={3} paragraph="SQL" details="SQL para banco de dados" />
      </Layout>
    </>
  );
}

export default App;
