# Study Spark

A student-first CBSE learning workspace, rebuilt from scratch around the idea that students need more than an answer box.

## Current product

- Class 6–10 selector
- Subject and chapter explorer
- AI Tutor with Hugging Face inference
- AI practice quiz generation
- Notes
- Study planner
- Focus timer
- Progress view
- Responsive student-first UI
- Cloudflare Pages Functions AI proxy

## AI setup

Add a Hugging Face token as the Cloudflare secret `HF_TOKEN`. Never put the token in frontend code. The default model is `Qwen/Qwen3-4B-Instruct-2507:fastest` through Hugging Face Inference Providers; change `HF_MODEL` if you choose another supported provider/model.

## Local development

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

## Product direction

Study Spark is designed to become a student operating system:

**Learn → Understand → Practice → Revise → Plan → Focus → Track**

Planned next layers include curriculum-grounded retrieval, question-image understanding, chapter knowledge packs, spaced repetition, mistake analytics, exam readiness, and better persistence/authentication.
