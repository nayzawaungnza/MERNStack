import React, { useEffect, useState } from "react";
import RecipeItem from "../components/RecipeItem";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const fetchRecipes = async () => {
      const response = await fetch("http://localhost:3000/api/recipes/");
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      setRecipes(data);
    };

    fetchRecipes();
  }, []);
  return (
    <>
      <div className="space-y-3">
        {!!recipes.length &&
          recipes.map((recipe) => (
            <RecipeItem key={recipe._id} recipe={recipe} />
          ))}
      </div>
    </>
  );
}
