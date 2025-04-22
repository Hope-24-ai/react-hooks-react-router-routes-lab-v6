import { useEffect, useState } from "react";
import NavBar from "../components/NavBar"; // 👈 import it

function Home() {
  return (
    <>
      <header>
        <NavBar /> 
      </header>
      <main>
        <h1>Welcome to the Movie App!</h1>
        {/* Info goes here! */}
      </main>
    </>
  );
}

export default Home;

