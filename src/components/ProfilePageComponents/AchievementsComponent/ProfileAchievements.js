import React from 'react';
import { alfaSlabOne } from '@/fonts';
import { poppins } from '@/fonts';
import styles from './component.module.css';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Example(props) {
  return (
    <div style={{ marginBottom: 0 }}>
      <hr style={{ border: 'none' }} />
      <div style={{ marginTop: 30, display: 'flex' }}>
        <div
          style={{
            width: '100%',
            paddingRight: 0,
            display: 'flex',
            color: '#A2BF00',
          }}
          className={poppins.className}>
          {props.children}
        </div>
      </div>
    </div>
  );
}
const ProfileAchievements = () => {
  return (
    <div className={alfaSlabOne.variable}>
      <div className={styles.achivementMain}>
        <div className={styles.achivementTitle}>My achivements</div>
        <Example>
          <div style={{ margin: '10px' }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: '#A2BF00',
              })}
              value={10}
              text={`${1}`}
            />
            <div>
              Completed
              <br />
              Levels
            </div>
          </div>
          <div style={{ margin: '10px' }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: '#A2BF00',
              })}
              value={50}
              text={`${5}`}
            />
            <div>
              Completed
              <br /> Courses
            </div>
          </div>
          <div style={{ margin: '10px' }}>
            <CircularProgressbar
              styles={buildStyles({
                pathColor: '#A2BF00',
              })}
              value={10}
              text={`${1}`}
            />
            <div>Certificates</div>
          </div>
        </Example>
      </div>
    </div>
  );
};

export default ProfileAchievements;
