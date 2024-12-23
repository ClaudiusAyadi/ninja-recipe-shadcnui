import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Recipe } from '../types';

export const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
	return (
		<Card className='flex flex-col justify-between'>
			<CardHeader className='flex-row gap-4 items-center'>
				<Avatar>
					<AvatarImage src={`/img/${recipe.image}`} alt={recipe.title} />
					<AvatarFallback>
						{recipe.title
							.split(' ')
							.map(word => word.slice(0, 1).toUpperCase())
							.join('')}
					</AvatarFallback>
				</Avatar>

				<CardTitle>{recipe.title}</CardTitle>
				<CardDescription>{recipe.time} mins to cook.</CardDescription>
			</CardHeader>
			<CardContent>
				<p>{recipe.description}</p>
			</CardContent>
			<CardFooter className='flex justify-between'>
				<Button>View Recipe</Button>
				{recipe.vegan && <Badge variant='secondary'>Vegan</Badge>}
			</CardFooter>
		</Card>
	);
};
