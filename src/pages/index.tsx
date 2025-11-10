// pages/index.tsx

import PerformanceCard from '../components/PerformanceCard/PerformanceCard';
import { PerformanceCardProps } from '../types/Performance'; 

// 임시 Mock 데이터
const mockData: PerformanceCardProps = {
  id: 'p001',
  title: '오페라의 유령 (Phantom of the Opera)',
  genre: '뮤지컬',
  location: '블루스퀘어',
  posterUrl: 'https://via.placeholder.com/300x400?text=Phantom+Poster', // 임시 이미지 URL
  bookingStartDate: '2025-10-16T14:00:00',
  platforms: [
    { name: '인터파크', link: '#' },
    { name: '멜론티켓', link: '#' },
  ],
  isInterested: false,
};

export default function Home() {
  return (
    <div>
      <h1>공연 티켓 통합 알림 & 예매 가이드 플랫폼</h1>
      <section>
        <h2>놓치지 마세요! 곧 예매 오픈</h2>
        {/* 실제로는 map 함수를 사용하여 여러 카드를 렌더링합니다 */}
        <PerformanceCard {...mockData} />
      </section>
      {/* 여기에 다른 섹션 (예: 통합 검색) 추가 예정 */}
    </div>
  );
}