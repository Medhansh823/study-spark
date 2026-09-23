# Study Spark

Study Spark is a student-first learning workspace for CBSE students. It is designed around the complete study loop instead of a single AI chat box:

**Learn → Understand → Practice → Revise → Plan → Focus → Track**

## Product

- Class 6–10 selector
- Subject and chapter explorer
- Chapter learning launch flow
- Spark AI Tutor
- AI practice generation
- Exam-style practice modes
- Weak-topic and mistake-review flows
- Notes and flashcards
- Personal study planner
- Focus timer
- Subject progress dashboard
- Local-first browser storage
- Responsive desktop/mobile UI
- Cloudflare Pages Function AI proxy

## Hugging Face AI

The `/api/ai` function calls Hugging Face Inference Providers. The default model is `Qwen/Qwen3-4B-Instruct-2507:fastest`.

Add `HF_TOKEN` as a Cloudflare secret. Never place the token in frontend JavaScript. `HF_MODEL` can be changed to another supported model/provider.

## Development

```bash
npm install
npm run dev
npm run build
```

## Design principles

1. Students should be able to get started in seconds.
2. The AI should teach, not merely dump answers.
3. Every answer should lead naturally to practice or understanding.
4. Planning should reduce overwhelm, not create more of it.
5. Progress should help students notice improvement rather than pressure them.
6. The app should remain useful even before account sync is added.

## Next expansion

The architecture is ready for curriculum-grounded retrieval, question-image understanding, chapter knowledge packs, spaced repetition, richer mistake analytics, exam readiness, and optional account sync.