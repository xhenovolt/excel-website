import academics from '@/data/academics.json';

export async function GET() {
  try {
    return Response.json(academics, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching academics data:', error);
    return Response.json(
      { error: 'Failed to fetch academics data' },
      { status: 500 }
    );
  }
}
