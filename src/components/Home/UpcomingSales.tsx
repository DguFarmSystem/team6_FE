// src/components/Home/UpcomingSales.tsx

import React from 'react';
import PerformanceCard from '@/components/PerformanceCard/PerformanceCard';
import { PerformanceCardProps } from '@/types/performance';

// Mock Data 정의 (실제 API에서 가져올 데이터의 형태)
const mockPerformances: PerformanceCardProps[] = [
    { id: '1', title: '뮤지컬 노트르담 드 파리', genre: '뮤지컬', location: '세종문화회관', posterUrl: 'https://via.placeholder.com/250x350?text=Notre+Dame', bookingStartDate: '2025-11-12T14:00:00', platforms: [{ name: '인터파크', link: '#' }, { name: '티켓링크', link: '#' }], isInterested: true },
    { id: '2', title: '싸이 흠뻑쇼 2026', genre: '콘서트', location: '잠실 주경기장', posterUrl: 'https://via.placeholder.com/250x350?text=Psy+Show', bookingStartDate: '2025-11-18T10:00:00', platforms: [{ name: '멜론티켓', link: '#' }], isInterested: false },
    { id: '3', title: '국립발레단 호두까기 인형', genre: '클래식', location: '예술의전당', posterUrl: 'https://via.placeholder.com/250x350?text=Nutcracker', bookingStartDate: '2025-12-05T11:00:00', platforms: [{ name: '예스24', link: '#' }, { name: '네이버', link: '#' }, { name: '옥션', link: '#' }], isInterested: false },
    { id: '4', title: '단독 콘서트 : NEXT', genre: '콘서트', location: '올림픽홀', posterUrl: 'https://via.placeholder.com/250x350?text=KPOP+NEXT', bookingStartDate: '2025-11-10T23:59:59', platforms: [{ name: '멜론티켓', link: '#' }], isInterested: false }, // D-0 테스트용
];

const UpcomingSales: React.FC = () => {
    // TODO: 나중에 React Query의 useQuery 등을 사용하여 실제 API 데이터 연동 필요
    const data = mockPerformances; 
    
    return (
        <section style={{ padding: '40px 0' }}>
            <h2>놓치지 마세요! 곧 예매 오픈 🔥</h2>
            {/* 수평 스크롤을 위한 스타일링 */}
            <div style={{ display: 'flex', gap: '20px', overflowX: 'auto', paddingBottom: '20px' }}>
                {data.map((performance) => (
                    <PerformanceCard key={performance.id} {...performance} />
                ))}
            </div>
        </section>
    );
};

export default UpcomingSales;