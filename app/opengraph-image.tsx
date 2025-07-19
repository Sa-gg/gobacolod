import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'GoBacolod - Smart Transportation for Bacolod City'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '40px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
              fontSize: '40px',
            }}
          >
            🚌
          </div>
          <h1
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              margin: 0,
              background: 'linear-gradient(45deg, #FFD700, #FFA500)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            GoBacolod
          </h1>
        </div>
        <p
          style={{
            fontSize: '32px',
            textAlign: 'center',
            margin: 0,
            opacity: 0.9,
            maxWidth: '800px',
          }}
        >
          Smart Travel & Commute for Bacolod City
        </p>
        <p
          style={{
            fontSize: '24px',
            textAlign: 'center',
            margin: '20px 0 0 0',
            opacity: 0.7,
          }}
        >
          AI-powered route suggestions • Real-time jeepney tracking
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
}
