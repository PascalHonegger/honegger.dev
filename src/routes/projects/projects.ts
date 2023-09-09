export interface Project {
	name: string;
	description: string;
	technologies: readonly string[];
	github?: string;
	website?: string;
}

export const projects: readonly Project[] = [
	{
		name: 'SAMT',
		description:
			'A domain-specific language to specify service contracts in a technology-agnostic manner',
		technologies: ['Kotlin', 'Ktor', 'LSP'],
		github: 'https://github.com/samtkit/core'
	},
	{
		name: 'JassTracker',
		description: 'A webapp to track and analyze the swiss card game "Coiffeur Jass"',
		technologies: ['Kotlin', 'Ktor', 'Vue.js', 'gRPC', 'jOOQ', 'PostgreSQL'],
		website: 'https://jasstracker.honegger.dev',
		github: 'https://github.com/PascalHonegger/JassTracker'
	},
	{
		name: 'ng-datatable',
		description: 'A fork of a Angular table library with ugprades and improvements',
		technologies: ['Angular'],
		website: 'https://www.npmjs.com/package/@pascalhonegger/ng-datatable',
		github: 'https://github.com/PascalHonegger/ng-datatable'
	},
	{
		name: 'Fleisch & Umwelt',
		description: 'A webapp to estimate your CO² emissions due to meat consumption',
		technologies: ['Angular', 'Material'],
		website: 'https://pascalhonegger.github.io/FleischUndUmwelt/',
		github: 'https://github.com/PascalHonegger/FleischUndUmwelt'
	}
];
