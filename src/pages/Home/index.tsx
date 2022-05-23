import React from "react";
import { Text } from "../../components/Text";
import "./home.sass";

export const Home: React.FC = () => {
  return (
    <main className="justify-center align-center">
      <section>
        <h1 className="main-text text-primary">
          <Text text="Daniel" />
        </h1>

        <h2 className="thin secondary-text text-secondary">
          <Text text="PROGRAMMER AND PROFESSIONAL GOOGLE SEARCHER" />
        </h2>
      </section>
    </main>
  );
}