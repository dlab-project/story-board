// 앱 초기화
document.addEventListener('DOMContentLoaded', function() {
    console.log('Story Board 앱이 시작되었습니다.');
    
    // Supabase 클라이언트가 제대로 로드되었는지 확인
    if (window.supabaseClient) {
        console.log('Supabase 클라이언트가 성공적으로 로드되었습니다.');
    } else {
        console.error('Supabase 클라이언트 로드에 실패했습니다.');
    }
});
