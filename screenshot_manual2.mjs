import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
await page.setViewportSize({ width: 390, height: 844 })

await page.goto('http://localhost:5173/')
await page.evaluate(() => localStorage.clear())
await page.reload()
await page.waitForLoadState('networkidle')

// Onboarding
await page.click('text=Познайомимось')
await page.waitForTimeout(200)
await page.fill('input[type="text"]', 'Анастасія')
await page.click('text=Далі')
await page.waitForTimeout(200)
// Switch to pages unit
for (const btn of await page.$$('button')) {
  if ((await btn.innerText()) === 'сторінки') { await btn.click(); break }
}
await page.click('text=Починаємо!')
await page.waitForTimeout(400)
await page.click('text=Норм')
await page.waitForTimeout(400)

await page.click('text=Цілі')
await page.waitForTimeout(300)

// Open manual input
await page.click('text=✏️ Ввести вручну')
await page.waitForTimeout(200)
await page.screenshot({ path: '/tmp/m_open.png' })

// Type value
await page.fill('input[type="number"]', '13')
await page.screenshot({ path: '/tmp/m_typed.png' })

// Submit — click exact "Додати" inside the card (not "+ Додати" at top)
await page.getByRole('button', { name: 'Додати', exact: true }).click()
await page.waitForTimeout(500)
await page.screenshot({ path: '/tmp/m_done.png' })
console.log('done')

await browser.close()
