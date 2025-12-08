import { test, expect } from "@playwright/test";

const TARGET_URL = "http://localhost:3001/";

test.describe("Book Store E2E", () => {
  test("HomePage should load database products", async ({ page }) => {
    await page.goto(TARGET_URL);

    const addToCartBtn = page.locator("text=Add to cart").first();
    await expect(addToCartBtn).toBeVisible({
      timeout: 15000,
    });
  });

  test("Add product to cart flow", async ({ page }) => {
    await page.goto(TARGET_URL);

    // 1. Знаходимо першу кнопку "Add to cart" і клікаємо
    const addToCartBtn = page.locator("text=Add to cart").first();
    await addToCartBtn.click();

    // 2. Йдемо в кошик
    await page.goto(`${TARGET_URL}cart`);

    // 3. ПЕРЕВІРКА
    await expect(
      page.getByRole("heading", {
        name: "Cart Totals",
      }),
    ).toBeVisible({
      timeout: 15000,
    });
  });
});
