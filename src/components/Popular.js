import React, { useEffect } from "react";

export default function Popular() {
  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.LUSCIOUS_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  useEffect(() => {
    getPopular();
  }, []);

  return <div>Popular</div>;
}
