import React from 'react';
import styles from './index.module.css';

export default function Welcome_Page() {
  const data = {};

  return (
    <div className={`flex-col items-center ${styles['page']} `}>
      <div className={`flex-col ${styles['section_1']} `}>
        <div className={`flex-col items-center ${styles['group']} `}>
          <div className={`flex-row ${styles['section_2']} `}>
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600577832463687.png"
              className={`${styles['image']} `}
            />
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601035646426717.png"
              className={`${styles['image_1']} `}
            />
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600581803783906.png"
              className={`${styles['image_2']} `}
            />
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600584003823365.png"
              className={`${styles['image_3']} `}
            />
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600585773957159.png"
              className={`${styles['image_4']} `}
            />
            <img
              src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600586441708576.png"
              className={`${styles['image_5']} `}
            />
            <div className={`${styles['section_3']} `}></div>
          </div>
          <div className={`${styles['section_4']} `}></div>
          <div className={`flex-col ${styles['section_5']} `}>
            <div className={`${styles['section_6']} `}></div>
          </div>
        </div>
        <div className={`flex-col ${styles['divider']} `}>
          <span className={`${styles['text']} `}>Melodic Loading ...</span>
          <div className={`flex-col items-center ${styles['divider_1']} `}>
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601035642275583.png"
              className={`${styles['image_6']} `}
            />
            <img
              src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601035648144258.png"
              className={`${styles['image_7']} `}
            />
          </div>
        </div>
      </div>
    </div>
  );
}