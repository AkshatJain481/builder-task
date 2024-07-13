"use client"
import React, { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./MapComponent'), {
  ssr: false,
});

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

const SearchAndMap = ({ register }: { register: any }) => {
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
    <div className="flex flex-col max-w-[820px]">
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
          <ul className="mt-2 rounded bg-white">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSelect(suggestion)}
                className={`p-2 hover:bg-gray-100 border cursor-pointer ${query === suggestion.display_name ? 'hidden' : ''}`}
              >
                {suggestion.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
      <MapWithNoSSR selectedLocation={selectedLocation} />
    </div>
  );
};

export default SearchAndMap;