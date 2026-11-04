import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
await page.setViewportSize({ width: 390, height: 844 })

await page.goto('http://localhost:5173/')
await page.evaluate(() => localStorage.clear())
await page.reload()
await page.waitForLoadState('networkidle')

// Quick onboarding
await page.click('text=Познайомимось')
await page.waitForTimeout(200)
await page.fill('input[type="text"]', 'Анастасія')
await page.click('text=Далі')
await page.waitForTimeout(200)

// Set goal to pages-based
await page.click('text=Читання')
await page.waitForTimeout(100)

// Find and click pages unit
const pagesBtns = await page.$$('button')
for (const btn of pagesBtns) {
  const txt = await btn.innerText()
  if (txt === 'сторінки') { await btn.click(); break }
}
await page.waitForTimeout(100)
await page.click('text=Починаємо!')
await page.waitForTimeout(400)

await page.click('text=Норм')
await page.waitForTimeout(400)

// Go to goals
await page.click('text=Цілі')
await page.waitForTimeout(300)

// Screenshot: full card with "Ввести вручну" button
await page.screenshot({ path: '/tmp/manual_1_card.png' })
console.log('1: card with manual button')

// Click "Ввести вручну"
await page.click('text=✏️ Ввести вручну')
await page.waitForTimeout(200)
await page.screenshot({ path: '/tmp/manual_2_open.png' })
console.log('2: manual input open')

// Type a value
await page.fill('input[type="number"]', '15')
await page.screenshot({ path: '/tmp/manual_3_typed.png' })
console.log('3: typed 15')

// Submit
await page.click('text=Додати')
await page.waitForTimeout(400)
await page.screenshot({ path: '/tmp/manual_4_result.png' })
console.log('4: after submit — progress updated')

await browser.close()
