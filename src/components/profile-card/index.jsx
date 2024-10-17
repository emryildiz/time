import React, {useContext} from 'react'
import styles from './styles.module.css'
import { TimeframeContext } from '../../context/TimeFrameContext';

function ProfileCard() {
  const { timeframe, setTimeframe } = useContext(TimeframeContext);

  const handleTimeframeChange = (newTimeframe) => {
    setTimeframe(newTimeframe); // Yeni zaman dilimini ayarla
  };

  return (
    <div className={styles.profileCard}>
        <div className={styles.profileSection}>
            <div className={styles.profileImage}>
                <img src="/images/image-jeremy.png" />
            </div>
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
        </div>
        <div className={styles.navMenu}>
        <button className={timeframe === 'daily' && styles.active} onClick={() => handleTimeframeChange('daily')}>Daily</button>
        <button className={timeframe === 'weekly' && styles.active} onClick={() => handleTimeframeChange('weekly')}>Weekly</button>
        <button className={timeframe === 'monthly' && styles.active} onClick={() => handleTimeframeChange('monthly')}>Monthly</button>
        </div>
    </div>
  )
}

export { ProfileCard }