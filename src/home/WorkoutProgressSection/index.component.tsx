import '../../global.css';

import { makeStyles } from '@mui/styles';

import { WorkoutProgressChart } from './WorkoutProgressChart';

const useStyles = makeStyles({
  workoutProgressSection: {
    marginTop: 33,
  },
  workoutProgressHeader: { display: 'flex', justifyContent: 'space-between' },
  workoutProgressButton: {
    width: 76,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)',
    borderRadius: '50px',
  },
  workoutProgressButtonText: {
    marginRight: 5,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '15px',
    textAlign: 'right',
    color: '#FFFFFF',
  },
});

export const WorkoutProgressSection = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.workoutProgressSection} SectionContainer`}>
      <div className={classes.workoutProgressHeader}>
        <div className="SectionTitle">Workout Progress</div>
        <div className={classes.workoutProgressButton}>
          <div className={classes.workoutProgressButtonText}>Weekly</div>
          <img src="images\home\dragdown_icon.svg" alt="dragdown icon" />
        </div>
      </div>
      <div>
        <WorkoutProgressChart />
      </div>
    </div>
  );
};
