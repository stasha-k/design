import { Hero } from '../components/Hero';
import { AboutTeaser } from '../components/AboutTeaser';
import { FeaturedWork } from '../components/FeaturedWork';
import { usePageMeta } from '../hooks/usePageMeta';

export function HomePage() {
  usePageMeta(
    'Stanislava Krivošija, UX Designer',
    'UX design portfolio of Stanislava Krivošija: research-driven case studies in sustainable travel and product design, shaped by a background in healthcare.'
  );

  return (
    <div>
      <Hero />
      <AboutTeaser />
      <FeaturedWork />
    </div>
  );
}
