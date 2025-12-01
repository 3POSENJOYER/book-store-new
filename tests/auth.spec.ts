import {
	test, expect,
} from '@playwright/test'

const TARGET_URL = 'http://localhost:3001/'

test.describe('Authentication System E2E', () => {
	test('User should be able to Register', async({
		page,
	},) => {
		// 1. Генеруємо унікальний email
		const uniqueEmail = `testuser_${Date.now()}@example.com`

		// 2. Йдемо на сторінку логіну/реєстрації
		await page.goto(`${TARGET_URL}loginSignUp`,)

		// 3. Перемикаємось на вкладку "Register"
		await page.locator('.loginSignUpTabs p',).filter({
			hasText: 'Register',
		},)
			.click()

		// 4. Заповнюємо форму (шукаємо поля всередині блоку реєстрації)
		const registerForm = page.locator('.loginSignUpTabsContentRegister',)

		await registerForm.getByPlaceholder('User name',).fill('Test Playwright',)
		await registerForm.getByPlaceholder('Email address *',).fill(uniqueEmail,)
		await registerForm.getByPlaceholder('Password *',).fill('password123',)

		// 5. Натискаємо кнопку Register
		await registerForm.getByRole('button', {
			name: 'Register',
		},).click()

		// 6. ПЕРЕВІРКА:
		await expect(page,).toHaveURL(/.*shop/,)
	},)

	test('User should be able to Login', async({
		page,
	},) => {
		const uniqueEmail = `login_test_${Date.now()}@example.com`

		await page.goto(`${TARGET_URL}loginSignUp`,)
		await page.locator('.loginSignUpTabs p',).filter({
			hasText: 'Register',
		},)
			.click()
		const registerForm = page.locator('.loginSignUpTabsContentRegister',)
		await registerForm.getByPlaceholder('User name',).fill('Login User',)
		await registerForm.getByPlaceholder('Email address *',).fill(uniqueEmail,)
		await registerForm.getByPlaceholder('Password *',).fill('123456',)
		await registerForm.getByRole('button', {
			name: 'Register',
		},).click()
		await page.waitForURL(/.*shop/,)
		await page.context().clearCookies()
		await page.evaluate(() => {
			localStorage.clear()
		},)

		// --- ТЕСТ ЛОГІНУ ---
		await page.goto(`${TARGET_URL}loginSignUp`,)

		// Вкладка Login активна за замовчуванням
		const loginForm = page.locator('.loginSignUpTabsContentLogin',)

		await loginForm.getByPlaceholder('Email address *',).fill(uniqueEmail,)
		await loginForm.getByPlaceholder('Password *',).fill('123456',)

		await loginForm.getByRole('button', {
			name: 'Log In',
		},).click()

		// ПЕРЕВІРКА: Успішний перехід в магазин
		await expect(page,).toHaveURL(/.*shop/,)
	},)
},)