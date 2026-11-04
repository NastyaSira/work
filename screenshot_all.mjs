import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
await page.setViewportSize({ width: 390, height: 844 })

await page.goto('http://localhost:5173/')
await page.evaluate(() => localStorage.clear())
await page.reload()
await page.waitForLoadState('networkidle')

// Fast onboarding
await page.click('text=Познайомимось')
await page.waitForTimeout(150)
await page.fill('input[type="text"]', 'Анастасія')
await page.click('text=Далі')
await page.waitForTimeout(150)

// Click on number to test manual input in onboarding
await page.screenshot({ path: '/tmp/all_onboarding_stepper.png' })

await page.click('text=Починаємо!')
await page.waitForTimeout(350)
await page.click('text=Норм')
await page.waitForTimeout(350)

// Goals page
await page.click('text=Цілі')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/all_goals.png' })

// Add goal form — check stepper
await page.click('text=+ Додати')
await page.waitForTimeout(250)
await page.screenshot({ path: '/tmp/all_addgoal.png' })

// Click on the daily target number to open manual input
const stepperVals = await page.$$('button[title="Натисни щоб ввести вручну"]')
if (stepperVals.length > 0) {
  await stepperVals[0].click()
  await page.waitForTimeout(150)
  await page.screenshot({ path: '/tmp/all_stepper_open.png' })
}

// Go back
await page.click('text=←')
await page.waitForTimeout(200)

// Focus page
await page.click('text=Фокус')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/all_focus.png' })

// Progress page
await page.click('text=Прогрес')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/all_progress.png' })

await browser.close()
console.log('done')
