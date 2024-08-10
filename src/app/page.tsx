import CarbonFootprintPage from './components/displayCarbon';
import GenerateReport from './components/generateReport';

export default function Home() {
  return (
    <main>
      <CarbonFootprintPage />
      <GenerateReport />
    </main>
  );
}