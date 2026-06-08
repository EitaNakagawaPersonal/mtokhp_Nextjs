
import Image from 'next/image';

const realEstateData = {
		title: "不動産事業",
		description: [
				"土地活用で新たな需要を創造する。",
		]
};

export default function Top() {
		return (
				// フルブリード背景画像 + ダークオーバーレイで強い区切りを作る
				<section className="relative font-serif-jp w-full">
						<div className="absolute inset-0 z-0">
								<Image
										src="/images/products/residential-building.avif"
										alt="不動産イメージ"
										fill
										className="object-cover"
								/>
								<div className="absolute inset-0 bg-black/35" />
						</div>

						<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
								<div className="min-h-[75vh] md:min-h-[60vh] flex flex-col justify-center text-white">
										<div className="max-w-2xl">
												<h2 className="text-4xl sm:text-5xl font-bold mb-8"> 
														{realEstateData.title}
												</h2>
												<div className="space-y-6">
														{realEstateData.description.map((paragraph, index) => (
																<p key={index} className="leading-relaxed text-lg opacity-95"> 
																		{paragraph}
																</p>
														))}
												</div>
										</div>
								</div>
						</div>
				</section>
		);
}

