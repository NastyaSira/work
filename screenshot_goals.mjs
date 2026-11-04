import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
await page.setViewportSize({ width: 390, height: 844 })

// Fresh start — clear localStorage
await page.goto('http://localhost:5173/')
await page.evaluate(() => localStorage.clear())
await page.reload()
await page.waitForLoadState('networkidle')

// Onboarding: welcome → name → goal → done
await page.click('text=Познайомимось')
await page.waitForTimeout(300)
await page.fill('input[type="text"]', 'Анастасія')
await page.click('text=Далі')
await page.waitForTimeout(300)
await page.click('text=Починаємо!')
await page.waitForTimeout(400)

// Skip energy picker
await page.click('text=Норм')
await page.waitForTimeout(400)

// Go to Goals
await page.click('text=Цілі')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/goals_list.png' })
console.log('1: goals list (1 goal)')

// Click "+ Додати"
await page.click('text=+ Додати')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/goals_form.png' })
console.log('2: add goal form')

// Select coding category
await page.click('text=Програмування')
await page.waitForTimeout(200)
await page.fill('input[type="text"]', 'Пишу код щодня')
await page.screenshot({ path: '/tmp/goals_form_filled.png' })
console.log('3: form filled')

// Save
await page.click('text=Зберегти ціль ✓')
await page.waitForTimeout(400)
await page.screenshot({ path: '/tmp/goals_after_save.png' })
console.log('4: after save — should show 2 goals')

// Try adding a third goal
await page.click('text=+ Додати')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/goals_form2.png' })
console.log('5: add third goal form')

// Select sport
const sportBtn = await page.$('text=Спорт')
if (sportBtn) await sportBtn.click()
await page.waitForTimeout(200)
await page.click('text=Зберегти ціль ✓')
await page.waitForTimeout(400)
await page.screenshot({ path: '/tmp/goals_three.png' })
console.log('6: three goals')

await browser.close()
