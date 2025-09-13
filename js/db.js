// Supabase 데이터베이스 연결 설정
const SUPABASE_URL = 'https://brdwgsnffgsmubnfjmyi.supabase.co'
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyZHdnc25mZmdzbXVibmZqbXlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3MjIzMjEsImV4cCI6MjA3MDI5ODMyMX0.ULBLQCiNfe3pvolcR1jIX1lWDoUs3xEceuKzUWkX9pw"

// Supabase 클라이언트를 전역에서 사용할 수 있도록 설정
// 다른 JavaScript 파일에서 window.supabaseClient로 사용할 수 있습니다
window.supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)