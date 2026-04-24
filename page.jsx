import './styles/landing-page.css';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import IntroSection from './components/sections/IntroSection';
import SavingsCalculator from './components/sections/SavingsCalculator';
import HowItWorks from './components/sections/HowItWorks';
import LogoCloud from './components/sections/LogoCloud';
import DataInsightSection from './components/sections/DataInsightSection';
import PortfolioCards from './components/sections/PortfolioCards';
import MemberBenefits from './components/sections/MemberBenefits';
import InsightsPreview from './components/sections/InsightsPreview';
import FinalCTA from './components/sections/FinalCTA';
import Footer from './components/sections/Footer';

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <IntroSection />
        <SavingsCalculator />
        <HowItWorks />
        <LogoCloud />
        <DataInsightSection />
        <PortfolioCards />
        <MemberBenefits />
        <InsightsPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
