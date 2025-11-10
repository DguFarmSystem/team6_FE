// src/types/performance.ts

// 공연 예매처 정보 타입
export interface PerformancePlatform {
  name: string; // 예: "인터파크", "멜론티켓"
  link: string; // 예매처 바로가기 URL
}

// PerformanceCard 컴포넌트가 받는 데이터의 핵심 타입
export interface PerformanceCardProps {
  id: string; 
  title: string; 
  genre: string;
  location: string;
  posterUrl: string;
  bookingStartDate: string; 
  platforms: PerformancePlatform[]; 
  isInterested: boolean; 
}