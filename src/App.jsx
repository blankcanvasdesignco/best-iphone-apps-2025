import { useState } from "react";
import "./App.css";
import apple_dl from "./assets/apple_dl.png";
import screen1 from "./assets/screen1.jpg";
import screen2 from "./assets/screen2.jpg";
import screen3 from "./assets/screen3.jpg";
import screen4 from "./assets/screen4.jpg";
import panoslice1 from "./assets/panoslice/panoslice1.webp";
import panoslice2 from "./assets/panoslice/panoslice2.webp";
import panoslice3 from "./assets/panoslice/panoslice3.webp";
import panoslice4 from "./assets/panoslice/panoslice4.webp";
import panoslice5 from "./assets/panoslice/panoslice5.webp";
import panoslice6 from "./assets/panoslice/panoslice6.webp";
import panoslice7 from "./assets/panoslice/panoslice7.webp";
import panoslice8 from "./assets/panoslice/panoslice8.webp";
import swipekit1 from "./assets/swipekit/swipekit1.webp";
import swipekit2 from "./assets/swipekit/swipekit2.webp";
import swipekit3 from "./assets/swipekit/swipekit3.webp";
import swipekit4 from "./assets/swipekit/swipekit4.webp";
import swipekit5 from "./assets/swipekit/swipekit5.webp";
import rene1 from "./assets/rene/rene1.webp";
import rene2 from "./assets/rene/rene2.webp";
import rene3 from "./assets/rene/rene3.webp";
import rene4 from "./assets/rene/rene4.webp";
import rene5 from "./assets/rene/rene5.webp";
import lek1 from "./assets/lek/lek1.webp";
import lek2 from "./assets/lek/lek2.webp";
import lek3 from "./assets/lek/lek3.webp";
import lek4 from "./assets/lek/lek4.webp";
import lek5 from "./assets/lek/lek5.webp";
import lek6 from "./assets/lek/lek6.webp";
import lek7 from "./assets/lek/lek7.webp";
import lono1 from "./assets/lono/lono1.webp";
import lono2 from "./assets/lono/lono2.webp";
import lono3 from "./assets/lono/lono3.webp";
import lono4 from "./assets/lono/lono4.webp";
import lono5 from "./assets/lono/lono5.webp";
import lono6 from "./assets/lono/lono6.webp";
import lono7 from "./assets/lono/lono7.webp";
import tawk1 from "./assets/tawk/tawk1.webp";
import tawk2 from "./assets/tawk/tawk2.webp";
import tawk3 from "./assets/tawk/tawk3.webp";
import tawk4 from "./assets/tawk/tawk4.webp";
import tawk5 from "./assets/tawk/tawk5.webp";

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
              { src: screen1, alt: "Feature 1" },
              { src: screen2, alt: "Feature 2" },
              { src: screen3, alt: "Feature 3" },
              { src: screen4, alt: "Feature 4" },
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
          src={apple_dl}
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
                { src: panoslice1, alt: "Feature 1" },
                { src: panoslice2, alt: "Feature 2" },
                { src: panoslice3, alt: "Feature 3" },
                { src: panoslice4, alt: "Feature 4" },
                { src: panoslice5, alt: "Feature 5" },
                { src: panoslice6, alt: "Feature 6" },
                { src: panoslice7, alt: "Feature 7" },
                { src: panoslice8, alt: "Feature 8" },
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
            src={apple_dl}
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
                { src: swipekit1, alt: "Feature 1" },
                { src: swipekit2, alt: "Feature 2" },
                { src: swipekit3, alt: "Feature 3" },
                { src: swipekit4, alt: "Feature 4" },
                { src: swipekit5, alt: "Feature 5" },

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
            src={apple_dl}
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
                { src: rene1, alt: "Feature 1" },
                { src: rene2, alt: "Feature 2" },
                { src: rene3, alt: "Feature 3" },
                { src: rene4, alt: "Feature 4" },
                { src: rene5, alt: "Feature 5" },
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
            src={apple_dl}
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
                { src: lek1, alt: "Feature 1" },
                { src: lek2, alt: "Feature 2" },
                { src: lek3, alt: "Feature 3" },
                { src: lek4, alt: "Feature 4" },
                { src: lek5, alt: "Feature 5" },
                { src: lek6, alt: "Feature 6" },
                { src: lek7, alt: "Feature 7" },
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
            src={apple_dl}
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
                { src: lono1, alt: "Feature 1" },
                { src: lono2, alt: "Feature 2" },
                { src: lono3, alt: "Feature 3" },
                { src: lono4, alt: "Feature 4" },
                { src: lono5, alt: "Feature 5" },
                { src: lono6, alt: "Feature 6" },
                { src: lono7, alt: "Feature 7" },
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
            src={apple_dl}
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
                { src: tawk1, alt: "Feature 1" },
                { src: tawk2, alt: "Feature 2" },
                { src: tawk3, alt: "Feature 3" },
                { src: tawk4, alt: "Feature 4" },
                { src: tawk5, alt: "Feature 5" },
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
            src={apple_dl}
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
