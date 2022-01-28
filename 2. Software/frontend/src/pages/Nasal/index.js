import React from 'react';
import styles from './index.module.css';

export default function Nasal() {
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
            <div className={`flex-row ${styles['section_3']} `}>
              <img
                src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601020036091235.png"
                className={`${styles['image_3']} `}
              />
              <img
                src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599917017488795.png"
                className={`${styles['image_4']} `}
              />
            </div>
          </div>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599873541587468.png"
            className={`${styles['image_5']} `}
          />
          <span className={`${styles['text_12']} `}>Come on!</span>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599874147680180.png"
            className={`${styles['image_6']} `}
          />
          <div className={`flex-col ${styles['section_4']} `}>
            <span>Using Your Nose</span>
            <div className={`${styles['section_5']} `}></div>
          </div>
          <div className={`${styles['section_6']} `}></div>
          <img
            src="https://codefun-proj-user-res-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433599849297405654.png"
            className={`${styles['image_7']} `}
          />
          <img
            src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433600986035535390.png"
            className={`${styles['image_8']} `}
          />
        </div>
      </div>
    </div>
  );
}