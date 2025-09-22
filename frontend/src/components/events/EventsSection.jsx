import React from 'react';
import EventCard from './EventCard'; // Make sure the path is correct

export default function EventsSection() {
  return (
    <div className="max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-full gap-2">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
}