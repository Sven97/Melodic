import React from 'react';
import styles from './index.module.css';

export default function Lung_volume() {
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
      <div className={`flex-col ${styles['group_3']} `}>
        <div className={`flex-row `}>
          <span className={`${styles['text_6']} `}>Inhale and Exhale Training</span>
          <span className={`${styles['text_7']} `}>/</span>
          <span className={`${styles['text_8']} `}>Lung Volume Training</span>
        </div>
        <div className={`flex-col items-center ${styles['group_4']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599628974782279.png"
            className={`${styles['image_2']} `}
          />
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599629054506520.png"
            className={`${styles['image_3']} `}
          />
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599634504374283.png"
            className={`${styles['image_4']} `}
          />
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599634818464748.png"
            className={`${styles['image_5']} `}
          />
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599635739469538.png"
            className={`${styles['image_6']} `}
          />
          <div className={`flex-col ${styles['section_2']} `}>
            <div className={`justify-end ${styles['group_5']} `}>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599652429706942.png"
                className={`${styles['image_7']} `}
              />
              <span className={`${styles['text_9']} `}>Good job!</span>
            </div>
            <div className={`flex-row ${styles['group_6']} `}>
              <div className={`flex-row ${styles['group_7']} `}>
                <div className={`flex-col items-center ${styles['section_3']} `}>
                  <div className={`flex-row ${styles['section_4']} `}>
                    <div className={`flex-row ${styles['section_5']} `}>
                      <img
                        src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599655144984285.png"
                        className={`${styles['image_8']} `}
                      />
                      <span className={`${styles['text_10']} `}>200</span>
                    </div>
                    <span className={`${styles['text_11']} `}>300</span>
                  </div>
                  <span className={`${styles['text_12']} `}>500</span>
                </div>
                <span className={`${styles['text_13']} `}>1000</span>
              </div>
              <span className={`${styles['text_14']} `}>1500</span>
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600986035535390.png"
                className={`${styles['image_9']} `}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}