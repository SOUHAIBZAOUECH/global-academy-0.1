# Global Academy — دليل التشغيل والنشر

## ما هذا المشروع؟
هذا هو الهيكل الأساسي الحقيقي (وليس Demo) لمنصة Global Academy، مبني بـ Next.js + TypeScript + Prisma + Tailwind. يحتوي حاليًا على:
- ✅ صفحة الهبوط الكاملة (تعمل فعليًا)
- ✅ صفحات تسجيل الدخول/إنشاء حساب (واجهة فقط، بدون منطق مصادقة بعد)
- ✅ مخطط قاعدة البيانات الكامل (Prisma schema بكل الجداول)
- ⏳ لم يُبنَ بعد: منطق المصادقة الفعلي، Dashboards، الدفع، AI Tutor — سنبنيها في الرسائل القادمة تباعًا فوق هذا الأساس

## الحسابات التي تحتاجها (كلها مجانية للبدء)

| الحساب | الرابط | لماذا |
|---|---|---|
| GitHub | github.com | لتخزين الكود ورفعه |
| Vercel | vercel.com | لاستضافة المشروع وتشغيله أونلاين |
| Neon أو Supabase | neon.tech / supabase.com | قاعدة بيانات PostgreSQL مجانية |
| Stripe (لاحقًا) | dashboard.stripe.com | لتفعيل الدفع الحقيقي |
| Anthropic Console (لاحقًا) | console.anthropic.com | لتفعيل AI Tutor الحقيقي |
| Cloudflare R2 أو AWS S3 (لاحقًا) | — | لتخزين الفيديوهات والملفات |

## خطوات النشر (بدون أي إعداد محلي)

1. **ارفع هذا المجلد كاملًا إلى مستودع GitHub جديد** (اسحب كل الملفات إلى صفحة "Upload files" في مستودعك).
2. **في Vercel**: Add New Project → اربط حساب GitHub → اختر المستودع → Deploy.
3. **أنشئ قاعدة بيانات** في Neon أو Supabase، وانسخ رابط الاتصال (`postgresql://...`).
4. **في إعدادات Vercel → Environment Variables**، أضف:
   - `DATABASE_URL` = رابط قاعدة البيانات الذي نسخته
   - `NEXTAUTH_SECRET` = أي نص عشوائي طويل (يمكنك توليده من الموقع generate-secret.vercel.app/32)
   - `NEXTAUTH_URL` = رابط موقعك على Vercel (مثال: `https://global-academy.vercel.app`)
5. **في إعدادات Build Command بـ Vercel**، غيّره إلى:
   ```
   prisma migrate deploy && next build
   ```
   هذا سينشئ كل جداول قاعدة البيانات تلقائيًا عند كل نشر.
6. اضغط **Redeploy**. خلال دقائق سيكون موقعك الحقيقي جاهزًا على رابط Vercel.

## إن كان لديك Node.js محليًا (اختياري)
```bash
npm install
cp .env.example .env    # ثم عدّل القيم داخله
npx prisma migrate dev --name init
npm run dev
```

## الخطوات القادمة
سنضيف تباعًا فوق هذا الأساس: منطق تسجيل الدخول الفعلي (NextAuth + bcrypt)، Student/Instructor/Admin Dashboards، صفحة الكورس والمشغّل، نظام الدفع (Stripe Adapter)، وAI Tutor (Anthropic Adapter) — كل جزء كملفات جاهزة تُضاف لنفس المشروع.
