import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveTitle(/About Me/);
	expect(await page.textContent('h1')).toMatch(
		/Welcome to the Glorious Website of Pascal\sHonegger 👋/
	);
});

test('setup page has expected h1', async ({ page }) => {
	await page.goto('/setup');
	await expect(page).toHaveTitle(/How This Site Is Built/);
	expect(await page.textContent('h1')).toBe('How This Site Is Built');
});

test('projects page has expected h1', async ({ page }) => {
	await page.goto('/projects');
	await expect(page).toHaveTitle(/My Projects/);
	expect(await page.textContent('h1')).toBe('My Projects');
});

test('current page has active url', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('a', { hasText: 'About Me' })).toHaveClass(/active/);
	await expect(page.locator('a', { hasText: 'How This Site Is Built' })).not.toHaveClass(/active/);
	await expect(page.locator('a', { hasText: 'My Projects' })).not.toHaveClass(/active/);

	await page.goto('/setup');
	await expect(page.locator('a', { hasText: 'About Me' })).not.toHaveClass(/active/);
	await expect(page.locator('a', { hasText: 'How This Site Is Built' })).toHaveClass(/active/);
	await expect(page.locator('a', { hasText: 'My Projects' })).not.toHaveClass(/active/);

	await page.goto('/projects');
	await expect(page.locator('a', { hasText: 'About Me' })).not.toHaveClass(/active/);
	await expect(page.locator('a', { hasText: 'How This Site Is Built' })).not.toHaveClass(/active/);
	await expect(page.locator('a', { hasText: 'My Projects' })).toHaveClass(/active/);
});

test('navigation between pages works', async ({ page }) => {
	await page.goto('/');

	const setup = page.locator('a', { hasText: 'How This Site Is Built' });
	await expect(setup).toHaveAttribute('href', '/setup');
	await setup.click();
	await expect(page).toHaveURL('/setup');

	const projects = page.locator('a', { hasText: 'My Projects' });
	await expect(projects).toHaveAttribute('href', '/projects');
	await projects.click();
	await expect(page).toHaveURL('/projects');

	const about = page.locator('a', { hasText: 'About Me' });
	await expect(about).toHaveAttribute('href', '/');
	await about.click();
	await expect(page).toHaveURL('/');
});

test('index page snapshot', async ({ page }) => {
	await page.goto('/');
	await expect(page).toHaveScreenshot('index.png');
});

test('setup page snapshot', async ({ page }) => {
	await page.goto('/setup');
	await expect(page).toHaveScreenshot('setup.png');
});

test('projects page snapshot', async ({ page }) => {
	await page.goto('/projects');
	await expect(page).toHaveScreenshot('projects.png');
});
