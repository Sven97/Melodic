import React from 'react';
import styles from './index.module.css';

export default function Lung_volume_1() {
  const data = {};

  return (
    <div className={`flex-col ${styles['page']} `}>
      <div className={`flex-col `}>
        <div className={`flex-row ${styles['section_1']} `}>
          <div className={`flex-row ${styles['group_1']} `}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612560734468.png"
              className={`${styles['image']} `}
            />
            <span className={`${styles['text']} `}>MELODIC</span>
            <div className={`flex-col ${styles['group_2']} `}>
              <span>Breath Training</span>
              <div className={`${styles['divider']} `}></div>
            </div>
            <span className={`${styles['text_2']} `}>Tongue and Lips Movement</span>
            <span className={`${styles['text_3']} `}>Training</span>
            <span className={`${styles['text_4']} `}>Tongue and Lips Speech Training</span>
          </div>
          <div className={`flex-row ${styles['group_3']} `}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612565251544.png"
              className={`${styles['image_1']} `}
            />
            <span className={`${styles['text_5']} `}>LOG IN</span>
          </div>
        </div>
        <div className={`flex-row ${styles['group_4']} `}>
          <span className={`${styles['text_6']} `}>Inhale and Exhale Training</span>
          <span className={`${styles['text_7']} `}>/</span>
          <span className={`${styles['text_8']} `}>Lung Volume Training</span>
        </div>
      </div>
      <div className={`flex-col ${styles['group_5']} `}>
        <span className={`${styles['text_9']} `}>Lung Volume Training Report</span>
        <span className={`${styles['text_10']} `}>Date: 01/16/2022</span>
        <div className={`flex-row ${styles['group_6']} `}>
          <div className={`flex-col items-center ${styles['group_7']} `}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612567655076.png"
              className={`${styles['image_2']} `}
            />
            <div className={`flex-col items-center ${styles['section_2']} `}>
              <span className={`${styles['text_11']} `}>GREAT</span>
              <span className={`${styles['text_12']} `}>1500</span>
            </div>
          </div>
          <div className={`flex-col ${styles['group_8']} `}>
            <div className={`flex-col items-center ${styles['text-wrapper']} `}>
              <span>Continue</span>
            </div>
            <div className={`flex-col items-center ${styles['text-wrapper_1']} `}>
              <span>Finish</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}