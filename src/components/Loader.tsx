import { SkeletonCard } from './SkeletonCard';

export const Loader = () => {
	return (
		<>
			{Array.from({ length: 9 }).map((_, index) => (
				<SkeletonCard key={index}></SkeletonCard>
			))}
		</>
	);
};
