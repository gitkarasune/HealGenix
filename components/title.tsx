import React from "react";

export default function Title() {
  return (
    <div className="flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute w-[200%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-gradient-rotate">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(22,163,74,0.15)_0%,rgba(21,128,61,0.1)_30%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#16a34a_0%,#4f46e5_25%,#16a34a_50%,#4f46e5_75%,#16a34a_100%)] opacity-10" />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl font-bold pt-[105px] mb-6 mx-auto max-w-3xl text-center">
          Discover Personalized, Nature-Based Solutions for Knee Pain, Ulcers,
          Heart Health, and More
        </h1>

        {/* Paragraphs with gradient border effect */}
        <div className="relative group mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300" />
          <div className="relative space-y-4 backdrop-blur-sm rounded-lg p-8 shadow-xl max-w-5xl mx-auto">
            <p className="text-[15px] lg:text-lg text-gray-900 dark:text-white/85 leading-relaxed">
              Say goodbye to one-size-fits-all solutions and embrace a [15px]arter
              way to heal. Our AI platform analyzes over 5,000 natural
              compounds, unique properties of herbs, roots, and natural
              ingredients to create personalized remedies for knee/leg pain,
              ulcers, chest/heart pain, and sexual health enhancement.
            </p>

            <p className="text-[15px] lg:text-lg text-gray-900 dark:text-white/85 leading-relaxed">
              Using advanced phytonutrient profiling and predictive analytics,
              we create bespoke remedies that adapt to your unique biochemistry.
              Join pioneers in next-generation wellness and experience nature's
              power, perfected by AI.
              {/* Be part of a health revolution that combines the power of artificial
          intelligence with the purity of nature. This is the right place for
          you.{" "}
          <span className="font-medium">
            Join our waitlist today and be the first to experience the future of
            natural healing.
          </span> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
