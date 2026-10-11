// ============================================================
// Miscellaneous (生活碎片) 数据
// 每张卡片不同的 aspect ratio 会营造出自然的瀑布流效果
// ============================================================

export interface MiscItem {
  id: string
  type: "photo" | "video"
  imageUrl: string
  videoUrl?: string
  caption: string
  // 用于瀑布流不同高度，可选 "square" | "portrait" | "landscape" | "tall"
  ratio?: "square" | "portrait" | "landscape" | "tall"
}

const IMG = (p: string, size: string = "landscape_4_3") =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(p)}&image_size=${size}`

export const miscItems: MiscItem[] = [
  {
    id: "m1",
    type: "photo",
    ratio: "tall",
    imageUrl: IMG(
      "kyoto bamboo forest early morning, soft mist, tall green bamboo path, asian girl walking from behind in cream sweater, cinematic film photography",
      "portrait_4_3"
    ),
    caption: "Spring Break 2025 · Arashiyama, Kyoto",
  },
  {
    id: "m2",
    type: "photo",
    ratio: "square",
    imageUrl: IMG(
      "late night baking, flour dusted wooden counter, two asian girls laughing mixing cookie dough, warm yellow kitchen lighting, messy cozy aesthetic",
      "square_hd"
    ),
    caption: "Late night baking with roommates 🍪",
  },
  {
    id: "m3",
    type: "photo",
    ratio: "landscape",
    imageUrl: IMG(
      "school art festival backstage, students in costume applying makeup, dressing room mirror, colorful props, documentary candid"
    ),
    caption: "Behind the scenes of the School Art Festival",
  },
  {
    id: "m4",
    type: "photo",
    ratio: "portrait",
    imageUrl: IMG(
      "golden hour seaside cliff, girl with wind blown hair facing ocean sunset, film grain, poetic portrait",
      "portrait_4_3"
    ),
    caption: "Summer by the Sea · Qingdao",
  },
  {
    id: "m5",
    type: "photo",
    ratio: "square",
    imageUrl: IMG(
      "desktop close up: notebook, fountain pen, cup of latte art, perfume bottle vial, dried flower, film photography aesthetic, warm tones",
      "square_hd"
    ),
    caption: "Afternoon recording fragrance inspirations",
  },
  {
    id: "m6",
    type: "video",
    ratio: "landscape",
    imageUrl: IMG(
      "campfire with friends at night, marshmallow roasting, starry sky, people laughing, warm glowing firelight"
    ),
    videoUrl: "#",
    caption: "Graduation trip bonfire night ✨",
  },
  {
    id: "m7",
    type: "photo",
    ratio: "landscape",
    imageUrl: IMG(
      "cherry blossom avenue in spring, soft pink petals falling, asian girl standing under tree looking up, hanami picnic aesthetic"
    ),
    caption: "Cherry blossoms in April",
  },
  {
    id: "m8",
    type: "photo",
    ratio: "tall",
    imageUrl: IMG(
      "vinyl record player and collection shelves, warm amber lamp lighting, cozy vintage room aesthetic, girl browsing records",
      "portrait_4_3"
    ),
    caption: "A vintage record found",
  },
  {
    id: "m9",
    type: "photo",
    ratio: "square",
    imageUrl: IMG(
      "homemade afternoon tea tiered tray: scones, strawberry jam, finger sandwiches, fine china cups, english garden background",
      "square_hd"
    ),
    caption: "Weekend afternoon tea with friends",
  },
  {
    id: "m10",
    type: "photo",
    ratio: "landscape",
    imageUrl: IMG(
      "art museum gallery interior, young woman looking at large abstract painting, contemplative mood, white minimalist space"
    ),
    caption: "Strolling through the Shanghai Biennale",
  },
  {
    id: "m11",
    type: "photo",
    ratio: "portrait",
    imageUrl: IMG(
      "greenhouse botanical garden, asian girl surrounded by tropical plants and orchids, holding small potted succulent, soft natural light",
      "portrait_4_3"
    ),
    caption: "A small world in the botanical garden 🌿",
  },
  {
    id: "m12",
    type: "photo",
    ratio: "landscape",
    imageUrl: IMG(
      "open air movie night on school lawn, fairy lights, students seated on blankets, projector running, nostalgic summer evening"
    ),
    caption: "Open-air cinema downstairs from the dorms",
  },
]
