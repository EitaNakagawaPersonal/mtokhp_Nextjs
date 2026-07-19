import { getSiteContent } from "@/lib/adminContent";

function parseDateValue(value) {
  if (!value) return null;

  const normalizedValue = value.replace(/\//g, "-");
  const parsedDate = new Date(normalizedValue);

  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return parsedDate;
}

function isWithinDisplayPeriod(item) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const startDate = parseDateValue(item?.startDate);
  const endDate = parseDateValue(item?.endDate);

  if (startDate && today < startDate) {
    return false;
  }

  if (endDate && today > endDate) {
    return false;
  }

  return true;
}

export default async function News() {
  const content = await getSiteContent();
  const news = content?.news;
  const item = news?.item;

  if (!news?.enabled) {
    return null;
  }

  if (!item?.title && !item?.body && !item?.date && !item?.url) {
    return null;
  }

  if ((item?.startDate || item?.endDate) && !isWithinDisplayPeriod(item)) {
    return null;
  }

  return (
    <section className="bg-white pb-4 pt-0 md:pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm md:p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900">NEWS</h2>
          </div>

          <div className="mt-6">
            {item?.hasImage && item?.imageUrl ? (
              <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(280px,1.1fr)] lg:items-stretch">
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] w-full max-w-[320px]">
                    <img
                      src={item.imageUrl}
                      alt={item.title || "お知らせ画像"}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center text-left">
                  {item?.date ? <p className="text-sm font-medium text-slate-500">{item.date}</p> : null}
                  <h3 className="mt-3 text-xl font-semibold text-slate-800">{item?.title || "最新のお知らせ"}</h3>
                  <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{item?.body || "内容はまだ登録されていません。"}</p>
                  {item?.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-5 inline-flex text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                    >
                      詳しく見る
                    </a>
                  ) : null}
                </div>
              </div>
            ) : (
              <div className="text-left">
                {item?.date ? <p className="text-sm font-medium text-slate-500">{item.date}</p> : null}
                <h3 className="mt-3 text-xl font-semibold text-slate-800">{item?.title || "最新のお知らせ"}</h3>
                <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-600">{item?.body || "内容はまだ登録されていません。"}</p>
                {item?.url ? (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                  >
                    詳しく見る
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
