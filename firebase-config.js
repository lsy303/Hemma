// إعدادات مشروع Firebase (Hemma). هذه القيم ليست سرية؛ الحماية من قواعد الأمان في Firestore.
export const firebaseConfig = {
  apiKey: "AIzaSyC4wv8TdU_gYFaT9bpPQkdszjm3STcVthw",
  authDomain: "hemma-422bb.firebaseapp.com",
  projectId: "hemma-422bb",
  storageBucket: "hemma-422bb.firebasestorage.app",
  messagingSenderId: "263870495668",
  appId: "1:263870495668:web:1505fd53e222779c4410e1"
};

// إعدادات الاشتراك
export const appSettings = {
  // بريد حساب المدير (يشوف تبويب «الاشتراكات» ويقدر يفعّل العائلات).
  // لازم يكون نفس البريد المكتوب في ملف firestore.rules
  adminEmails: ["latifa.saleh@hotmail.com"],
  // رقم الواتساب للتفعيل بالصيغة الدولية بدون + (مثال: 97333334444). اتركه فاضي لإخفاء الزر.
  whatsapp: "97336777179",
  // حساب الانستقرام للتفعيل (اسم المستخدم فقط، مثال: hemma.app). الزر يفتح محادثة خاصة مع الحساب.
  // إذا عبّيت الاثنين يطلع زرّين، وإذا تركت واحد فاضي يختفي زره.
  instagram: "",
  // مدة التجربة المجانية بالأيام (لازم تطابق الرقم في firestore.rules)
  trialDays: 7
};
