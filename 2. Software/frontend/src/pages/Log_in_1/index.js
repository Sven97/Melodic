import React from 'react';
import styles from './index.module.css';

export default function Log_in_1() {
  const data = {};

  return (
    <div className={`flex-col ${styles['page']} `}>
      <div className={`flex-col ${styles['image-wrapper']} `}>
        <img
          src="https://project-user-resource-1256085488.cos.ap-guangzhou.myqcloud.com/61f3ae885a7e3f0310e2d6a4/61f3aeaba4955900114d556d/16433601000110962845.png"
          className={`${styles['image']} `}
        />
      </div>
      <div className={`flex-col items-end ${styles['section_1']} `}>
        <div className={`flex-col ${styles['section_2']} `}>
          <span className={`${styles['text']} `}>WELCOME</span>
          <div className={`flex-col ${styles['group']} `}>
            <span className={`${styles['text_1']} `}>USERNAME</span>
            <span className={`${styles['text_2']} `}>Sven</span>
          </div>
          <div className={`flex-col ${styles['group_1']} `}>
            <span className={`${styles['text_3']} `}>PASSWARD</span>
            <span className={`${styles['text_4']} `}>********</span>
          </div>
          <div className={`flex-col items-center ${styles['text-wrapper']} `}>
            <span>SIGN IN</span>
          </div>
          <div className={`flex-row ${styles['group_2']} `}>
            <span className={`${styles['text_6']} `}>Forget Your Password?</span>
            <span className={`${styles['text_7']} `}>Create an Account</span>
          </div>
        </div>
      </div>
      <span className={`${styles['text_8']} `}>MELODIC</span>
    </div>
  );
}