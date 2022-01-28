import React from 'react';
import styles from './index.module.css';

export default function Inhale_exhale_1() {
  const data = {};

  return (
    <div className={`flex-col ${styles['page']} `}>
      <div className={`flex-row ${styles['section_1']} `}>
        <div className={`flex-row ${styles['group']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612560734468.png"
            className={`${styles['image']} `}
          />
          <span className={`${styles['text']} `}>MELODIC</span>
          <div className={`flex-col ${styles['group_1']} `}>
            <span>Breath Training</span>
            <div className={`${styles['divider']} `}></div>
          </div>
          <span className={`${styles['text_2']} `}>Tongue and Lips Movement</span>
          <span className={`${styles['text_3']} `}>Training</span>
          <span className={`${styles['text_4']} `}>Tongue and Lips Speech Training</span>
        </div>
        <div className={`flex-row ${styles['group_2']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612565251544.png"
            className={`${styles['image_1']} `}
          />
          <span className={`${styles['text_5']} `}>LOG IN</span>
        </div>
      </div>
      <div className={`flex-row ${styles['divider_1']} `}>
        <span className={`${styles['text_6']} `}>Inhale and Exhale Training</span>
        <span className={`${styles['text_7']} `}>/</span>
        <span className={`${styles['text_8']} `}>Lung Volume Training</span>
      </div>
    </div>
  );
}