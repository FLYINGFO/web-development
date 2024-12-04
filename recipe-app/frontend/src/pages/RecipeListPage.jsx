import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // For navigation links
import './RecipeListPage.css';

const RecipeListPage = () => {
    // State to store recipes
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true); // To show loading state
    const [error, setError] = useState(''); // To show errors if fetching fails

    // Fetch recipes when the component mounts
    useEffect(() => {
        // Simulate an API request (you can replace this with a real API request)
        fetchRecipes();
    }, []);

    // Function to fetch recipes from an API or mock data
    const fetchRecipes = async () => {
        try {
            // Simulating an API call with a timeout, replace with actual API call
            setLoading(true);
            const response = await fetch('/api/recipes'); // Replace with real API endpoint
            if (!response.ok) {
                throw new Error('Failed to fetch recipes');
            }
            const data = await response.json();
            setRecipes(data); // Set the recipes to state
        } catch (error) {
            setError(error.message); // Set error message if fetch fails
        } finally {
            setLoading(false); // Set loading to false after data fetch
        }
    };

    return (
        <div className="recipe-list-container">
            <h2>Recipe List</h2>

            {loading && <p>Loading recipes...</p>} {/* Show loading message */}
            {error && <p className="error-message">{error}</p>} {/* Show error if fetch fails */}

            {!loading && !error && (
                <div className="recipe-list">
                    {recipes.length === 0 ? (
                        <p>No recipes available.</p> // Message if no recipes are available
                    ) : (
                        recipes.map((recipe) => (
                            <div key={recipe.id} className="recipe-card">
                                <h3>{recipe.title}</h3>
                                <p>{recipe.description}</p>
                                <button onClick={() => alert(`Recipe details for ${recipe.title}`)}>
                                    View Recipe
                                </button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default RecipeListPage;