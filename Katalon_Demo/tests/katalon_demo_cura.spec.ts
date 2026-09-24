import { test, expect } from "@playwright/test";

test("Katalon Demo Cura", async ({ page }) => {
  await page.goto("https://katalon-demo-cura.herokuapp.com/");
  await expect(page.getByRole("link", { name: "Make Appointment" })).toBeVisible();
  await page.getByRole("link", { name: "Make Appointment" }).click();
  await expect(page).toHaveURL(/profile\.php#login|#login/);
  await expect(page.getByRole("heading", { name: "Login" })).toBeVisible();
});