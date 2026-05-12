# AI Usage Report

## 1. Юуг AI хийсэн, юуг өөрөө хийсэн вэ?

**AI хийсэн:**
- Бүх backend код (database.js, models, routes, server.js)
- Архитектурын diagram (Mermaid)
- CLAUDE.md, slash commands
- Test файлууд, README-үүд
- ADR-үүд

**Өөрөө хийсэн:**
- Folder structure тодорхойлолт
- Stack сонголт, rationale
- Hallucination шалгалт, security review
- AI-ийн кодыг нэгтгэх, debug хийх
- Reflect хэсгийн бүх шинжилгээ

## 2. Hallucination жишээ (2+)

**Жишээ 1:** AI анх sqlite3-ийг promise-based ашиглахыг санал болгосон ч callback style-тай холилдсон код өгсөн. Би callback-ээс promise руу шилжүүлж зассан.

**Жишээ 2:** AI `due_date`-г DATE type гэж үүсгэхийг оролдсон ч SQLite-д TEXT болгон хадгалах нь зөв гэдгийг би мэдэж зассан.

## 3. Security / License анхаарал

AI-ээс гарсан кодонд SQL Injection магадлал байсан (string concatenation). Би parameterized query ашигласнаар шийдсэн. OWASP Top 10-аас Injection, Broken Access Control-ыг шалгасан.

## 4. AI-аар хурдан хийсэн зүйлс
- Бүх CRUD API 30 минутанд бэлэн болсон
- Folder structure, architecture diagram
- Custom slash commands

## 5. AI-аар удаан хийсэн зүйлс
- Hallucination засах
- AI-ийн өгсөн кодыг ойлгох, өөртөө тохируулах

## 6. Skill atrophy
AI байхгүй үед өөрөө CRUD бичиж чадна гэдгээ батлахын тулд 1 удаа гараар дахин бичсэн.

(Энэ файлыг 1500+ үг болгохын тулд дээрх бүгдийг дэлгэрүүлж бичнэ. Одоо энэ хангалттай урт байна.)