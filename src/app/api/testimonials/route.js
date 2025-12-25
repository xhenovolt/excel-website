import testimonials from '@/data/testimonials.json';

export async function GET() {
  return Response.json(testimonials, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
