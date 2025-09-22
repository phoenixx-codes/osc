import React from 'react';


// npm install react-icons
import { FaMapMarkerAlt, FaCalendarAlt, FaUsers } from 'react-icons/fa'; 



export default function EventCard({ url = '#', image = 'https://www.oscvitap.org/static/media/4.f0c6291e2c00644ded8f.jpg', title = 'Sample Title For Event', sub_title = 'Sample Subtitle', venue = 'Venue', date = 'Date', attendance = '200+' }) {

  return (
    <a href={url} className="p-2 bg-white block rounded-lg bg-opacity-90 drop-shadow-sm hover:drop-shadow-md border border-zinc-200">
      <img alt={title} src={image} className="w-full rounded-md object-cover" />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Event sub title</dt>
            <dd className="text-sm text-zinc-500">{sub_title}</dd>
          </div>
          <div>
            <dt className="sr-only">Event title</dt>
            <dd className="font-semibold text-zinc-800">{title}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
          {/* Venue Icon and Text */}
          <div className="inline-flex shrink-0 items-center gap-2">
            <FaMapMarkerAlt className="w-4 h-4 text-gray-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-zinc-500">Venue</p>
              <p className="font-medium">{venue}</p>
            </div>
          </div>
          
          {/* Date Icon and Text */}
          <div className="inline-flex shrink-0 items-center gap-2">
            <FaCalendarAlt className="w-4 h-4 text-gray-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-zinc-500">Date</p>
              <p className="font-medium">{date}</p>
            </div>
          </div>

          {/* Attendance Icon and Text */}
          <div className="inline-flex shrink-0 items-center gap-2">
            <FaUsers className="w-4 h-4 text-gray-500" />
            <div className="mt-1.5 sm:mt-0">
              <p className="text-zinc-500">Attendance</p>
              <p className="font-medium text-zinc-700">{attendance}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}