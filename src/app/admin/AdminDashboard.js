"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [galleryFile, setGalleryFile] = useState(null);
  const [galleryFileName, setGalleryFileName] = useState("");
  const [selectedSlot, setSelectedSlot] = useState(0);
  const [newsConfig, setNewsConfig] = useState({
    enabled: false,
    item: {
      date: "",
      title: "",
      body: "",
      url: "",
      hasImage: false,
      imageUrl: "",
      startDate: "",
      endDate: "",
    },
  });
  const [newsImageFile, setNewsImageFile] = useState(null);
  const [newsImageName, setNewsImageName] = useState("");

  const loadData = async () => {
    setLoading(true);
    const response = await fetch("/api/admin/config");

    if (response.status === 401) {
      router.push("/admin/login");
      return;
    }

    const data = await response.json();
    setContent(data.content || null);
    setNewsConfig(
      data.content?.news || {
        enabled: false,
        item: {
          date: "",
          title: "",
          body: "",
          url: "",
          hasImage: false,
          imageUrl: "",
          startDate: "",
          endDate: "",
        },
      },
    );
    setNewsImageFile(null);
    setNewsImageName("");
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [router]);

  useEffect(() => {
    if (!message) {
      return;
    }

    const timer = window.setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [message]);

  const ToggleSwitch = ({ checked, onChange, label }) => (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${checked ? "bg-blue-700" : "bg-slate-300"}`}
      role="switch"
      aria-checked={checked}
      aria-label={label}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white shadow transition ${checked ? "translate-x-5" : "translate-x-1"}`}
      />
    </button>
  );

  const addGalleryImage = async (event) => {
    event.preventDefault();
    if (!galleryFile) {
      setMessage("ギャラリー画像を選択してください。" );
      return;
    }

    const formData = new FormData();
    formData.append("action", "addGalleryImage");
    formData.append("image", galleryFile);
    formData.append("slotIndex", String(selectedSlot));

    setMessage("ギャラリー画像を追加しています...");
    const response = await fetch("/api/admin/gallery", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      setMessage("ギャラリー画像を追加しました。" );
      setGalleryFile(null);
      setGalleryFileName("");
      setContent(result.content);
    } else {
      setMessage(result.error || "ギャラリー画像の追加に失敗しました。" );
    }
  };

  const saveNews = async (event) => {
    event.preventDefault();

    if (newsConfig.item.title.length > 100) {
      setMessage("見出しは100文字以内で入力してください。" );
      return;
    }

    if (newsConfig.item.body.length > 400) {
      setMessage("本文は400文字以内で入力してください。" );
      return;
    }

    const startDateValue = newsConfig.item.startDate || "";
    const endDateValue = newsConfig.item.endDate || "";
    if (startDateValue && endDateValue && startDateValue > endDateValue) {
      setMessage("表示開始日は表示終了日以前にしてください。" );
      return;
    }

    const formData = new FormData();
    formData.append("newsEnabled", String(newsConfig.enabled));
    formData.append("newsDate", newsConfig.item.date);
    formData.append("newsTitle", newsConfig.item.title);
    formData.append("newsBody", newsConfig.item.body);
    formData.append("newsUrl", newsConfig.item.url);
    formData.append("newsHasImage", String(newsConfig.item.hasImage));
    formData.append("newsStartDate", newsConfig.item.startDate);
    formData.append("newsEndDate", newsConfig.item.endDate);
    formData.append("existingImageUrl", newsConfig.item.imageUrl || "");

    if (newsImageFile) {
      formData.append("newsImage", newsImageFile);
    }

    setMessage("NEWSを保存しています...");
    const response = await fetch("/api/admin/config", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      setMessage("NEWSを更新しました。" );
      setContent(result.content);
      setNewsConfig(result.content?.news || newsConfig);
      setNewsImageFile(null);
      setNewsImageName("");
    } else {
      setMessage(result.error || "NEWSの更新に失敗しました。" );
    }
  };

  const logout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
  };

  if (loading) {
    return <div className="min-h-screen bg-slate-50 p-10">読み込み中...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white p-6 shadow-sm">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">Admin</p>
            <h1 className="text-3xl font-bold text-slate-900">管理画面</h1>
          </div>
          <button
            onClick={logout}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
          >
            ログアウト
          </button>
        </div>

        {message ? (
          <div className="fixed bottom-4 right-4 z-50 max-w-sm rounded-2xl border border-blue-200 bg-blue-700 px-4 py-3 text-sm font-medium text-white shadow-lg">
            {message}
          </div>
        ) : null}

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold text-slate-800">NEWS 編集</h2>
              <p className="mt-1 text-sm text-slate-500">トップページのNEWS表示を管理できます。</p>
            </div>
            <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-3 py-2">
              <span className="text-sm font-medium text-slate-700">表示する</span>
              <ToggleSwitch
                checked={newsConfig.enabled}
                label="NEWS表示切替"
                onChange={(value) => setNewsConfig((prev) => ({ ...prev, enabled: value }))}
              />
            </div>
          </div>

          <form onSubmit={saveNews} className="mt-5 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                日付
                <input
                  type="date"
                  value={newsConfig.item.date}
                  onChange={(event) => setNewsConfig((prev) => ({ ...prev, item: { ...prev.item, date: event.target.value } }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                見出し（100文字以内）
                <input
                  type="text"
                  value={newsConfig.item.title}
                  onChange={(event) => setNewsConfig((prev) => ({ ...prev, item: { ...prev.item, title: event.target.value } }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                  maxLength={100}
                />
              </label>
            </div>

            <label className="block text-sm font-medium text-slate-700">
              本文（400文字以内）
              <textarea
                value={newsConfig.item.body}
                onChange={(event) => setNewsConfig((prev) => ({ ...prev, item: { ...prev.item, body: event.target.value } }))}
                className="mt-1 min-h-28 w-full rounded-lg border border-slate-300 px-3 py-2"
                maxLength={400}
              />
            </label>

            <label className="block text-sm font-medium text-slate-700">
              URL
              <input
                type="text"
                value={newsConfig.item.url}
                onChange={(event) => setNewsConfig((prev) => ({ ...prev, item: { ...prev.item, url: event.target.value } }))}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                placeholder="https://example.com"
              />
            </label>

            <div className="grid gap-4 md:grid-cols-2">
              <label className="block text-sm font-medium text-slate-700">
                表示開始日
                <input
                  type="date"
                  value={newsConfig.item.startDate}
                  onChange={(event) => setNewsConfig((prev) => ({ ...prev, item: { ...prev.item, startDate: event.target.value } }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </label>
              <label className="block text-sm font-medium text-slate-700">
                表示終了日
                <input
                  type="date"
                  value={newsConfig.item.endDate}
                  onChange={(event) => setNewsConfig((prev) => ({ ...prev, item: { ...prev.item, endDate: event.target.value } }))}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </label>
            </div>

            <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="text-sm font-medium text-slate-700">画像を添付する</span>
              <ToggleSwitch
                checked={newsConfig.item.hasImage}
                label="NEWS画像添付切替"
                onChange={(value) =>
                  setNewsConfig((prev) => ({
                    ...prev,
                    item: { ...prev.item, hasImage: value, imageUrl: value ? prev.item.imageUrl : "" },
                  }))
                }
              />
            </div>

            {newsConfig.item.hasImage ? (
              <div className="rounded-xl border border-slate-200 p-4">
                <div className="block text-sm font-medium text-slate-700">
                  <span className="mb-2 block">画像ファイル</span>
                  <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                    <span>画像を選択</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0] || null;
                        setNewsImageFile(file);
                        setNewsImageName(file ? file.name : "");
                      }}
                      className="hidden"
                    />
                  </label>
                  <p className="mt-2 text-sm text-slate-500">
                    {newsImageName ? `選択中: ${newsImageName}` : newsConfig.item.imageUrl ? "既存画像を使用します" : "画像を選択してください"}
                  </p>
                </div>
              </div>
            ) : null}

            <button className="rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800">
              NEWSを保存する
            </button>
          </form>
        </section>

        <section className="rounded-2xl bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-slate-800">レジンテーブル ギャラリー</h2>
          <p className="mt-1 text-sm text-slate-500">新しいギャラリー画像を追加します。</p>

          <form onSubmit={addGalleryImage} className="mt-5 space-y-4">
            <div className="block text-sm font-medium text-slate-700">
              <span className="mb-2 block">更新する枚数</span>
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 9 }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedSlot(index)}
                    className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                      selectedSlot === index
                        ? "bg-emerald-700 text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    第{index + 1}枚目
                  </button>
                ))}
              </div>
              <p className="mt-2 text-sm text-slate-500">現在の対象: 第{selectedSlot + 1}枚目</p>
            </div>

            <div className="rounded-xl border border-slate-200 p-4">
              {content?.resinTable?.galleryImages?.[selectedSlot] ? (
                <img
                  src={content.resinTable.galleryImages[selectedSlot]}
                  alt={`ギャラリー ${selectedSlot + 1}`}
                  className="h-40 w-full rounded-lg object-cover"
                />
              ) : (
                <div className="flex h-40 w-full items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
                  まだ画像がありません
                </div>
              )}
            </div>

            <div className="block text-sm font-medium text-slate-700">
              <span className="mb-2 block">画像ファイル</span>
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-emerald-600 bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700">
                <span>画像を選択</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files?.[0] || null;
                    setGalleryFile(file);
                    setGalleryFileName(file ? file.name : "");
                  }}
                  className="hidden"
                />
              </label>
              <p className="mt-2 text-sm text-slate-500">
                {galleryFileName ? `選択中: ${galleryFileName}` : "ファイルを選択してください"}
              </p>
            </div>
            <button className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800">
              この枚数に反映する
            </button>
          </form>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {Array.from({ length: 9 }, (_, index) => {
              const image = content?.resinTable?.galleryImages?.[index];
              return (
                <div key={`${image || "empty"}-${index}`} className="overflow-hidden rounded-xl border border-slate-200">
                  {image ? (
                    <img src={image} alt={`ギャラリー ${index + 1}`} className="h-40 w-full object-cover" />
                  ) : (
                    <div className="flex h-40 w-full items-center justify-center bg-slate-50 text-sm text-slate-500">
                      第{index + 1}枚目未設定
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
