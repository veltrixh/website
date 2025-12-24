import React from 'react';

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'Workshop' | 'Hackathon' | 'Seminar' | 'Social';
  isUpcoming: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  type: 'faculty' | 'core' | 'lead' | 'alumni';
}

export interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<any>;
}