import { chromium } from 'playwright'
const browser = await chromium.launch({ headless: true })

// A56 viewport
const ctx = await browser.newContext({ viewport: { width: 412, height: 915 }, deviceScaleFactor: 2 })
const page = await ctx.newPage()
await page.goto('http://localhost:5174/', { waitUntil: 'networkidle' })
await page.waitForTimeout(400)
await page.getByText('Познайомимось').click()
await page.waitForTimeout(200)
await page.fill('input[type="text"]', 'Оля')
await page.getByRole('button', { name: 'Далі' }).click()
await page.waitForTimeout(200)
await page.getByRole('button', { name: /Починаємо/ }).click()
await page.waitForTimeout(300)
await page.getByRole('button', { name: /Норм/ }).click()
await page.waitForTimeout(300)

// Open add goal form
await page.locator('nav').getByText('Цілі').click()
await page.waitForTimeout(200)
await page.getByRole('button', { name: '+ Додати' }).click()
await page.waitForTimeout(300)

// Full page screenshot (no clip) to see total height
await page.screenshot({ path: '/tmp/form_full.png', fullPage: true })
await page.screenshot({ path: '/tmp/form_viewport.png', fullPage: false })

// Check actual form height
const height = await page.evaluate(() => document.body.scrollHeight)
const vp = await page.evaluate(() => window.innerHeight)
console.log(`Body height: ${height}px, Viewport: ${vp}px, Overflow: ${height - vp}px`)

await ctx.close()
await browser.close()
