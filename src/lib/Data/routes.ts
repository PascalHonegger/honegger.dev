import { base } from '$app/paths';
import ImagePortrait from '@fortawesome/fontawesome-free/svgs/solid/image-portrait.svg?component';
import Code from '@fortawesome/fontawesome-free/svgs/solid/code.svg?component';
import FolderTree from '@fortawesome/fontawesome-free/svgs/solid/folder-tree.svg?component';
import type { Component } from 'svelte';

interface Route {
	href: string;
	label: string;
	icon: Component;
}
export default [
	{ href: `${base}/`, label: 'About Me', icon: ImagePortrait },
	{ href: `${base}/setup`, label: 'How This Site Is Built', icon: Code },
	{ href: `${base}/projects`, label: 'My Projects', icon: FolderTree }
] as const satisfies readonly Route[];
