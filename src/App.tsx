import { Recipe } from './types';
import { useEffect, useState } from 'react';
import Header from './Header';
import Loading from './Loading';
import RecipeList from './components/RecipeList';

const uri = 'http://localhost:4090/recipes';

const getRecipes = async (): Promise<Recipe[]> => {
	const response = await fetch(uri);

	await new Promise(resolve => setTimeout(resolve, 3000));

	const data = await response.json();
	return data;
};

export default function App() {
	const [recipes, setRecipes] = useState<Recipe[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchRecipes = async () => {
			try {
				// setLoading(true);
				const data = await getRecipes();
				setRecipes(data);
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchRecipes();
	}, []);

	return (
		<>
			<Header />
			<main>
				<div className='grid grid-cols-3 gap-8'>{loading ? <Loading /> : <RecipeList recipes={recipes} />}</div>
			</main>
		</>
	);
}
