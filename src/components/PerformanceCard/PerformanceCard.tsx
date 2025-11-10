// src/components/PerformanceCard/PerformanceCard.tsx

import React from 'react';
import { PerformanceCardProps } from '@/types/performance'; // 타입 import
import { calculateDDay } from '@/utils/dateUtils'; // D-Day 로직 import
import styles from './PerformanceCard.module.css'; // CSS 모듈 import

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  posterUrl,
  bookingStartDate,
  platforms,
  isInterested,
}) => {
  
  const dDay = calculateDDay(bookingStartDate); 

  // 알림 버튼 클릭 핸들러 (더미)
  const handleAlarmToggle = () => {
    console.log(`${title}의 알림 상태를 토글합니다.`);
    // TODO: 여기에 실제 알림 상태를 변경하는 API 호출 로직이 들어갑니다.
  };

  return (
    <div className={styles.cardContainer}>
      <img src={posterUrl} alt={title} className={styles.poster} />
      
      {/* D-Day 뱃지 */}
      <span className={styles.dDayBadge}>{dDay}</span> 
      
      <div className={styles.infoOverlay}>
        <h3 className={styles.title}>{title}</h3>
        
        {/* 예매처 요약 정보 */}
        <p className={styles.platformText}>
          {platforms[0]?.name} {platforms.length > 1 ? `외 ${platforms.length - 1}곳` : ''}
        </p>
        
        {/* 알림 설정 버튼 */}
        <button 
          className={`${styles.alarmButton} ${isInterested ? styles.interested : styles.notInterested}`}
          onClick={handleAlarmToggle}
        >
          {isInterested ? '🔔 알림 설정 완료' : '알림 받기'}
        </button>
      </div>
    </div>
  );
};

export default PerformanceCard;