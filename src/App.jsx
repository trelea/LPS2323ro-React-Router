import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function App() {
  const [queries, setQueries] = useSearchParams();

  React.useEffect(() => {
    const nr = queries.get("nr");
    if (isNaN(nr) || nr === null) setQueries({ nr: 0 });
  }, [queries, setQueries]);

  const increment = () => {
    const nr = queries.get("nr");
    setQueries({ nr: parseInt(nr) + 1 });
  };

  /**
   *
   * New Path: /exchange
   *
   * Search Queries: from, to, amount
   *
   * Currencies: USD, EUR, RUB, GBP, RON, MDL
   *
   * Example: /exchange?from=mdl&to=eur&amout=2000 -> ouputs 100EUR
   *
   * CASE DEFAULT:
   * from = mdl
   * to = eur
   * amount = 1
   *
   * Global File For Storing Currencies Values
   *
   * {
   *    USD: {
   *        USD: 1,
   *        EUR: 0.8,
   *        RUB: 100,
   *        GBP: 1.5,
   *        RON: 4.7,
   *        MDL: 17.8
   *    },
   *
   */

  return (
    <>
      <h1>Home Page</h1>
      <Link to={`/posts`} style={{ textDecoration: "underline" }}>
        Posts
      </Link>
      <h1>{queries.get("nr")}</h1>
      <button onClick={increment}>+</button>

      <button>Redirect</button>
    </>
  );
}
