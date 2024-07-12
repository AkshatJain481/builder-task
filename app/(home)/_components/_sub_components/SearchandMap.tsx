"use client"
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from "leaflet"
interface Location {
  place_id: number;
  lat: string;
  lon: string;
  display_name: string;
}

function debounce<F extends (...args: any[]) => any>(func: F, waitFor: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): Promise<ReturnType<F>> => {
    return new Promise((resolve) => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => resolve(func(...args)), waitFor);
    });
  };
}
function createCustomIcon() {
  return L.divIcon({
    html: `
      <svg width="35" height="43" viewBox="0 0 35 43" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33.8934 17.2874C33.8934 29.5029 17.7597 41.7185 17.7597 41.7185C17.7597 41.7185 1.62598 29.5029 1.62598 17.2874C1.62598 12.9677 3.32578 8.82494 6.35144 5.77047C9.3771 2.71599 13.4808 1 17.7597 1C22.0386 1 26.1423 2.71599 29.168 5.77047C32.1936 8.82494 33.8934 12.9677 33.8934 17.2874Z" fill="#EF5C5C" stroke="#EF5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M29.5095 17.3256C29.4616 26.1549 17.6531 34.9205 17.6531 34.9205C17.6531 34.9205 5.94015 26.0275 5.98798 17.1982C6.0049 14.0759 7.26019 11.0883 9.47772 8.8925C11.6952 6.69669 14.6934 5.4726 17.8125 5.48949C20.9316 5.50639 23.9163 6.7629 26.1099 8.9826C28.3035 11.2023 29.5264 14.2034 29.5095 17.3256Z" fill="white" stroke="#EF5C5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <g clip-path="url(#clip0_49_5236)">
        <path d="M12.3037 15.3256L17.7777 11.0681L23.2516 15.3256V22.016C23.2516 22.3386 23.1234 22.648 22.8953 22.8762C22.6672 23.1043 22.3578 23.2324 22.0352 23.2324H13.5201C13.1975 23.2324 12.8881 23.1043 12.66 22.8762C12.4319 22.648 12.3037 22.3386 12.3037 22.016V15.3256Z" stroke="#EF5C5C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M15.9531 23.2323V17.1501H19.6024V23.2323" stroke="#EF5C5C" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_49_5236">
        <rect width="14.5972" height="14.5972" fill="white" transform="translate(10.4795 9.85156)"/>
        </clipPath>
        </defs>
      </svg>
    `,
    className: "custom-icon",
    iconSize: [35, 43],
    iconAnchor: [17, 43],
  });
}
const customIcon = createCustomIcon();

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  map.setView(center, 13);
  return null;
}

const SearchAndMap= ({register } : {register : any}) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<[number, number] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchDebounced = useRef(
    debounce(async (input: string) => {
      if (input.trim() === '') return [];

      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(input)}&limit=5`;
      const response = await fetch(url);
      return await response.json();
    }, 300)
  ).current;

  useEffect(() => {
    const fetchSuggestions = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const results = await searchDebounced(query);
        setSuggestions(results);
      } catch (err) {
        console.error('Error fetching suggestions:', err);
        setError('Failed to fetch suggestions. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (query) {
      fetchSuggestions();
    } else {
      setSuggestions([]);
    }
  }, [query, searchDebounced]);

  const handleSelect = (location: Location) => {
    setSelectedLocation([parseFloat(location.lat), parseFloat(location.lon)]);
    setQuery(location.display_name);
    setSuggestions([]);
  };

  return (
    <div className=" flex flex-col max-w-[820px]">
      <div className="p-4 z-10">
        <input
          type="text"
          value={query}
          {...register("Location")}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for a location"
          className="w-full p-2 border rounded"
        />
        {isLoading && <div>Loading...</div>}
        {error && <div className="text-red-500">{error}</div>}
        {suggestions.length > 0 && (
          <ul className="mt-2  rounded bg-white">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion)}
                className={`p-2 hover:bg-gray-100 border cursor-pointer ${query === suggestion.display_name? ' hidden' : " "} `}
              >
                {query === suggestion.display_name?(<></>):(<>{suggestion.display_name}</>)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="h-[350px]">
        <MapContainer
          center={selectedLocation || [0,0]}
          zoom={selectedLocation ? 13 : 2}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {selectedLocation && (
            <Marker position={selectedLocation} icon={customIcon} />
          )}
          {selectedLocation && <ChangeView center={selectedLocation} />}
        </MapContainer>
      </div>
    </div>
  );
};

export default SearchAndMap;