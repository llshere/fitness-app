import '../../global.css';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  lastWorkoutSection: {
    marginTop: 30,
  },
  lastWorkoutSectionHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeMoreButton: {
    marginTop: -15,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    color: '#ADA4A5',
  },
  workoutCardWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '84vw',
    maxWidth: 480,
    marginBottom: 15,
    height: 80,
    boxShadow: '0px 10px 40px rgba(29, 36, 42, 0.05)',
    borderRadius: '16px',
  },
  workoutCardWIcon: { width: 50, marginLeft: 15 },
  workoutCardColumn: { display: 'flex', width: '100%' },
  workoutCardInfo: { width: '100%', marginTop: 15, marginLeft: 10 },
  workoutCardTitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    color: '#DDDADA',
  },
  workoutCardSubtitle: {
    marginTop: 3,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '15px',
    color: '#A4A9AD',
  },
  workoutChart: {
    marginTop: 9,
    display: 'flex',
    minWidth: 191,
    width: '80%',
    height: 10,
    background: '#F7F8F8',
    borderRadius: 50,
  },
  workoutChartScale: {
    width: '50%',
    height: 10,
    background: 'linear-gradient(272.69deg, #C58BF2 -59.92%, #92A3FD 86.39%)',
    borderRadius: '50px 0px 0px 50px',
  },
  workoutCardButton: { width: 24, marginRight: 15 },
});

export const LatestWorkoutSection = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.lastWorkoutSection} SectionContainer`}>
      <div className={classes.lastWorkoutSectionHeader}>
        <div className="SectionTitle">Latest Workout</div>
        <div className={classes.seeMoreButton}>See more</div>
      </div>
      <div className={classes.workoutCardWrapper}>
        <div className={classes.workoutCardColumn}>
          <img
            src="images\home\workoutIcon\workout-icon1.svg"
            alt="workout icon 1"
            className={classes.workoutCardWIcon}
          />
          <div className={classes.workoutCardInfo}>
            <div className={classes.workoutCardTitle}>Fullbody Workout</div>
            <div className={classes.workoutCardSubtitle}>
              180 Calories Burn | 20minutes
            </div>
            <div className={classes.workoutChart}>
              <div className={classes.workoutChartScale}></div>
            </div>
          </div>
        </div>
        <img
          src="images\home\workout-button.svg"
          alt="workout button"
          className={classes.workoutCardButton}
        />
      </div>
      <div className={classes.workoutCardWrapper}>
        <div className={classes.workoutCardColumn}>
          <img
            src="images\home\workoutIcon\workout-icon2.svg"
            alt="workout icon 2"
            className={classes.workoutCardWIcon}
          />
          <div className={classes.workoutCardInfo}>
            <div className={classes.workoutCardTitle}>Lowerbody Workout</div>
            <div className={classes.workoutCardSubtitle}>
              200 Calories Burn | 30minutes
            </div>
            <div className={classes.workoutChart}>
              <div className={classes.workoutChartScale}></div>
            </div>
          </div>
        </div>
        <img
          src="images\home\workout-button.svg"
          alt="workout button"
          className={classes.workoutCardButton}
        />
      </div>
    </div>
  );
};
