import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Markets from '../components/Markets';
import Projects from '../components/Projects';
import CTA from '../components/CTA';
import ServiceArea from '../components/ServiceArea';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Branham Group | EPC Contractor — Solar &amp; Infrastructure | SC, NC, GA, FL</title>
        <meta name="description" content="Full-service EPC contractor since 1979. Solar, design-build, construction management, and resilient infrastructure across SC, NC, GA, and FL." />
        <meta name="keywords" content="EPC contractor South Carolina, EPC contractor North Carolina, EPC contractor Georgia, EPC contractor Florida, solar installation SC NC GA FL, engineering procurement construction Southeast, renewable energy contractor Southeast, Branham Group Mount Pleasant SC, clean energy infrastructure, commercial solar EPC, industrial construction Southeast, solar contractor Charleston SC, solar contractor Charlotte NC, solar contractor Atlanta GA, Nature at Work SC founding member" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.branham-group.com/" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.branham-group.com/" />
        <meta property="og:title" content="Branham Group | EPC Contractor — Solar &amp; Infrastructure | SC, NC, GA, FL" />
        <meta property="og:description" content="Full-service EPC firm delivering solar, geothermal, battery storage, and resilient infrastructure across SC, NC, GA &amp; FL since 1979. Nature at Work SC Founding Member. Based in Mount Pleasant, SC." />
        <meta property="og:image" content="https://www.branham-group.com/og-image.jpg" />
        <meta property="og:site_name" content="Branham Group" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Branham Group | EPC Contractor — Solar &amp; Infrastructure | SC, NC, GA, FL" />
        <meta name="twitter:description" content="Full-service EPC contractor serving SC, NC, GA &amp; FL — solar PV, geothermal, battery storage, and critical infrastructure since 1979. Nature at Work SC Founding Member." />
        <meta name="twitter:image" content="https://www.branham-group.com/og-image.jpg" />
      </Helmet>

      <Hero />
      <About />
      <Services />
      <Markets />
      <Projects />
      <CTA />
      <ServiceArea />
      <Contact />
    </>
  );
}
