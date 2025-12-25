import schoolData from '@/data/school.json';

export async function GET() {
  try {
    return Response.json(schoolData, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to fetch school data' },
      { status: 500 }
    );
  }
}
