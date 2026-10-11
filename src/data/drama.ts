// ============================================================
// Drama 页面数据 - 修改此文件即可更新戏剧经历
// ============================================================

export interface TimelineEvent {
  id: string
  year: string
  title: string
  description: string
  icon?: string
}

export interface Production {
  id: string
  type: "photo" | "video"
  imageUrl: string
  videoUrl?: string
  playName: string
  season: string
  role: string
  description?: string
}

const IMG = (p: string) =>
  `https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=${encodeURIComponent(p)}&image_size=landscape_4_3`

export const timelineEvents: TimelineEvent[] = [
  {
    id: "sms-drama-founding",
    year: "SEPTEMBER 2025",
    title: "From an Idea to a Drama Club",
    description:
      "I founded SMS Drama! and took on the work of bringing the club to life—from preparing the establishment application and organizing its structure to designing promotional materials and recruiting members. Over 40 students joined, forming our first creative community.",
  },
  {
    id: "sms-drama-learning",
    year: "FALL 2025 – SPRING 2026",
    title: "Learning Theater Together",
    description:
      "Throughout Grade 11, I organized and led regular workshops exploring theater history, tragedy and comedy, character development, stage movement, and vocal expression. Through discussions, improvisation, and group exercises, members gradually discovered the many different ways to tell a story.",
  },
  {
    id: "sms-drama-creative",
    year: "2025–2026",
    title: "Creative Exploration: From Scripts to Stories",
    description:
      "Beyond studying existing plays, I encouraged members to develop original scripts and experiment with their own characters, dialogue, and scenes. Some explored acting, while others discovered interests in writing, directing, and stage design. Every contribution helped shape what our club could become.",
  },
  {
    id: "sms-drama-transition",
    year: "2026",
    title: "Leadership Transition: Passing the Torch",
    description:
      "As a new generation of student leaders prepared to take over, I began passing on the experience, materials, and responsibilities involved in running the club. I hoped SMS Drama! would continue to evolve with the ideas and creativity of its future members.",
  },
  {
    id: "sms-drama-faust",
    year: "2026",
    title: "The Second Generation: A New Chapter: Faust",
    description:
      "Under its new student leadership, SMS Drama! brought Faust to the stage for an audience of over 200. Although I was no longer leading the production, watching the club continue to create and perform was especially meaningful. The stage we had built was now becoming theirs.",
  },
]

export const productions: Production[] = [
  {
    id: "p9",
    type: "photo",
    imageUrl: "/images/drama/百团大战.jpg",
    playName: "Club Recruitment Fair",
    season: "SEPTEMBER 2025",
    role: "Organizer & Presenter",
    description: "At our school's annual club fair, where over 100 student organizations gathered to recruit new members, I introduced SMS Drama! to the school community for the first time. From designing promotional materials and club merchandise to preparing our booth and engaging with prospective members, I worked to turn a newly founded club into something students could recognize and connect with. It was exciting to see our ideas take shape and meet students who shared our enthusiasm for theater.",
  },
  {
    id: "p10",
    type: "photo",
    imageUrl: "/images/drama/Class.jpg",
    playName: "Drama Workshops",
    season: "2025–2026",
    role: "Workshop Leader",
    description: "Throughout Grade 11, I designed and led regular club sessions introducing members to different aspects of theater, from its history and dramatic genres to character development, stage movement, and vocal expression. Rather than simply giving lectures, I incorporated scene analysis, improvisation, group discussions, and acting exercises to make each session interactive. My favorite part was watching members gradually become more comfortable experimenting with characters, sharing their interpretations, and bringing their own ideas into the room.",
  },
]
