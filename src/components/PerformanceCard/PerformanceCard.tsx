// src/components/PerformanceCard/PerformanceCard.tsx

import React from 'react';
import { PerformanceCardProps } from '@/types/Performance'; 
import styles from './PerformanceCard.module.css'; // ✨ CSS 모듈 Import

const PerformanceCard: React.FC<PerformanceCardProps> = ({
  title,
  posterUrl,
  bookingStartDate,
  platforms,
  isInterested,
}) => {
  // TODO: 1. bookingStartDate를 이용해 D-Day 계산 로직 추가
  // const dDay = calculateDDay(bookingStartDate);
  const dDay = 'D-3'; // 임시 값

  return (
    <div className="card-container">
      <img src={posterUrl} alt={title} className="poster" />
      
      <div className="info-overlay">
        {/* 🚨 D-Day 강조 영역 */}
        <span className="d-day-badge">{dDay}</span> 
        
        <h3>{title}</h3>
        
        {/* 예매처 요약 정보 */}
        <p>
          {platforms[0]?.name} {platforms.length > 1 ? `외 ${platforms.length - 1}곳` : ''}
        </p>
        
        {/* 🔔 알림 설정 버튼 */}
        <button className={isInterested ? 'interested' : 'not-interested'}>
          {isInterested ? '알림 설정 완료' : '알림 받기'}
        </button>
      </div>
    </div>
  );
};

export default PerformanceCard;