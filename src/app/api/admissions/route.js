import admissions from '@/data/admissions.json';

export async function GET() {
  try {
    return Response.json(admissions, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching admissions data:', error);
    return Response.json(
      { error: 'Failed to fetch admissions data' },
      { status: 500 }
    );
  }
}
