// src/utils/dateUtils.ts

export const calculateDDay = (dateString: string): string => {
    // 1. targetDate와 today 객체 생성
    const targetDate = new Date(dateString);
    const today = new Date();
    
    // 2. 시간 부분을 00:00:00으로 설정하여 날짜 단위로만 비교하도록 조정
    targetDate.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);

    // 3. 남은 시간(밀리초) 계산
    const diffTime = targetDate.getTime() - today.getTime();
    
    // 4. 밀리초를 일수로 변환하고, 혹시 모를 소수점 처리를 위해 올림(Math.ceil)
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
        return '오늘 오픈!';
    }
    if (diffDays < 0) {
        return '예매 종료';
    }
    
    return `D-${diffDays}`; 
};