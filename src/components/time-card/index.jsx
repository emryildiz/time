import styles from './styles.module.css'
import React, {useContext} from 'react'
import { TimeframeContext } from '../../context/TimeFrameContext';

function TimeCard({title, data, variant, image}) {

    const { timeframe } = useContext(TimeframeContext); // Seçilen zaman dilimini alıyoruz
    let time = ""

    switch (timeframe) {
        case "daily":
            time = "day"
            break;
        case "weekly":
            time = "week"
            break;
        case "monthly":
            time = "month"
            break;
        default:
            break;
    }

    let imagePath = "/images/" + image;
    
  return (
    <div className={styles.timeCard}>
        <div className={`${styles.cardImage} ${styles[variant]}`}>
            <img src={imagePath}></img>
        </div>
        <div className={styles.cardContent}>
            <div className={styles.upperBar}>
                <h4>{title}</h4>
                <a><img src="/images/icon-ellipsis.svg"></img></a>
            </div>

            <h2>{data.current}hrs</h2>
            <p>Last {time} - {data.previous}hrs</p>
        </div>
    </div>
  )
}

export {TimeCard} 