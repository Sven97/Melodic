import React from 'react';
import styles from './index.module.css';

export default function Speech_1() {
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
          <span className={`${styles['text_1']} `}>Breath Training</span>
          <span className={`${styles['text_2']} `}>Tongue and Lips Movement</span>
          <span className={`${styles['text_3']} `}>Training</span>
          <div className={`flex-col ${styles['text-wrapper']} `}>
            <span>Tongue and Lips Speech Training</span>
          </div>
        </div>
        <div className={`flex-row ${styles['group_1']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612565251544.png"
            className={`${styles['image_1']} `}
          />
          <span className={`${styles['text_5']} `}>LOG IN</span>
        </div>
      </div>
      <div className={`flex-row ${styles['divider']} `}>
        <span className={`${styles['text_6']} `}>Nasal Training</span>
        <span className={`${styles['text_7']} `}>/</span>
        <span className={`${styles['text_8']} `}>Speech Training</span>
        <span className={`${styles['text_9']} `}>/</span>
        <span className={`${styles['text_10']} `}>Even Reading Training</span>
      </div>
      <span className={`${styles['text_11']} `}>Speech Training Report</span>
      <div className={`justify-center ${styles['divider_1']} `}>
        <span className={`${styles['text_12']} `}>Date: 01/16/2022</span>
        <span className={`${styles['text_13']} `}>Rate: 80.38%</span>
      </div>
      <div className={`flex-col items-center ${styles['group_2']} `}>
        <img
          src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599868807041055.png"
          className={`${styles['image_2']} `}
        />
        <div className={`flex-col ${styles['text-wrapper_1']} `}>
          <span className={`${styles['text_14']} `}>GREAT</span>
        </div>
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