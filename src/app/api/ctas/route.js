import ctas from '@/data/ctas.json';

export async function GET() {
  try {
    return Response.json(ctas, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching CTAs data:', error);
    return Response.json(
      { error: 'Failed to fetch CTAs data' },
      { status: 500 }
    );
  }
}
