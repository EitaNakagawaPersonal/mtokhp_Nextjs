"use client";
import { useState } from 'react';

const base = "w-full rounded-md border border-gray-300 bg-white p-3 focus:border-blue-600 focus:ring-blue-600";

export default function InquiryForm({ type, fields, submitLabel }) {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('送信中...');
    const form = e.target;
    try {
      const controller = new AbortController();
      const t = setTimeout(() => controller.abort(), 10000);
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
      clearTimeout(t);
      if (res.ok) { setStatus('送信しました。ありがとうございます！'); form.reset(); }
      else setStatus(`エラーが発生しました（${res.status}）。もう一度お試しください。`);
    } catch (err) {
      setStatus(err.name === 'AbortError' ? '送信がタイムアウトしました。通信環境を確認してください。' : 'ネットワークエラーが発生しました。');
    }
  };

  return (
    <section id="inquiry" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-2xl mx-auto rounded-lg bg-white/90 p-6 sm:p-10 shadow-lg">
        <h2 className="text-center text-2xl font-extrabold text-gray-900">{type}お問い合わせフォーム</h2>
        <form onSubmit={handleSubmit} action={process.env.NEXT_PUBLIC_FORMSPREE_URL} method="POST" className="mt-8 space-y-5">
          <input type="hidden" name="inquiry_type" value={type} />
          {fields.map((f) => (
            <div key={f.name}>
              <label htmlFor={f.name} className="mb-1 block text-sm font-medium text-gray-700">
                {f.label}{f.required && <span className="text-red-600"> *</span>}
              </label>
              {f.options ? (
                <select id={f.name} name={f.name} required={f.required} defaultValue="" className={base}>
                  <option value="" disabled>選択してください</option>
                  {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              ) : f.textarea ? (
                <textarea id={f.name} name={f.name} rows={5} required={f.required} className={base} />
              ) : (
                <input id={f.name} name={f.name} type={f.type || 'text'} required={f.required} className={base} />
              )}
            </div>
          ))}
          <button type="submit" disabled={status === '送信中...'} className="w-full rounded-full bg-blue-700 py-4 font-bold text-white hover:bg-blue-600 disabled:opacity-50 transition-colors">
            {status === '送信中...' ? '送信中...' : submitLabel}
          </button>
          {status && <p className="text-center text-gray-800">{status}</p>}
        </form>
      </div>
    </section>
  );
}
