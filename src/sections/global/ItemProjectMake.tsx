"use client";
import Image from "next/image";

export default function ItemProjectMake() {
  return (
    <div className="max-w-md bg-white rounded-2xl shadow-lg p-3 mx-auto">
      {/* Image container */}
      <div className="relative flex gap-2 mb-4">
        {/* Main image */}
        <div className="relative flex-1 h-48">
          {/* Price and rating overlay */}
          <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
            <div className="flex items-center gap-1">
              <span className="text-gray-500 line-through text-sm">$83.74</span>
              <span className="bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg">
                $83.74
              </span>
            </div>
            <div className="flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg">
              <svg
                className="w-4 h-4 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>4.2</span>
            </div>
          </div>

          <Image
            src="https://images.unsplash.com/photo-1489447068241-b3490214e879"
            alt="Niagara Falls"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Side images */}
        <div className="flex flex-col gap-2">
          <div className="relative w-20 h-[5.75rem]">
            <Image
              src="https://images.unsplash.com/photo-1601924994987-69e26d50dc26"
              alt="Destination 1"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="relative w-20 h-[5.75rem]">
            <Image
              src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa"
              alt="Destination 2"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="text-xs text-gray-500">
          Posted date: 07 Nov 2024 9:30 PM
        </div>

        <h3 className="font-semibold text-gray-900">
          Adventure Seekers Expedition
        </h3>

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            {/* Location */}
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-sm">06-07 Nov 24</span>
            </div>

            {/* Booked count */}
            <div className="flex items-center gap-2 text-gray-600">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="text-sm">12 Booked</span>
            </div>
          </div>

          {/* Menu button */}
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
