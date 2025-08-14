'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Tagline.module.css';

interface TaglineProps {
  'data-animate'?: string;
}

const Tagline = (props: TaglineProps) => {
  const [currentTime, setCurrentTime] = useState('');
  const [prevTime, setPrevTime] = useState('');
  const hourFirstRef = useRef<HTMLSpanElement>(null);
  const hourSecondRef = useRef<HTMLSpanElement>(null);
  const minuteFirstRef = useRef<HTMLSpanElement>(null);
  const minuteSecondRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Function to update the time in IST format (UTC+5:30)
    const updateTime = () => {
      const now = new Date();
      
      // Calculate IST by adding 5 hours and 30 minutes to UTC
      const istTime = new Date(now.getTime() + (5.5 * 60 * 60 * 1000));
      
      // Format the time as HH:MM
      const hours = istTime.getUTCHours().toString().padStart(2, '0');
      const minutes = istTime.getUTCMinutes().toString().padStart(2, '0');
      
      const newTime = `${hours}:${minutes}`;
      
      // Save previous time to compare for animations
      if (currentTime !== newTime) {
        setPrevTime(currentTime);
        setCurrentTime(newTime);
        
        // Add flip animation to digits that changed
        if (prevTime) {
          const [prevHours, prevMinutes] = prevTime.split(':');
          const [newHours, newMinutes] = newTime.split(':');
          
          if (prevHours[0] !== newHours[0] && hourFirstRef.current) {
            addFlipAnimation(hourFirstRef.current);
          }
          if (prevHours[1] !== newHours[1] && hourSecondRef.current) {
            addFlipAnimation(hourSecondRef.current);
          }
          if (prevMinutes[0] !== newMinutes[0] && minuteFirstRef.current) {
            addFlipAnimation(minuteFirstRef.current);
          }
          if (prevMinutes[1] !== newMinutes[1] && minuteSecondRef.current) {
            addFlipAnimation(minuteSecondRef.current);
          }
        }
      }
    };
    
    // Helper function to add and remove flip animation
    const addFlipAnimation = (element: HTMLElement) => {
      element.classList.add(styles.flip);
      setTimeout(() => {
        element.classList.remove(styles.flip);
      }, 500);
    };

    // Update time immediately and then every second
    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, [currentTime, prevTime]);

  // Split time into individual characters for styling
  const renderStylizedTime = () => {
    if (!currentTime || currentTime.length !== 5) return null;
    
    const [hours, minutes] = currentTime.split(':');
    
    return (
      <>
        <span className={styles.timeLabel}>IST</span>
        <span className={styles.timeDigit} ref={hourFirstRef}>{hours[0]}</span>
        <span className={styles.timeDigit} ref={hourSecondRef}>{hours[1]}</span>
        <span className={styles.timeSeparator}>:</span>
        <span className={styles.timeDigit} ref={minuteFirstRef}>{minutes[0]}</span>
        <span className={styles.timeDigit} ref={minuteSecondRef}>{minutes[1]}</span>
      </>
    );
  };

  return (
    <div className={styles.taglineContainer} {...props}>
      <div className={styles.taglineText}>
        <div>
          <span className={styles.slashRed}>//</span>
          <span className={styles.designedText}> Designed</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <div>
            <span className={styles.inDarkText}>in Darkness</span>
            <span className={styles.slashWhite}> //</span>
          </div>
          <div className={styles.timeText}>{renderStylizedTime()}</div>
        </div>
      </div>
    </div>
  );
};

export default Tagline;