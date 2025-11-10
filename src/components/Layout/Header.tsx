// src/components/Layout/Header.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
    // 1. 검색어 상태 관리
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    // 2. 검색 실행 핸들러
    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        
        // 검색어가 비어있지 않다면
        if (searchTerm.trim()) {
            // /search 페이지로 검색어(q)를 쿼리 파라미터로 전달하며 이동
            // 예: /search?q=뮤지컬
            router.push(`/search?q=${searchTerm.trim()}`);
        }
    };

    // 간단한 인라인 스타일 (추후 CSS 모듈로 교체 권장)
    const headerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 40px',
        backgroundColor: '#333',
        color: 'white',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    };
    
    const searchInputStyle: React.CSSProperties = {
        padding: '8px 15px',
        borderRadius: '20px',
        border: 'none',
        width: '300px',
    };

    return (
        <header style={headerStyle}>
            {/* 💡 로고 / 사이트 이름 */}
            <h1 style={{ margin: 0, fontSize: '1.5em' }}>
                티켓 알림 플랫폼
            </h1>
            
            {/* 🔍 통합 검색 폼 */}
            <form onSubmit={handleSearch} style={{ display: 'flex', gap: '10px' }}>
                <input
                    type="text"
                    placeholder="공연명, 배우, 장르를 검색하세요."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={searchInputStyle}
                />
                <button type="submit" style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid white', backgroundColor: 'transparent', color: 'white', cursor: 'pointer' }}>
                    검색
                </button>
            </form>

            {/* 👤 사용자 메뉴 */}
            <nav>
                <a href="/mypage" style={{ color: 'white', textDecoration: 'none', marginLeft: '20px' }}>
                    마이페이지
                </a>
                <span style={{ marginLeft: '15px' }}>|</span>
                <a href="/login" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px' }}>
                    로그인
                </a>
            </nav>
        </header>
    );
};

export default Header;