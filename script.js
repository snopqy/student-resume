// ปุ่มข้อความ
document.getElementById('msg-btn')?.addEventListener('click', () => {
    alert('สวัสดีครับ/ค่ะ — ขอบคุณที่เข้ามาชม Resume!');
    });
    
    // เลื่อนนุ่ม ๆ เมื่อคลิกลิงก์เมนู
    document.querySelectorAll('nav a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });
    });