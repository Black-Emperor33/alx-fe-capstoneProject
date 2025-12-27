import { useEffect, useState } from "react";

function QuoteBox() {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setError(false);

    try {
      const res = await fetch(
  `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random?ts=${Date.now()}`
);


      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      // ZenQuotes returns an array
      setQuote(data[0]);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return <p className="text-gray-400 mt-4">Loading quote...</p>;
  }

  if (error) {
    return (
      <p className="text-red-500 mt-4">
        Failed to load quote. Try again later.
      </p>
    );
  }

  return (
    <div className="mt-6 max-w-xl mx-auto text-center italic text-gray-700">
      “{quote.q}”
      <p className="mt-2 font-semibold text-sm">
        — {quote.a}
      </p>

    </div>
  );
}

export default QuoteBox;