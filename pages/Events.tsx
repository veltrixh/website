import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import Reveal from '../components/Reveal';
import MagneticButton from '../components/MagneticButton';
import { EVENTS } from '../constants';
import { Event } from '../types';

const EventCard: React.FC<{ event: Event; isPast?: boolean }> = ({ event, isPast }) => (
  <Reveal direction="up">
    <GlassCard className="p-0 overflow-hidden group h-full flex flex-col md:flex-row">
       {/* Image Side */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto overflow-hidden shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${isPast ? 'grayscale group-hover:grayscale-0' : ''}`}
        />
        <div className="absolute top-4 left-4">
          <span className={`backdrop-blur-md text-xs font-bold px-3 py-1 rounded border uppercase tracking-wider ${isPast ? 'bg-gray-900/80 text-gray-300 border-white/5' : 'bg-black/60 text-white border-white/10'}`}>
            {event.category}
          </span>
        </div>
      </div>

      {/* Content Side */}
      <div className="p-6 md:p-8 flex flex-col justify-center relative w-full">
         {/* Decorative background glow inside card for upcoming events */}
        {!isPast && <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-0 pointer-events-none" />}

        <div className={`flex flex-wrap gap-4 text-sm mb-4 font-mono z-10 ${isPast ? 'text-gray-400' : 'text-accent'}`}>
          <span className="flex items-center gap-2"><Calendar size={14} /> {event.date}</span>
          <span className="flex items-center gap-2"><Clock size={14} /> {event.time}</span>
          <span className="flex items-center gap-2"><MapPin size={14} /> {event.location}</span>
        </div>

        <h3 className={`text-2xl md:text-3xl font-display font-bold mb-4 z-10 ${isPast ? 'text-gray-300' : 'text-white'}`}>{event.title}</h3>
        <p className="text-gray-400 mb-8 z-10 leading-relaxed">{event.description}</p>

        <div className="z-10 mt-auto">
          <MagneticButton variant={!isPast ? 'primary' : 'outline'} className={isPast ? 'opacity-70 hover:opacity-100' : ''}>
            {!isPast ? 'Register Now' : 'View Recap'}
          </MagneticButton>
        </div>
      </div>
    </GlassCard>
  </Reveal>
);

const Events: React.FC = () => {
  const upcomingEvents = EVENTS.filter(e => e.isUpcoming);
  const pastEvents = EVENTS.filter(e => !e.isUpcoming);

  return (
    <div className="pt-32 min-h-screen">
      <div className="container mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">Events</h1>
            <p className="text-gray-400 text-lg">Where ideas collide and innovation happens.</p>
          </div>
        </Reveal>

        {/* Upcoming Section */}
        <div className="mb-32">
            <Reveal>
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-2 h-8 bg-primary rounded-full" />
                   <h2 className="text-3xl font-display font-bold text-white">Upcoming Events</h2>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-12">
                {upcomingEvents.length > 0 ? (
                    upcomingEvents.map(event => <EventCard key={event.id} event={event} />)
                ) : (
                    <div className="text-center py-20 border border-dashed border-white/10 rounded-2xl bg-white/5">
                        <p className="text-gray-400 text-lg">No upcoming events scheduled at the moment.</p>
                    </div>
                )}
            </div>
        </div>

        {/* Past Section */}
        <div className="mb-20">
            <Reveal>
                <div className="flex items-center gap-4 mb-12 opacity-60">
                    <div className="w-2 h-8 bg-gray-500 rounded-full" />
                    <h2 className="text-3xl font-display font-bold text-white">Past Events</h2>
                </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-12">
                 {pastEvents.length > 0 ? (
                    pastEvents.map(event => <EventCard key={event.id} event={event} isPast />)
                ) : (
                    <div className="text-center py-12 opacity-50">
                        <p className="text-gray-500">No past events in the archive.</p>
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Events;