import React from 'react';
import styles from './index.module.css';

export default function Tongue_and_lip_movement() {
  const data = {};

  return (
    <div className={`flex-row ${styles['page']} `}>
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612560734468.png"
        className={`${styles['image']} `}
      />
      <div className={`flex-col ${styles['group']} `}>
        <span className={`${styles['text']} `}>MELODIC</span>
        <div className={`flex-col items-center ${styles['group_1']} `}>
          <div className={`flex-col items-center ${styles['section_1']} `}>
            <div className={`flex-col items-center ${styles['text-wrapper']} `}>
              <span>Tongue Movement Practices</span>
            </div>
          </div>
          <div className={`${styles['grid']} `}>
            <div className={`flex-col items-center ${styles['grid-item']} `}>
              <span>Breath Training</span>
            </div>
            <div className={`flex-col items-center ${styles['grid-item_1']} `}>
              <span>Lips Movement Practices</span>
            </div>
            <div className={`flex-col items-center ${styles['grid-item_2']} `}>
              <span>Tongue and Lips Speech Training</span>
            </div>
          </div>
          <div className={`justify-between ${styles['equal-division']} `}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601003281785644.png"
              className={`${styles['equal-division-item']} `}
            />
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601003302845518.png"
              className={`${styles['equal-division-item_1']} `}
            />
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600980430247744.png"
              className={`${styles['equal-division-item_2']} `}
            />
          </div>
        </div>
      </div>
      <img
        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599991126429152.png"
        className={`${styles['image_1']} `}
      />
      <span className={`${styles['text_5']} `}>LOG IN</span>
    </div>
  );
}