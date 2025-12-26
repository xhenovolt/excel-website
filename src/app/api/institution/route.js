import institutionVoice from '@/data/institution.voice.json';

export async function GET() {
  try {
    return Response.json(institutionVoice, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching institution data:', error);
    return Response.json(
      { error: 'Failed to fetch institution data' },
      { status: 500 }
    );
  }
}
