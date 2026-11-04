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
await page.click('text=Починаємо!')
await page.waitForTimeout(400)
await page.click('text=Норм')
await page.waitForTimeout(400)

// Go to Focus tab
await page.click('text=Фокус')
await page.waitForTimeout(300)

// Select goal "Читання"
await page.click('text=Читання')
await page.waitForTimeout(200)

// Select 5 min
const durBtns = await page.$$('button')
for (const btn of durBtns) {
  if ((await btn.innerText()).trim() === '5 хв') { await btn.click(); break }
}
await page.waitForTimeout(200)
await page.screenshot({ path: '/tmp/timer_setup.png' })
console.log('1: timer setup')

// Start timer
await page.getByRole('button', { name: 'Поїхали! ▶', exact: true }).click()
await page.waitForTimeout(800)
await page.screenshot({ path: '/tmp/timer_running.png' })
console.log('2: timer running')

// Wait a few seconds
await page.waitForTimeout(3000)
await page.screenshot({ path: '/tmp/timer_progress.png' })
console.log('3: timer in progress')

// Pause
await page.getByRole('button', { name: '⏸ Пауза', exact: true }).click()
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/timer_paused.png' })
console.log('4: timer paused')

await browser.close()
