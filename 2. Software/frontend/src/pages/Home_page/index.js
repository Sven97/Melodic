import React from 'react';
import styles from './index.module.css';

export default function Home_page() {
  const data = {};

  return (
    <div className={`flex-row ${styles['page']} `}>
      <div className={`flex-row ${styles['section_1']} `}>
        <img
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612560734468.png"
          className={`${styles['image']} `}
        />
        <span className={`${styles['text']} `}>MELODIC</span>
      </div>
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599991126429152.png"
        className={`${styles['image_1']} `}
      />
      <span className={`${styles['text_1']} `}>LOG IN</span>
      <span className={`${styles['text_2']} `}>MELODIC</span>
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600123508090214.png"
        className={`${styles['image_2']} `}
      />
      <div className={`flex-col items-center ${styles['section_2']} `}>
        <div className={`flex-col items-center ${styles['text-wrapper']} `}>
          <span>Get Started</span>
        </div>
      </div>
      <span className={`${styles['text_4']} `}>
        is a set of affordable and simpe hardware and serious game software for the professional speech rehabilitation
        to help children between 0-4 years old with hearing loss to speak. It can solve the problems that current
        therapies are high-cost and speech pathologists are inadequate.
      </span>
    </div>
  );
}