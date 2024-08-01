import HistoricalCarbonFootprint from '../components/historicalCarbonFootprint';
import styles from './history.module.css';

export default function HistoryPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Historical Carbon Footprint Data</h1>
      <HistoricalCarbonFootprint />
    </div>
  );
}
