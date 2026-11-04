import { chromium } from 'playwright'

const browser = await chromium.launch({ headless: true })
const page = await browser.newPage()
await page.setViewportSize({ width: 390, height: 844 })
await page.goto('http://localhost:5173/')
await page.waitForLoadState('networkidle')
await page.screenshot({ path: '/tmp/iskra_welcome.png' })
console.log('1: welcome')

await page.click('text=Познайомимось')
await page.waitForTimeout(400)
await page.screenshot({ path: '/tmp/iskra_name.png' })
console.log('2: name step')

await page.fill('input[type="text"]', 'Анастасія')
await page.click('text=Далі')
await page.waitForTimeout(400)
await page.screenshot({ path: '/tmp/iskra_goal.png' })
console.log('3: goal step')

await page.click('text=Починаємо!')
await page.waitForTimeout(600)
await page.screenshot({ path: '/tmp/iskra_energy.png' })
console.log('4: energy picker')

await page.click('text=Норм')
await page.waitForTimeout(500)
await page.screenshot({ path: '/tmp/iskra_dashboard.png' })
console.log('5: dashboard')

await page.click('text=Фокус')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/iskra_focus.png' })
console.log('6: focus')

await page.click('text=Прогрес')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/iskra_progress.png' })
console.log('7: progress')

await page.click('text=Цілі')
await page.waitForTimeout(300)
await page.screenshot({ path: '/tmp/iskra_goals.png' })
console.log('8: goals')

await browser.close()
console.log('done')
