export const metadata = {
  title: 'About Us | Excel Islamic School',
  description: 'Learn about our history, mission, values, and leadership at Excel Islamic School - Uganda\'s premier Islamic educational institution.',
  keywords: 'about Excel Islamic School, school history, mission, values, leadership',
  openGraph: {
    title: 'About Excel Islamic School',
    description: 'Discover our 12-year legacy of Islamic excellence and academic rigor.',
    url: 'https://excelislamicschool.com/about',
    type: 'website',
    images: [
      {
        url: 'https://excelislamicschool.com/og-about.jpg',
        width: 1200,
        height: 630
      }
    ]
  }
};

export default function AboutLayout({ children }) {
  return children;
}
