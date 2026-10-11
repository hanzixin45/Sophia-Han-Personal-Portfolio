import React, { useState } from "react"

export interface MediaCardProps {
  imageUrl: string
  isVideo?: boolean
  videoUrl?: string
  dateLine?: string
  title: string
  description?: string
  extraTag?: string
  extraTagColor?: "forest" | "wine" | "gold"
  className?: string
  onImageClick?: (imageUrl: string) => void
}

const tagColors: Record<string, string> = {
  forest: "bg-forest/10 text-forest border-forest/20",
  wine: "bg-wine/10 text-wine border-wine/20",
  gold: "bg-gold/10 text-gold border-gold/20",
}

const MediaCard: React.FC<MediaCardProps> = ({
  imageUrl,
  isVideo,
  videoUrl,
  dateLine,
  title,
  description,
  extraTag,
  extraTagColor = "wine",
  className = "",
  onImageClick,
}) => {
  const [videoDimensions, setVideoDimensions] = useState({ width: 0, height: 0 })

  const handleVideoLoadedMetadata = (event: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    setVideoDimensions({
      width: event.currentTarget.videoWidth,
      height: event.currentTarget.videoHeight,
    })
  }

  const isPortrait = videoDimensions.height > videoDimensions.width
  const videoWrapperStyle: React.CSSProperties = isVideo && videoDimensions.width > 0
    ? {
        height: "250px", // Example fixed height for video area
        backgroundColor: "#1a1a1a", // Dark background for letterboxing
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }
    : {}

  return (
    <figure className={`media-card group ${className}`}>
      <div className={`relative w-full h-auto overflow-hidden bg-cream-deep ${!isVideo ? '' : ''}`}
        style={videoWrapperStyle}
      >
        {isVideo ? (
          <video
            src={videoUrl}
            poster={imageUrl} // Use imageUrl as the poster
            controls
            playsInline
            preload="metadata"
            onLoadedMetadata={handleVideoLoadedMetadata}
            className="h-full w-full object-contain bg-black" // Added object-contain and background
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={title}
            loading="lazy"
            className="h-full w-full object-contain cursor-pointer"
            onClick={() => onImageClick && onImageClick(imageUrl)}
          />
        )}
        {isVideo && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none"> {/* Added pointer-events-none */}
            {/* The play button will be part of the video controls, but we can add an overlay for visual consistency if needed */}
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink/50 via-ink/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
      </div>
      <figcaption className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          {dateLine && (
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-mute">
              {dateLine}
            </p>
          )}
          {extraTag && (
            <span
              className={`tag-pill border ${
                tagColors[extraTagColor] ?? tagColors.wine
              }`}
            >
              {extraTag}
            </span>
          )}
        </div>
        <h3 className="mt-2 serif text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-forest">
          {title}
        </h3>
        {description && (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </figcaption>
    </figure>
  )
}

export default MediaCard
