"use client";
import React from 'react';
import './service-display.css';
import Link from 'next/link';

export interface DisplayItem {
  imageUrl: string;
  linkTitle: string;
  serviceTitle: string;
  description: string;
  href: string;
}
export interface ServiceDisplayProps {
  service: DisplayItem
}
export default function ServiceDisplay({ service }: ServiceDisplayProps) {
  const { imageUrl, serviceTitle, description, linkTitle, href } = service;
  return (

    <div
      className="service-display-container group"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
          <div />

      <div className="service-display-overlay " />
      <div className="service-display-content">
        <h3 className="service-display-title">{serviceTitle}</h3>
        <div className="service-display-action-row">
          <p className="service-display-typography-description">{description}</p>
          <button className="service-display-action-button">
            <Link title={linkTitle} href={href}>{linkTitle}</Link>
          </button>
        </div>

      </div>
      <div className='absolute bottom-0 w-full h-1 bg-gradient-to-r from-secondary/25 via-secondary/50 to-secondary/0' />

    </div>
  );
};