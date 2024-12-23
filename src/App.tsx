import { useEffect, useState } from 'react';
import { Recipe } from './types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from './components/ui/button';

const uri = 'http://localhost:4000/recipes';

const getRecipes = async (): Promise<Recipe[]> => {
	const response = await fetch(uri);
	const data = await response.json();
	return data;
};

function App() {
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
			{loading ? (
				<div>Loading...</div>
			) : (
				<>
					<header>
						<nav>
							<h1>Recipe for Ninjas</h1>
						</nav>
					</header>
					<main>
						<div className='grid grid-cols-3 gap-8'>
							{recipes.map(recipe => {
								return (
									<Card className='flex flex-col justify-between' key={recipe.id}>
										<CardHeader className='flex-row gap-4 items-center'>
											{/* avatar */}
											<CardTitle>{recipe.title}</CardTitle>
											<CardDescription>{recipe.time} mins to cook.</CardDescription>
										</CardHeader>
										<CardContent>
											<p>{recipe.description}</p>
										</CardContent>
										<CardFooter className='flex justify-between'>
											<Button>View Recipe</Button>
											{recipe.vegan && <span>Vegan</span>}
										</CardFooter>
									</Card>
								);
							})}
						</div>
					</main>
				</>
			)}
		</>
	);
}

export default App;
