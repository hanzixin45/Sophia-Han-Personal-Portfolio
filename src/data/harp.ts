// ============================================================
// Harp 页面数据 - 增减条目直接修改下方数组即可
// type: "photo" | "video"
// ============================================================

export interface HarpItem {
  id: string
  type: "photo" | "video"
  // 替换为你的真实图片/视频缩略图 URL
  imageUrl: string
  // 如果是视频，这里填视频链接（YouTube embed 或本地视频文件）
  videoUrl?: string
  title: string
  date: string
  location: string
  description?: string
}

const IMG = (p: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(p)}&image_size=landscape_4_3`

export const harpPerformances: HarpItem[] = [
  // ==================== GRADE 11 真实奖项 ====================

  {
    id: "h-g11-1",
    type: "photo",
    imageUrl: "/harp/Vienna 1.jpg",
    title: "Gold Award, 8th World Student Arts Festival",
    date: "2026年7月 · G12",
    location: "World Student Arts Festival · 器乐类",
    description:
      "Gold Award - Instrumental Music, 8th World Student Arts Festival. Performed in the Golden Hall.",
  },
  {
    id: "h-g11-3",
    type: "photo",
    imageUrl: "/harp/Vienna 4.jpg",
    title: "Vienna Musikverein Performance Photo IV",
    date: "2026年7月 · G12",
    location: "Vienna Musikverein",
    description:
      "Performance at the prestigious Vienna Musikverein (Golden Hall) as part of the World Student Arts Festival.",
  },
  {
    id: "h-g11-4",
    type: "photo",
    imageUrl: "/harp/Vienna 5.jpg",
    title: "Vienna Musikverein Performance Photo V",
    date: "2026年7月 · G12",
    location: "Vienna Musikverein",
    description:
      "Performance at the prestigious Vienna Musikverein (Golden Hall) as part of the World Student Arts Festival.",
  },
  {
    id: "h-g11-2",
    type: "photo",
    imageUrl: "/harp/Vienna 2.jpg",
    title: "Vienna Musikverein Performance",
    date: "2026年7月 · G12",
    location: "Vienna Musikverein",
    description:
      "Performance at the prestigious Vienna Musikverein (Golden Hall) as part of the World Student Arts Festival.",
  },


  {
    id: "h-g11-v1",
    type: "video",
    videoUrl: "/harp/Vienna v1_compressed.mp4",
    imageUrl: "/harp/Vienna v1_cover.jpg",
    title: "Vienna Musikverein Performance Video I",
    date: "2026年7月 · G12",
    location: "Vienna Musikverein",
    description: "Video recording of the performance at the Vienna Musikverein.",
  },
  {
    id: "h-g11-v2",
    type: "video",
    videoUrl: "/harp/Vienna v2_compressed.mp4",
    imageUrl: "/harp/Vienna v2_cover.jpg",
    title: "Vienna Musikverein Competition Video II",
    date: "2026年7月 · G12",
    location: "Vienna Musikverein",
    description: "Second video recording of the performance at the Vienna Musikverein.",
  },
  {
    id: "h-g11-v3",
    type: "video",
    videoUrl: "/harp/Vienna v3_compressed.mp4",
    imageUrl: "/harp/Vienna v3.jpg",
    title: "World Student Arts Festival Competition Video",
    date: "2026年7月 · G12",
    location: "World Student Arts Festival",
    description: "Video recording of the competition performance at the World Student Arts Festival.",
  },

  // ==================== GRADE 10 真实奖项 ====================
  {
    id: "h-g10-1",
    type: "photo",
    imageUrl: "/harp/Guangdong 1.jpg",
    title: "First Prize, Guangdong Province Arts Exhibition",
    date: "2024年11月 · G11",
    location: "8th · Guangdong Province",
    description:
      "First Prize, 8th Guangdong Primary & Secondary School Student Arts Exhibition. Participated as part of the Shenzhen team.",
  },
  {
    id: "h-g10-2",
    type: "photo",
    imageUrl: "/harp/Guangdong 2.jpg",
    title: "Guangdong Province Arts Exhibition Performance",
    date: "2024年11月 · G11",
    location: "8th · Guangdong Province",
    description: "Performance highlights from the Guangdong Province Arts Exhibition.",
  },
  {
    id: "h-g10-3",
    type: "photo",
    imageUrl: "/harp/Guangdong 3.jpg",
    title: "Guangdong Province Arts Exhibition Team Photo",
    date: "2024年11月 · G11",
    location: "8th · Guangdong Province",
    description: "Team photo at the Guangdong Province Arts Exhibition.",
  },
  {
    id: "h-g10-4",
    type: "photo",
    imageUrl: "/harp/Guangdong 4.jpg",
    title: "Guangdong Province Arts Exhibition Backstage",
    date: "2024年11月 · G11",
    location: "8th · Guangdong Province",
    description: "Backstage moments from the Guangdong Province Arts Exhibition.",
  },

  {
    id: "h-g10-v1",
    type: "video",
    videoUrl: "/harp/Guangdong v1.mp4",
    imageUrl: "/harp/Guangdong v1.jpg",
    title: "Guangdong Province Arts Exhibition Video I",
    date: "2024年11月 · G11",
    location: "8th · Guangdong Province",
    description: "Video recording of the performance at the Guangdong Province Arts Exhibition.",
  },
  {
    id: "h-g10-v2",
    type: "video",
    videoUrl: "/harp/Guangdong v2.mp4",
    imageUrl: "/harp/Guangdong v2.jpg",
    title: "Guangdong Province Arts Exhibition Video II",
    date: "2024年11月 · G11",
    location: "8th · Guangdong Province",
    description: "Second video recording of the performance at the Guangdong Province Arts Exhibition.",
  },

  {
    id: "h-g10-sza-1",
    type: "photo",
    imageUrl: "/harp/Wind Festival 1.jpg",
    title: "Gold Award, 27th Shenzhen Wind Music Festival",
    date: "2023年5月 · G10",
    location: "Shenzhen Wind Music Festival",
    description:
      "Gold Award, 27th Shenzhen Wind Music Festival. The school orchestra's harp section, the entire group won the gold award.",
  },
  {
    id: "h-g10-sza-2",
    type: "photo",
    imageUrl: "/harp/Wind Festival 1.jpg",
    title: "Shenzhen Wind Music Festival Photo I",
    date: "2023年5月 · G10",
    location: "Shenzhen Wind Music Festival",
    description: "Highlights from the Shenzhen Wind Music Festival.",
  },

  {
    id: "h-g10-sza-4",
    type: "photo",
    imageUrl: "/harp/Wind Festival 3.jpg",
    title: "Shenzhen Wind Music Festival Photo III",
    date: "2023年5月 · G10",
    location: "Shenzhen Wind Music Festival",
    description: "Highlights from the Shenzhen Wind Music Festival.",
  },
  // ==================== School Flashmobs ====================
  {
    id: "h-christmas-flashmob-1-photo",
    type: "photo",
    imageUrl: "/harp/Flashmob Christmas.jpg",
    title: "First Christmas Flashmob",
    date: "202X年X月 · G11",
    location: "School Courtyard",
    description: "First Christmas Flashmob performance, a memorable event.",
  },
  {
    id: "h-christmas-flashmob-1-video",
    type: "video",
    videoUrl: "/harp/Flashmob_Christmas.mp4",
    imageUrl: "/harp/Flashmob Christmas cover 1.jpg",
    title: "First Christmas Flashmob Video",
    date: "202X年X月 · G11",
    location: "School Courtyard",
    description: "Video of the First Christmas Flashmob performance.",
  },
  {
    id: "h-christmas-flashmob-2-photo-1",
    type: "photo",
    imageUrl: "/harp/Flashmob chirstmas 1.jpg",
    title: "Second Christmas Flashmob Photo I",
    date: "202X年X月 · G11",
    location: "School Cafeteria",
    description: "Second Christmas Flashmob performance, Photo I.",
  },
  {
    id: "h-christmas-flashmob-2-photo-2",
    type: "photo",
    imageUrl: "/harp/Flashmob chirstmas 2.jpg",
    title: "Second Christmas Flashmob Photo II",
    date: "202X年X月 · G11",
    location: "School Cafeteria",
    description: "Second Christmas Flashmob performance, Photo II.",
  },
  {
    id: "h-christmas-flashmob-2-photo-3",
    type: "photo",
    imageUrl: "/harp/Flashmob chirstmas 3.jpg",
    title: "Second Christmas Flashmob Photo III",
    date: "202X年X月 · G11",
    location: "School Cafeteria",
    description: "Second Christmas Flashmob performance, Photo III.",
  },

  {
    id: "h-christmas-flashmob-2-video-1",
    type: "video",
    videoUrl: "/harp/Flashmob chirstmas v1.mp4",
    imageUrl: "/harp/Flashmob Christmas cover 1.jpg",
    title: "Second Christmas Flashmob Video I",
    date: "202X年X月 · G11",
    location: "School Cafeteria",
    description: "Video of the Second Christmas Flashmob performance, Video I.",
  },
  {
    id: "h-christmas-flashmob-2-video-2",
    type: "video",
    videoUrl: "/harp/Flashmob chirstmas v2.mp4",
    imageUrl: "/harp/Flashmob Christmas cover 1.jpg",
    title: "Second Christmas Flashmob Video II",
    date: "202X年X月 · G11",
    location: "School Cafeteria",
    description: "Video of the Second Christmas Flashmob performance, Video II.",
  },
  {
    id: "h-farewell-flashmob-photo-1",
    type: "photo",
    imageUrl: "/harp/Farewell Flashmob 1.jpg",
    title: "Farewell Flashmob Photo I",
    date: "202X年X月 · G11",
    location: "School Auditorium",
    description: "Farewell Flashmob performance, Photo I.",
  },
  {
    id: "h-farewell-flashmob-photo-2",
    type: "photo",
    imageUrl: "/harp/Farewell Flashmob 2.jpg",
    title: "Farewell Flashmob Photo II",
    date: "202X年X月 · G11",
    location: "School Auditorium",
    description: "Farewell Flashmob performance, Photo II.",
  },
  {
    id: "h-farewell-flashmob-video",
    type: "video",
    videoUrl: "/harp/Farewell Flashmob v1.mp4",
    imageUrl: "/harp/Flashmob Christmas cover 1.jpg",
    title: "Farewell Flashmob Video",
    date: "202X年X月 · G11",
    location: "School Auditorium",
    description: "Video of the Farewell Flashmob performance.",
  },

  // ==================== 其他演出 & 日常（待补充真实素材）====================

  {
    id: "h-orchestra-1",
    type: "photo",
    imageUrl: "/harp/Education Group concert 1.jpg",
    title: "Annual Concert of Education Group Photo I",
    date: "202X年12月12日",
    location: "Shenzhen Middle School Education Group Annual Concert",
    description: "Our orchestra, representing 12 schools, performed 'The Moldau' and Shostakovich's Symphony No. 5.",
  },
  {
    id: "h-orchestra-2",
    type: "photo",
    imageUrl: "/harp/Education Group concert 3.jpg", // Changed to Educational Group concert 3.jpg
    title: "Annual Concert of Education Group Photo III", // Updated title to reflect new image
    date: "202X年12月12日",
    location: "Shenzhen Middle School Education Group Annual Concert",
    description: "Our orchestra, representing 12 schools, performed 'The Moldau' and Shostakovich's Symphony No. 5.",
  },

  {
    id: "h-orchestra-v1",
    type: "video",
    videoUrl: "/harp/Education Group concert v1.mp4",
    imageUrl: "/harp/Education Group concert v1_cover.jpg",
    title: "Annual Concert of Education Group Video",
    date: "202X年12月12日",
    location: "Shenzhen Middle School Education Group Annual Concert",
    description: "Video of our orchestra performing 'The Moldau' and Shostakovich's Symphony No. 5.",
  },
  {
    id: "h-practice-1",
    type: "photo",
    imageUrl: "/harp/Daily Practice.jpg",
    title: "Daily Practice",
    date: "2024年10月",
    location: "Music Room",
    description:
      "Four hours of daily practice before the World Student Arts Festival competition.",
  },
  {
    id: "h-practice-v1",
    type: "video",
    videoUrl: "/videos/harp/Practice.mp4",
    imageUrl: "/harp/Practice_cover.jpg",
    title: "Daily Practice Video",
    date: "2024年10月",
    location: "Music Room",
    description:
      "Video of daily practice before the World Student Arts Festival competition.",
  },


]
