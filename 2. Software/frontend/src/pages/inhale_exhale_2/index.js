import React from 'react';
import styles from './index.module.css';

export default function Inhale_exhale_2() {
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
      <span className={`${styles['text_9']} `}>Inhale and Exhale Training Report</span>
      <div className={`justify-center ${styles['divider_2']} `}>
        <span className={`${styles['text_10']} `}>Date: 01/16/2022</span>
        <span className={`${styles['text_11']} `}>Duration: 1 min</span>
        <span className={`${styles['text_12']} `}>Rate: 60.38%</span>
      </div>
      <div className={`flex-col ${styles['group_3']} `}>
        <div className={`flex-col ${styles['group_4']} `}>
          <div className={`flex-col ${styles['image-wrapper']} `}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612563784546.png"
              className={`${styles['image_2']} ${styles['image_3']} `}
            />
          </div>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612563784546.png"
            className={`${styles['image_2']} `}
          />
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601025056160701.png"
            className={`${styles['image_5']} `}
          />
        </div>
        <span className={`${styles['text_13']} `}>GREAT</span>
        <div className={`${styles['divider_3']} `}></div>
      </div>
      <div className={`justify-between ${styles['divider_4']} `}>
        <span>00: 00</span>
        <span>00: 10</span>
        <span>00: 20</span>
        <span>00: 30</span>
        <span>00: 40</span>
        <span>00: 50</span>
        <span>01: 00</span>
      </div>
      <div className={`flex-row ${styles['equal-division']} `}>
        <div className={`flex-col items-center ${styles['equal-division-item']} `}>
          <span>Continue</span>
        </div>
        <div className={`flex-col items-center ${styles['equal-division-item_1']} `}>
          <span>Finish</span>
        </div>
      </div>
    </div>
  );
}