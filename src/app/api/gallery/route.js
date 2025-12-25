import gallery from '@/data/gallery.json';

export async function GET() {
  try {
    return Response.json(gallery, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    return Response.json(
      { error: 'Failed to fetch gallery data' },
      { status: 500 }
    );
  }
}
