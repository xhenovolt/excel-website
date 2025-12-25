import seoData from '@/data/seo.json';

export async function GET() {
  try {
    return Response.json(seoData, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=172800',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch SEO data' },
      { status: 500 }
    );
  }
}
