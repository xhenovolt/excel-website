import about from '@/data/about.json';

export async function GET() {
  try {
    return Response.json(about, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching about data:', error);
    return Response.json(
      { error: 'Failed to fetch about data' },
      { status: 500 }
    );
  }
}
