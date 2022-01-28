import React from 'react';
import styles from './index.module.css';

export default function Tonge_and_lip_speech() {
  const data = {};

  return (
    <div className={`flex-row ${styles['page']} `}>
      <div className={`flex-col ${styles['group']} `}>
        <div className={`flex-row ${styles['group_1']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599612560734468.png"
            className={`${styles['image']} `}
          />
          <span className={`${styles['text']} `}>MELODIC</span>
        </div>
        <div className={`flex-col items-end ${styles['group_2']} `}>
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600980423556189.png"
            className={`${styles['image_1']} `}
          />
          <div className={`flex-col items-center ${styles['text-wrapper']} `}>
            <span>Breath Training</span>
          </div>
        </div>
      </div>
      <div className={`flex-row ${styles['group_3']} `}>
        <div className={`flex-col ${styles['group_4']} `}>
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600980423439357.png"
            className={`${styles['image_2']} `}
          />
          <div className={`flex-row ${styles['section_1']} `}>
            <span>Tongue and Lips Movement</span>
            <span>Training</span>
          </div>
        </div>
        <div className={`flex-col ${styles['section_2']} `}>
          <div className={`justify-end ${styles['group_5']} `}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599991126429152.png"
              className={`${styles['image_3']} `}
            />
            <span className={`${styles['text_4']} `}>LOG IN</span>
          </div>
          <div className={`flex-col ${styles['group_6']} `}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600980430247744.png"
              className={`${styles['image_4']} `}
            />
            <div className={`flex-col items-center ${styles['text-wrapper_1']} `}>
              <span>Nasal Training</span>
            </div>
            <div className={`${styles['text-wrapper_2']} flex-col items-center ${styles['view']} `}>
              <span>Speech Training</span>
            </div>
            <div className={`${styles['text-wrapper_2']} flex-col items-center ${styles['view_1']} `}>
              <span>Even Reading Training</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}