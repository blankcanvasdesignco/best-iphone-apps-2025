import { useState } from "react";
import "./App.css";
import apple_dl from "./assets/apple_dl.png";
import screen1 from "./assets/screen1.png";
import screen2 from "./assets/screen2.png";
import screen3 from "./assets/screen3.png";
import screen4 from "./assets/screen4.png";
import screen5 from "./assets/screen5.png";
import screen6 from "./assets/screen6.png";
import screen7 from "./assets/screen7.png";
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
import lono1 from "./assets/lono/lono1.webp";
import lono2 from "./assets/lono/lono2.webp";
import lono3 from "./assets/lono/lono3.webp";
import lono4 from "./assets/lono/lono4.webp";
import lono5 from "./assets/lono/lono5.webp";
import lono6 from "./assets/lono/lono6.webp";
import lono7 from "./assets/lono/lono7.webp";
import parent1 from "./assets/parent/parent1.webp";
import parent2 from "./assets/parent/parent2.webp";
import parent3 from "./assets/parent/parent3.webp";
import parent4 from "./assets/parent/parent4.webp";
import parent5 from "./assets/parent/parent5.webp";
import parent6 from "./assets/parent/parent6.webp";
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
import tawk1 from "./assets/tawk/tawk1.webp";
import tawk2 from "./assets/tawk/tawk2.webp";
import tawk3 from "./assets/tawk/tawk3.webp";
import tawk4 from "./assets/tawk/tawk4.webp";
import tawk5 from "./assets/tawk/tawk5.webp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-white text-black px-4 md:px-16 py-8">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          BEST IPHONE APPS 2025
        </h1>

        {/* Preview Gallery */}

        <div className="flex justify-center relative mb-12">
          {/* Left fade */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 rounded-l-xl" />
          {/* Right fade */}
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 rounded-r-xl" />
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
            <div className="flex w-fit p-4 bg-gradient-to-r from-slate-50 via-blue-100 to-emerald-50 border border-black/10 shadow-xl rounded-2xl gap-8 backdrop-blur-md">
              {[
                {
                  src: screen1,
                  alt: "Feature 1",
                  link: "https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810",
                },
                {
                  src: screen2,
                  alt: "Feature 2",
                  link: "https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550",
                },
                {
                  src: screen3,
                  alt: "Feature 3",
                  link: "https://apps.apple.com/app/lono-collage-reels-maker/id1632742723",
                },
                {
                  src: screen4,
                  alt: "Feature 4",
                  link: "https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951",
                },
                {
                  src: screen5,
                  alt: "Feature 5",
                  link: "https://apps.apple.com/app/parent-101-parenting-tips/id6737198424",
                },
                {
                  src: screen6,
                  alt: "Feature 6",
                  link: "https://apps.apple.com/app/tawk2-relationship-cards/id6738306118",
                },
                {
                  src: screen7,
                  alt: "Feature 7",
                  link: "https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680",
                },
                // Add more images here as needed
              ].map((img, idx) => (
                <a
                  key={img.src + idx}
                  href={img.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-gray-100 flex-shrink-0"
                  style={{
                    width: "200px",
                    textDecoration: "none",
                  }}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-full object-contain block"
                    style={{
                      maxWidth: "100%",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Second Section */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center md:mt-24">
          TRENDING IPHONE APPS 2025
        </h2>

        <div>
          <hr className="mt-8 md:my-12 border-gray-300" />
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #1 */}
                <span className="text-2xl font-bold underline">#1</span>
                {/* App Icon */}
                <img
                  src={screen1}
                  alt="Panoslice App Icon"
                  className="w-16 h-16 rounded-2xl border border-gray-300"
                />
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold underline">
                  Panoslice: Photo Swipe Collage
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">4.5</span>
                  <span className="text-lg">(1.9k+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </div>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
          </div>

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
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Panoslice is a unique collage & story maker for instagram. Photo
            dump your camera roll using seamless carousels! Create aesthetics
            like Polaroid, Film, Digital Scrapbooks in minutes on 10+ slides.
            Create post layouts like an influencer!
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/panoslice-photo-swipe-collage/id1592547810"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #2 */}
                <span className="text-2xl font-bold underline">#2</span>
                {/* App Icon */}
                <img
                  src={screen1}
                  alt="Panoslice App Icon"
                  className="w-16 h-16 rounded-2xl border border-gray-300"
                />
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold underline">
                  SwipeKit : Photo Collage Maker
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">5</span>
                  <span className="text-lg">(10+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </div>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
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
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
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
            <a
              href="https://apps.apple.com/in/app/swipekit-photo-collage-maker/id6745084550"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #3 */}
                <span className="text-2xl font-bold underline">#3</span>
                {/* App Icon */}
                <img
                  src={screen1}
                  alt="Panoslice App Icon"
                  className="w-16 h-16 rounded-2xl border border-gray-300"
                />
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold underline">
                  Lono : collage & reels maker
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">4.4</span>
                  <span className="text-lg">(400+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </div>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/lono-collage-reels-maker/id1632742723"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
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
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Make Collage videos, Short videos, Tiktok videos & IG reels in
            seconds using AI. Upload multiple photos, Cutout reels, apply
            presets and get ready to post. An AI-Based photo and video editor
            application that allows you to create Aesthetic filters & Vintage
            effects as like vintage photography for social media with minimal
            effort.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/lono-collage-reels-maker/id1632742723"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #4 */}
                <span className="text-2xl font-bold underline">#4</span>
                {/* App Icon */}
                <img
                  src={screen1}
                  alt="Panoslice App Icon"
                  className="w-16 h-16 rounded-2xl border border-gray-300"
                />
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold underline">
                  Rene: AI Filters, Collage Edit
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">5</span>
                  <span className="text-lg">(10+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Photo & Video</span>
                </div>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
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
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Most editing apps give you tools. Rene gives you the final look. No
            sliders, no layers, no stress. Just pick a vibe and it’s done. Built
            for creators, content lovers, and aesthetic girlies who want more
            than a filter.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/rene-ai-filters-collage-edit/id6744745951"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #5 */}
                <span className="text-2xl font-bold underline">#5</span>
                {/* App Icon */}
                <img
                  src={screen1}
                  alt="Panoslice App Icon"
                  className="w-16 h-16 rounded-2xl border border-gray-300"
                />
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold underline">
                  Parent 101 : Parenting Tips
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">5</span>
                  <span className="text-lg">(10+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Education</span>
                </div>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/parent-101-parenting-tips/id6737198424"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
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
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Parenting is full of challenges, whether it’s managing mealtime,
            supporting your child’s emotional regulation, or planning routines
            that promote growth and confidence. Many parents search for support,
            structure, and expert advice to help navigate critical milestones
            like sleep training, breastfeeding, and toddler development.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/parent-101-parenting-tips/id6737198424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #6 */}
                <span className="text-2xl font-bold underline">#6</span>
                {/* App Icon */}
                <img
                  src={screen1}
                  alt="Panoslice App Icon"
                  className="w-16 h-16 rounded-2xl border border-gray-300"
                />
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold underline">
                  Tawk2 : Relationship cards
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">5</span>
                  <span className="text-lg">(10+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Entertainment</span>
                </div>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/tawk2-relationship-cards/id6738306118"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
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
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
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
            engaging in naughty games, this app offers the ultimate experience
            for couples, best friends, and beyond.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/tawk2-relationship-cards/id6738306118"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>

          <hr className="mt-8 md:my-12 border-gray-300" />
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-row items-center gap-4">
                {/* #7 */}
                <span className="text-2xl font-bold underline">#7</span>
                {/* App Icon */}
                <img
                  src={screen1}
                  alt="Panoslice App Icon"
                  className="w-16 h-16 rounded-2xl border border-gray-300"
                />
              </div>
              {/* Title and Ratings */}
              <div className="flex flex-col items-center md:items-start">
                <span className="text-2xl font-bold underline">
                  Grow your Linkedin : Lek AI
                </span>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500 text-xl ml-1">★</span>
                  <span className="text-lg">4.2</span>
                  <span className="text-lg">(10+)</span>
                  <span className="mx-2 text-lg">|</span>
                  <span className="text-lg">Productivity</span>
                </div>
              </div>
            </div>
            {/* Get App Button */}
            <a
              href="https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 md:mt-0 px-6 py-2 min-w-32 rounded-full border border-gray-500 text-lg inline-block text-center"
            >
              Get app
            </a>
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
                    className="transition-transform hover:scale-105 hover:shadow-2xl duration-200 flex items-center justify-center rounded-xl overflow-hidden border border-black/20 shadow-lg bg-white"
                    style={{
                      width: "200px",
                    }}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-contain block"
                      style={{
                        maxWidth: "100%",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p>
            Lek is an AI-powered LinkedIn post writing assistant designed to
            help entrepreneurs, freelancers, founders, professionals, and
            startups build personal brands and achieve growth. Whether you're
            attracting talent, generating leads, looking for a job or
            establishing thought leadership, Lek empowers you to create engaging
            LinkedIn content easily.
          </p>

          <div className="flex justify-center my-12">
            <a
              href="https://apps.apple.com/app/grow-your-linkedin-lek-ai/id6702005680"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple_dl}
                alt="Download on App Store"
                className="w-48 h-16 object-cover"
              />
            </a>
          </div>
        </div>
      </div>

      <footer className="w-full py-8 border-t border-gray-200 bg-black text-center text-gray-200 text-sm">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div>
            &copy; {new Date().getFullYear()} Trending iPhone Apps. All rights
            reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Twitter
            </a>
            <a
              href="mailto:hello@trendingiphoneapps.com"
              className="hover:underline"
            >
              Contact
            </a>
            <a
              href="https://www.producthunt.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Product Hunt
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
