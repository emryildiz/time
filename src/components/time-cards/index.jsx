import React, {useContext} from 'react'
import { TimeCard } from '../time-card'
import styles from './styles.module.css'
import datas from '../../data.json'
import { TimeframeContext } from '../../context/TimeFrameContext'

function TimeCards() {
  
  const { timeframe } = useContext(TimeframeContext); // Seçilen zaman dilimini alıyoruz

  return (
    <div className={styles.timeCards}>
      {
      datas.map((data) => {
        return(
          <TimeCard key={data.id} title={data.title} data={data.timeframes[timeframe]} variant={data.color} image={data.image}></TimeCard>
        )
      })
      }
    </div>
  )
}

export { TimeCards }