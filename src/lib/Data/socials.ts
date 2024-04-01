import LinkedIn from '$lib/logos/LinkedIn.png';
import GitHub from '$lib/logos/GitHub-Dark.png';

interface Social {
	href: string;
	src: string;
	alt: string;
}

export default [
	{ src: LinkedIn, alt: 'LinkedIn', href: 'https://ch.linkedin.com/in/pascal-honegger' },
	{ src: GitHub, alt: 'GitHub', href: 'https://github.com/PascalHonegger' }
] as const satisfies readonly Social[];
