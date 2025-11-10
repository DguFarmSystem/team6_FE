// src/pages/index.tsx

import Head from 'next/head';
import Header from '@/components/Layout/Header'; // Header 컴포넌트가 있어야 함
import UpcomingSales from '@/components/Home/UpcomingSales';

export default function Home() {
  return (
    <>
      <Head>
        <title>통합 티켓 알림 | 공연 예매 가이드 플랫폼</title>
        <meta name="description" content="모든 공연 예매 정보를 한 곳에서 확인하고 알림을 설정하세요." />
      </Head>
      
      {/* 헤더 (검색바 포함) */}
      <Header /> 
      
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        
        {/* 곧 예매 오픈 섹션 */}
        <UpcomingSales />
        
        {/* TODO: 나중에 인기 공연, 장르별 추천 섹션 등이 추가될 공간입니다. */}
        
      </main>
      
      {/* <footer>...</footer> */}
    </>
  );
}