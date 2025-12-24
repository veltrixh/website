import { Event, TeamMember, Stat } from './types';
import { Users, Calendar, Trophy, Zap } from 'lucide-react';

export const EVENTS: Event[] = [
  {
    id: '1',
    title: 'Microsoft ChainSphere',
    date: 'January 24, 2026',
    time: '10:00 AM - 3:00 PM',
    location: 'UEM Kolkata',
    description: 'Unlocking the power of Blockchain. Join us for deep dives into Web3, smart contracts, and the future of decentralized tech.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2832',
    category: 'Workshop',
    isUpcoming: true,
  },
  {
    id: '0',
    title: 'MSA Launch Event 2025',
    date: 'December 10, 2025',
    time: '2:00 PM - 5:00 PM',
    location: 'UEM Kolkata, Auditorium',
    description: 'The beginning of a new era. We introduced the core team, our vision for the future, and the roadmap for the upcoming year.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000',
    category: 'Social',
    isUpcoming: false,
  }
];

export const TEAM: TeamMember[] = [
  // Faculty (2)
  {
    id: 'f1',
    name: 'Dr. Sarah Connor',
    role: 'Faculty Advisor',
    image: 'https://picsum.photos/400/400?random=10',
    type: 'faculty'
  },
  {
    id: 'f2',
    name: 'Prof. Alan Grant',
    role: 'Faculty Mentor',
    image: 'https://picsum.photos/400/400?random=11',
    type: 'faculty'
  },
  // Core (2)
  {
    id: 'c1',
    name: 'Snehasis Das',
    role: 'President',
    // ----------------------------------------------------------------------------------
    // TO DISPLAY YOUR PHOTO:
    // 1. Rename your photo file to "snehasis.jpg"
    // 2. Move or copy that file into the "public" folder of this project.
    // 3. The code below ('/snehasis.jpg') will then automatically find and display it.
    // 
    // ALTERNATIVELY (Online URL):
    // If you have the image hosted online (e.g., LinkedIn, Imgur), delete '/snehasis.jpg'
    // and paste the full https:// link inside the quotes below.
    // ----------------------------------------------------------------------------------
    image: '/snehasis.jpg',
    type: 'core'
  },
  {
    id: 'c2',
    name: 'Jane Smith',
    role: 'Vice President',
    image: 'https://picsum.photos/400/400?random=13',
    type: 'core'
  },
  // Leads (9)
  { id: 'l1', name: 'Alex Rivera', role: 'Technical Lead', image: 'https://picsum.photos/400/400?random=20', type: 'lead' },
  { id: 'l2', name: 'Sam Chen', role: 'Management Lead', image: 'https://picsum.photos/400/400?random=21', type: 'lead' },
  { id: 'l3', name: 'Jordan Lee', role: 'Design Lead', image: 'https://picsum.photos/400/400?random=22', type: 'lead' },
  { id: 'l4', name: 'Casey Neistat', role: 'Content Lead', image: 'https://picsum.photos/400/400?random=23', type: 'lead' },
  { id: 'l5', name: 'Morgan Stark', role: 'PR Lead', image: 'https://picsum.photos/400/400?random=24', type: 'lead' },
  { id: 'l6', name: 'Riley Reid', role: 'Outreach Lead', image: 'https://picsum.photos/400/400?random=25', type: 'lead' },
  { id: 'l7', name: 'Jamie Foxx', role: 'Web Lead', image: 'https://picsum.photos/400/400?random=26', type: 'lead' },
  { id: 'l8', name: 'Taylor Swift', role: 'App Lead', image: 'https://picsum.photos/400/400?random=27', type: 'lead' },
  { id: 'l9', name: 'Chris Evans', role: 'Event Lead', image: 'https://picsum.photos/400/400?random=28', type: 'lead' },
  // Alumni
  {
    id: 'a1',
    name: 'Alice Wong',
    role: 'Ex-President (Google)',
    image: 'https://picsum.photos/400/400?random=14',
    type: 'alumni'
  },
   {
    id: 'a2',
    name: 'Bob Martin',
    role: 'Ex-Tech Lead (Amazon)',
    image: 'https://picsum.photos/400/400?random=15',
    type: 'alumni'
  }
];

export const STATS: Stat[] = [
  { label: 'Active Members', value: '500+', icon: Users },
  { label: 'Events Hosted', value: '45+', icon: Calendar },
  { label: 'Hackathons Won', value: '12', icon: Trophy },
  { label: 'Projects Built', value: '80+', icon: Zap },
];