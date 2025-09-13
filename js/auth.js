class Auth {

    constructor() {
        this.setupEventListeners();  // 버튼 클릭 이벤트 연결하기
    }


    setupEventListeners() {
        // "회원가입" 링크를 클릭했을 때
        document.getElementById('show-signup').addEventListener('click', (e) => {
            e.preventDefault();
            this.showSignupForm();  // 회원가입 폼 보여주기
        });

        // 회원가입 폼의 제출 버튼을 클릭했을 때
        document.getElementById('signup').addEventListener('submit', (e) => {
            e.preventDefault();  // 페이지 새로고침 방지
            this.signup();  // 회원가입 함수 실행
        });

    }

    // 회원가입 함수
    async signup() {
        // 1. 사용자가 입력한 정보 가져오기
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const nickname = document.getElementById('signup-nickname').value;

        // 2. 모든 필드가 입력되었는지 확인
        if (!email || !password || !nickname) {
            alert('모든 필드를 입력해주세요.');
            return;
        }

        // 3. 데이터베이스에 새 사용자 정보 저장하기
        const { data, error } = await window.supabaseClient
            .from('users')           // users 테이블에
            .insert([                // 새 데이터 넣기
                {
                    email: email,
                    password: password,
                    nickname: nickname,
                    created_at: new Date().toISOString()
                }
            ]);

        // 4. 회원가입 실패 처리
        if (error) {
            alert('회원가입 실패: ' + error.message);
            return;
        }

        // 5. 회원가입 성공! 로그인 화면으로 이동
        alert('회원가입 성공!');
    }

    // 로그인 함수
    async login() {
        // 1. 사용자가 입력한 이메일과 비밀번호 가져오기
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        // 2. 입력값이 비어있으면 경고 메시지 표시
        if (!email || !password) {
            alert('이메일과 비밀번호를 입력해주세요.');
            return;
        }

        // 3. 데이터베이스에서 사용자 정보 찾기
        const { data, error } = await window.supabaseClient
        .from('users')           // users 테이블에서
        .select('*')             // 모든 컬럼 가져오기
        .eq('email', email)      // 이메일이 일치하는 것
        .eq('password', password) // 비밀번호가 일치하는 것
        .single();               // 하나만 가져오기

        // 4. 로그인 실패 처리
        if (error || !data) {
            alert('로그인 실패: 이메일 또는 비밀번호가 올바르지 않습니다.');
            return;
        }

        // 5. 로그인 성공! 사용자 정보 저장
        this.currentUser = {
            id: data.id,
            email: data.email,
            nickname: data.nickname
        };

       // 6. 로그인 성공! 메인 화면으로 이동
       alert('로그인 성공!');
    }

    // 회원가입 폼 보여주기
    showSignupForm() {
        document.getElementById('login-form').classList.add('hidden');
        document.getElementById('signup-form').classList.remove('hidden');
    }
}

// Auth 클래스를 사용할 수 있도록 전역 변수로 만들기
const auth = new Auth();