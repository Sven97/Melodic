import React from 'react';
import styles from './index.module.css';

export default function Breath_Training() {
  const data = {};

  return (
    <div className={`flex-row ${styles['page']} `}>
      <div className={`flex-col ${styles['group']} `}>
        <div className={`flex-col ${styles['section_1']} `}>
          <div className={`flex-row ${styles['group_1']} `}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612560734468.png"
              className={`${styles['image']} `}
            />
            <span className={`${styles['text']} `}>MELODIC</span>
          </div>
          <div className={`flex-col ${styles['group_2']} `}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601003281785644.png"
              className={`${styles['image_1']} `}
            />
            <div className={`${styles['center-text-wrapper']} flex-col items-center ${styles['view']} `}>
              <span>Inhale and Exhale Training</span>
            </div>
            <div className={`${styles['center-text-wrapper']} flex-col items-center ${styles['view_1']} `}>
              <span>Lung Volume Training</span>
            </div>
          </div>
        </div>
        <div className={`flex-row ${styles['section_2']} `}>
          <span>Tongue and Lips Movement</span>
          <span>Training</span>
        </div>
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601003302845518.png"
          className={`${styles['image_2']} `}
        />
      </div>
      <div className={`flex-col ${styles['group_3']} `}>
        <div className={`flex-row ${styles['group_4']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599991126429152.png"
            className={`${styles['image_3']} `}
          />
          <span className={`${styles['text_5']} `}>LOG IN</span>
        </div>
        <div className={`flex-col ${styles['group_5']} `}>
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601009831172540.png"
            className={`${styles['image_4']} `}
          />
          <div className={`flex-col ${styles['text-wrapper']} `}>
            <span className={`${styles['text_6']} `}>Tongue and Lips Speech Training</span>
          </div>
        </div>
      </div>
    </div>
  );
}