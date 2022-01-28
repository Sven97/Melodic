import React from 'react';
import styles from './index.module.css';

export default function Main_Menu() {
  const data = {};

  return (
    <div className={`flex-col ${styles['page']} `}>
      <div className={`justify-between `}>
        <div className={`flex-row ${styles['group_1']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612560734468.png"
            className={`${styles['image']} `}
          />
          <span className={`${styles['text']} `}>MELODIC</span>
        </div>
        <div className={`flex-row ${styles['group_2']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599991126429152.png"
            className={`${styles['image_1']} `}
          />
          <span className={`${styles['text_1']} `}>LOG IN</span>
        </div>
      </div>
      <div className={`flex-row ${styles['equal-division']} `}>
        <div className={`flex-col ${styles['equal-division-item']} `}>
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601009812695994.png"
            className={`${styles['image_2']} `}
          />
          <div className={`${styles['bottom-text-wrapper']} flex-col items-center ${styles['view']} `}>
            <span>Breath Training</span>
          </div>
        </div>
        <div className={`flex-col ${styles['equal-division-item_1']} `}>
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601009827386926.png"
            className={`${styles['image_3']} `}
          />
          <div className={`flex-row ${styles['section_1']} `}>
            <span>Tongue and Lips Movement</span>
            <span>Training</span>
          </div>
        </div>
        <div className={`flex-col ${styles['equal-division-item_2']} `}>
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601009831172540.png"
            className={`${styles['image_4']} `}
          />
          <div className={`${styles['bottom-text-wrapper']} flex-col items-center ${styles['view_1']} `}>
            <span>Tongue and Lips Speech Training</span>
          </div>
        </div>
      </div>
    </div>
  );
}