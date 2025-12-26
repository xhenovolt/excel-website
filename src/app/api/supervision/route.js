import supervision from '@/data/supervision.json';

export async function GET() {
  try {
    return Response.json(supervision, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching supervision data:', error);
    return Response.json(
      { error: 'Failed to fetch supervision data' },
      { status: 500 }
    );
  }
}
