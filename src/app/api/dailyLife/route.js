import dailyLife from '@/data/dailyLife.json';

export async function GET() {
  try {
    return Response.json(dailyLife, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching dailyLife data:', error);
    return Response.json(
      { error: 'Failed to fetch dailyLife data' },
      { status: 500 }
    );
  }
}
