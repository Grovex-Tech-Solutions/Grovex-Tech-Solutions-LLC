import { describe, expect, it } from 'vitest'
import { readFileSync } from 'fs'
import { join } from 'path'

describe('Accessibility and performance smoke checks', () => {
  it('keeps the home-page primary calls to action linkable', () => {
    const home = JSON.parse(readFileSync(join(process.cwd(), 'src', 'content', 'pages', 'home.json'), 'utf-8'))

    expect(home.hero.primaryCTA.text).toBeTruthy()
    expect(home.hero.primaryCTA.href).toMatch(/^\//)
    expect(home.hero.secondaryCTA.text).toBeTruthy()
    expect(home.hero.secondaryCTA.href).toMatch(/^\//)
    expect(home.callToAction.primaryButton.text).toBeTruthy()
    expect(home.callToAction.primaryButton.href).toMatch(/^\//)
  })

  it('keeps SEO social images configured with descriptive alt text', () => {
    const home = JSON.parse(readFileSync(join(process.cwd(), 'src', 'content', 'pages', 'home.json'), 'utf-8'))
    const images = home.seo.openGraph.images

    expect(Array.isArray(images)).toBe(true)
    expect(images.length).toBeGreaterThan(0)
    for (const image of images) {
      expect(image.url).toMatch(/^https:\/\//)
      expect(image.width).toBeGreaterThanOrEqual(600)
      expect(image.height).toBeGreaterThanOrEqual(315)
      expect(image.alt).toMatch(/GroveX/i)
      expect(image.alt.length).toBeGreaterThan(10)
    }
  })

  it('does not expose the deprecated learning-center route in generated navigation data', () => {
    const services = JSON.parse(readFileSync(join(process.cwd(), 'src', 'content', 'services.json'), 'utf-8'))
    const serialized = JSON.stringify(services).toLowerCase()

    expect(serialized).not.toContain('/learning-center')
    expect(serialized).not.toContain('workshop schedule')
    expect(serialized).not.toContain('downloadable guides')
  })
})
