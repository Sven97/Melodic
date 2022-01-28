import React from 'react';
import styles from './index.module.css';

export default function Even_reading() {
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
      <div className={`flex-col ${styles['group_2']} `}>
        <div className={`flex-row `}>
          <span className={`${styles['text_6']} `}>Nasal Training</span>
          <span className={`${styles['text_7']} `}>/</span>
          <span className={`${styles['text_8']} `}>Speech Training</span>
          <span className={`${styles['text_9']} `}>/</span>
          <span className={`${styles['text_10']} `}>Even Reading Training</span>
        </div>
        <div className={`flex-row ${styles['group_3']} `}>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599742736185926.png"
            className={`${styles['image_2']} `}
          />
          <div className={`flex-col ${styles['text-wrapper_1']} `}>
            <span className={`${styles['text_11']} `}>Feel the Virbration through Melodic Box</span>
          </div>
          <div className={`flex-col items-center ${styles['section_2']} `}>
            <div className={`flex-col items-center ${styles['image-wrapper']} `}>
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600986044336976.png"
                className={`${styles['image_3']} `}
              />
            </div>
          </div>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599845632200341.png"
            className={`${styles['image_4']} `}
          />
          <div className={`justify-between ${styles['section_3']} `}>
            <div className={`flex-col items-center ${styles['group_4']} `}>
              <span>Using Your Mouth</span>
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600986040624144.png"
                className={`${styles['image_5']} `}
              />
            </div>
            <div className={`flex-row ${styles['group_5']} `}>
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599652429706942.png"
                className={`${styles['image_6']} `}
              />
              <span className={`${styles['text_13']} `}>Good job!</span>
            </div>
          </div>
          <div className={`${styles['section_4']} `}></div>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599863317660564.png"
            className={`${styles['image_7']} `}
          />
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599849297405654.png"
            className={`${styles['image_8']} `}
          />
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600986035535390.png"
            className={`${styles['image_9']} `}
          />
        </div>
      </div>
    </div>
  );
}