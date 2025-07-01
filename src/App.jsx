import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-white text-black px-4 md:px-16 py-8">
      {/* Header */}
      <nav className="flex justify-start gap-5 items-center mb-12">
        <div className="text-xl font-medium cursor-pointer">Home</div>
        <div className="text-xl font-medium cursor-pointer">Tutorials</div>
      </nav>

      {/* Main Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        BEST IPHONE APPS 2025
      </h1>

      {/* Preview Gallery */}

      <div className="flex justify-center relative mb-12">
        {/* Left fade */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-white/90 via-white/60 to-transparent rounded-l-xl" />
        {/* Right fade */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-white/90 via-white/60 to-transparent rounded-r-xl" />
        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
          <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
            {[
              { src: "/screen1.jpg", alt: "Feature 1" },
              { src: "/screen2.jpg", alt: "Feature 2" },
              { src: "/screen3.jpg", alt: "Feature 3" },
              { src: "/screen4.jpg", alt: "Feature 4" },
              // Add more images here as needed
            ].map((img, idx) => (
              <div
                key={img.src + idx}
                className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 w-40 md:w-52 h-72 md:h-80 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-gray-100"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* App Store Button */}
      <div className="flex justify-center mb-20">
        <img
          src="/apple_dl.png"
          alt="Download on App Store"
          className="w-48 h-16 object-cover"
        />
      </div>

      {/* Second Section */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
        TRENDING IPHONE APP 2025
      </h2>

      <div>
        <hr className="my-12 border-gray-300" />
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="text-2xl font-bold underline">
            #1 Panoslice: Photo Swipe Collage
            <span className="ml-4 text-yellow-500 text-3xl">★★★★★</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-gray-500 text-lg">
            Get app
          </button>
        </div>

        {/* 
          Updated image gallery container:
          - All corners are rounded (rounded-2xl).
          - Side fades are removed.
          - Sleek gradient background.
        */}
        <div className="flex justify-center relative mb-12">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                { src: "/panoslice/panoslice1.webp", alt: "Feature 1" },
                { src: "/panoslice/panoslice2.webp", alt: "Feature 2" },
                { src: "/panoslice/panoslice3.webp", alt: "Feature 3" },
                { src: "/panoslice/panoslice4.webp", alt: "Feature 4" },
                { src: "/panoslice/panoslice5.webp", alt: "Feature 5" },
                { src: "/panoslice/panoslice6.webp", alt: "Feature 6" },
                { src: "/panoslice/panoslice7.webp", alt: "Feature 7" },
                { src: "/panoslice/panoslice8.webp", alt: "Feature 8" },
                // Add more images here as needed
              ].map((img, idx) => (
                <div
                  key={img.src + idx}
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 w-40 md:w-52 h-72 md:h-80 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white  "
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          Panoslice is a unique collage & story maker for instagram. Photo dump
          your camera roll using seamless carousels! Create aesthetics like
          Polaroid, Film, Digital Scrapbooks in minutes on 10+ slides. Create
          post layouts like an influencer!
        </p>

        <div className="flex justify-center my-12">
          <img
            src="/apple_dl.png"
            alt="Download on App Store"
            className="w-48 h-16 object-cover"
          />
        </div>

        <hr className="my-12 border-gray-300" />
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="text-2xl font-bold underline">
            #2 SwipeKit : Photo Collage Maker
            <span className="ml-4 text-yellow-500 text-3xl">★★★★★</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-gray-500 text-lg">
            Get app
          </button>
        </div>

        <div className="flex justify-center relative mb-12">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                { src: "/swipekit/swipekit1.webp", alt: "Feature 1" },
                { src: "/swipekit/swipekit2.webp", alt: "Feature 2" },
                { src: "/swipekit/swipekit3.webp", alt: "Feature 3" },
                { src: "/swipekit/swipekit4.webp", alt: "Feature 4" },
                { src: "/swipekit/swipekit5.webp", alt: "Feature 5" },

                // Add more images here as needed
              ].map((img, idx) => (
                <div
                  key={img.src + idx}
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 w-40 md:w-52 h-72 md:h-80 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white  "
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          SwipeKit makes it fast and effortless to create photo collages,
          swipe-style slideshows, and stunning UGC content, right from your
          phone. Whether you're a content creator, brand, or just someone who
          loves sharing on socials, SwipeKit helps you post better visuals,
          faster.
        </p>

        <div className="flex justify-center my-12">
          <img
            src="/apple_dl.png"
            alt="Download on App Store"
            className="w-48 h-16 object-cover"
          />
        </div>

        <hr className="my-12 border-gray-300" />
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="text-2xl font-bold underline">
            #3 Rene: AI Filters, Collage Edit
            <span className="ml-4 text-yellow-500 text-3xl">★★★★★</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-gray-500 text-lg">
            Get app
          </button>
        </div>

        <div className="flex justify-center relative mb-12">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                { src: "/rene/rene1.webp", alt: "Feature 1" },
                { src: "/rene/rene2.webp", alt: "Feature 2" },
                { src: "/rene/rene3.webp", alt: "Feature 3" },
                { src: "/rene/rene4.webp", alt: "Feature 4" },
                { src: "/rene/rene5.webp", alt: "Feature 5" },
                // Add more images here as needed
              ].map((img, idx) => (
                <div
                  key={img.src + idx}
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 w-40 md:w-52 h-72 md:h-80 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white  "
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          Most editing apps give you tools. Rene gives you the final look. No
          sliders, no layers, no stress. Just pick a vibe and it’s done. Built
          for creators, content lovers, and aesthetic girlies who want more than
          a filter.
        </p>

        <div className="flex justify-center my-12">
          <img
            src="/apple_dl.png"
            alt="Download on App Store"
            className="w-48 h-16 object-cover"
          />
        </div>

        <hr className="my-12 border-gray-300" />
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="text-2xl font-bold underline">
            #4 Grow your Linkedin : Lek AI
            <span className="ml-4 text-yellow-500 text-3xl">★★★★★</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-gray-500 text-lg">
            Get app
          </button>
        </div>

        <div className="flex justify-center relative mb-12">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                { src: "/lek/lek1.webp", alt: "Feature 1" },
                { src: "/lek/lek2.webp", alt: "Feature 2" },
                { src: "/lek/lek3.webp", alt: "Feature 3" },
                { src: "/lek/lek4.webp", alt: "Feature 4" },
                { src: "/lek/lek5.webp", alt: "Feature 5" },
                { src: "/lek/lek6.webp", alt: "Feature 6" },
                { src: "/lek/lek7.webp", alt: "Feature 7" },
                // Add more images here as needed
              ].map((img, idx) => (
                <div
                  key={img.src + idx}
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 w-40 md:w-52 h-72 md:h-80 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white  "
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          Lek is an AI-powered LinkedIn post writing assistant designed to help
          entrepreneurs, freelancers, founders, professionals, and startups
          build personal brands and achieve growth. Whether you're attracting
          talent, generating leads, looking for a job or establishing thought
          leadership, Lek empowers you to create engaging LinkedIn content
          easily.
        </p>

        <div className="flex justify-center my-12">
          <img
            src="/apple_dl.png"
            alt="Download on App Store"
            className="w-48 h-16 object-cover"
          />
        </div>

        <hr className="my-12 border-gray-300" />
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="text-2xl font-bold underline">
            #5 Lono : collage & reels maker
            <span className="ml-4 text-yellow-500 text-3xl">★★★★★</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-gray-500 text-lg">
            Get app
          </button>
        </div>

        <div className="flex justify-center relative mb-12">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                { src: "/lono/lono1.webp", alt: "Feature 1" },
                { src: "/lono/lono2.webp", alt: "Feature 2" },
                { src: "/lono/lono3.webp", alt: "Feature 3" },
                { src: "/lono/lono4.webp", alt: "Feature 4" },
                { src: "/lono/lono5.webp", alt: "Feature 5" },
                { src: "/lono/lono6.webp", alt: "Feature 6" },
                { src: "/lono/lono7.webp", alt: "Feature 7" },
                // Add more images here as needed
              ].map((img, idx) => (
                <div
                  key={img.src + idx}
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 w-40 md:w-52 h-72 md:h-80 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white  "
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          Make Collage videos, Short videos, Tiktok videos & IG reels in seconds
          using AI. Upload multiple photos, Cutout reels, apply presets and get
          ready to post. An AI-Based photo and video editor application that
          allows you to create Aesthetic filters & Vintage effects as like
          vintage photography for social media with minimal effort.
        </p>

        <div className="flex justify-center my-12">
          <img
            src="/apple_dl.png"
            alt="Download on App Store"
            className="w-48 h-16 object-cover"
          />
        </div>

        <hr className="my-12 border-gray-300" />
      </div>

      <div>
        <div className="flex flex-col md:flex-row items-center justify-between py-8">
          <div className="text-2xl font-bold underline">
            #6 Tawk2 : Relationship cards
            <span className="ml-4 text-yellow-500 text-3xl">★★★★★</span>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-2 rounded-full border border-gray-500 text-lg">
            Get app
          </button>
        </div>

        <div className="flex justify-center relative mb-12">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                { src: "/tawk/tawk1.webp", alt: "Feature 1" },
                { src: "/tawk/tawk2.webp", alt: "Feature 2" },
                { src: "/tawk/tawk3.webp", alt: "Feature 3" },
                { src: "/tawk/tawk4.webp", alt: "Feature 4" },
                { src: "/tawk/tawk5.webp", alt: "Feature 5" },
                // Add more images here as needed
              ].map((img, idx) => (
                <div
                  key={img.src + idx}
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 w-40 md:w-52 h-72 md:h-80 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white  "
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <p>
          Looking to spark deeper connections with your partner or add fun to
          your game nights? Dive into a world of deep questions, partner
          questions, and exciting games that bring you closer. Whether you're
          exploring your love language, tackling relationship questions, or
          engaging in naughty games, this app offers the ultimate experience for
          couples, best friends, and beyond.
        </p>

        <div className="flex justify-center my-12">
          <img
            src="/apple_dl.png"
            alt="Download on App Store"
            className="w-48 h-16 object-cover"
          />
        </div>

        <hr className="my-12 border-gray-300" />
      </div>
    </div>
  );
}

export default App;
