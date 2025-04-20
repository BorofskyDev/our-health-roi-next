// app/api/og/route.tsx
import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const title = searchParams.get('title') || 'Our Health ROI'
    const subtitle =
      searchParams.get('subtitle') ||
      'Explore how your tax dollars fund life-saving medical research'

    // You can create dynamic designs based on the page
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ffffff',
            backgroundImage:
              'linear-gradient(to bottom right, #f0f9ff, #e0f2fe)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              padding: '0 60px',
            }}
          >
            <h1
              style={{
                fontSize: 72,
                fontWeight: 'bold',
                color: '#0284c7',
                marginBottom: 20,
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 28,
                color: '#475569',
                maxWidth: '80%',
                lineHeight: 1.4,
              }}
            >
              {subtitle}
            </p>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: unknown) {
    if (e instanceof Error) {
      console.log(`${e.message}`)
    } else {
      console.log("Unknown error occurred")
    }
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
