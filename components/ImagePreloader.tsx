import Image from 'next/image'

interface ImagePreloaderProps {
  urls: string[]
}

export function ImagePreloader({ urls }: ImagePreloaderProps) {
  if (urls.length === 0) return null

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: '-9999px',
        left: '-9999px',
        width: '544px',
        height: '176px',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      {urls.map((url) => (
        <div key={url} style={{ position: 'relative', width: '544px', height: '176px' }}>
          <Image
            src={url}
            alt=""
            fill
            priority
            sizes="544px"
          />
        </div>
      ))}
    </div>
  )
}
