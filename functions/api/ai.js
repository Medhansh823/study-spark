export async function onRequestPost({request,env}){
  if(!env.NVIDIA_API_KEY)return new Response(JSON.stringify({error:'NVIDIA_API_KEY is not configured'}),{status:500,headers:{'content-type':'application/json'}});
  let b;try{b=await request.json()}catch{return new Response(JSON.stringify({error:'Invalid JSON'}),{status:400,headers:{'content-type':'application/json'}})}
  const mode=b.mode||'tutor', cls=b.className||'10', subject=b.subject||'general', topic=b.chapter||'not specified';
  const system=`You are Spark Tutor, a patient, accurate CBSE study partner for a Class ${cls} student in India. Subject: ${subject}. Topic: ${topic}. Mode: ${mode}.
Teach rather than dump answers. Use age-appropriate language. Break difficult ideas into small steps. For mathematics/science, show the method clearly. For social science/languages, use exam-ready structure and important points. Never claim textbook wording or facts were supplied unless they were. If the student gives an attempted answer, evaluate it constructively and explain what to improve. When asked for a quiz, do not reveal answers until the student has had a chance to try unless the prompt explicitly requests an answer key. Do not encourage cheating. Do not provide unsafe instructions.`;
  const prompt=String(b.prompt||'').slice(0,12000);
  const model=env.NVIDIA_MODEL||'nvidia/nemotron-3.5-lightning-30b-a3b';
  const payload={model,messages:[{role:'system',content:system},{role:'user',content:prompt}],temperature:mode==='quiz'?0.55:0.35,max_tokens:mode==='quiz'?1600:1200};
  const r=await fetch('https://integrate.api.nvidia.com/v1/chat/completions',{method:'POST',headers:{Authorization:`Bearer ${env.NVIDIA_API_KEY}`,'Content-Type':'application/json'},body:JSON.stringify(payload)});
  const d=await r.json();if(!r.ok)return new Response(JSON.stringify({error:d?.error||'Hugging Face request failed'}),{status:r.status,headers:{'content-type':'application/json'}});
  return new Response(JSON.stringify({answer:d?.choices?.[0]?.message?.content||'No answer returned.',model}),{headers:{'content-type':'application/json'}})
}