// ============================================================
// Scent (调香) 页面数据
// 复刻 scentify 内容风格 - 可在此添加更多香水
// ============================================================

export interface ScentCard {
  name: string
  type: string
  tagline: string
  quote: string
  topNotes: string[]
  middleNotes: string[]
  baseNotes: string[]
  ambient: string
}

// 必须包含 After the Rain，与参考网站内容一致
export const scents: ScentCard[] = [
  {
    name: "After the Rain",
    type: "Eau de Parfum",
    tagline: "Quiet moments after the rain",
    quote:
      "This scent captures quiet nostalgia, soft rain, and the warmth of fading memories.",
    topNotes: ["bergamot", "petrichor"],
    middleNotes: ["jasmine tea", "iris"],
    baseNotes: ["cedarwood", "soft musk"],
    ambient: "Soft Rain on Window",
  },
  {
    name: "Sunset Library",
    type: "Eau de Parfum",
    tagline: "Orange glow of an old library at dusk",
    quote:
      "Amber pages, leather bindings, and the last warm light of day through stained glass.",
    topNotes: ["blood orange", "saffron"],
    middleNotes: ["old paper", "dried rose"],
    baseNotes: ["leather", "amber resin", "sandalwood"],
    ambient: "Dusty Sunbeam on Old Books",
  },
  {
    name: "First Snow",
    type: "Eau de Toilette",
    tagline: "Silence before the first snow falls",
    quote:
      "Cold crisp air, first footprint on untouched ground, a quiet warmth in wool and smoke.",
    topNotes: ["frosted pear", "white pepper"],
    middleNotes: ["white tea", "lilac"],
    baseNotes: ["cashmere wood", "smoked incense", "tonka"],
    ambient: "Snowfall Through Streetlamp",
  },
  {
    name: "Osmanthus Kitchen",
    type: "Eau de Parfum",
    tagline: "Grandma's osmanthus syrup in the kitchen",
    quote:
      "Steaming syrup, sweet osmanthus petals, the familiar hum of an old kitchen.",
    topNotes: ["osmanthus", "mandarin peel"],
    middleNotes: ["white peach", "wolfberry"],
    baseNotes: ["rock sugar", "vanilla bean", "cedar"],
    ambient: "Steam Rising from Earthen Stove",
  },
]

export const echoScentIntro = {
  brand: "EchoScent",
  slogan: "Transforming memories into scent since 2024.",
  paragraph:
    "We believe that every memory has a fragrance, and every fragrance tells a story. Smell is the only sense directly wired to the brain's amygdala and hippocampus — the twin seats of emotion and memory. EchoScent was born out of this simple idea: to freeze a moment in a bottle, so you can return to it whenever you want. Each scent is a letter written in molecules, addressed to a future you who will one day need it.",
}
