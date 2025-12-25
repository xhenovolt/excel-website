import contact from '@/data/contact.json';

export async function GET() {
  try {
    return Response.json(contact, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching contact data:', error);
    return Response.json(
      { error: 'Failed to fetch contact data' },
      { status: 500 }
    );
  }
}
