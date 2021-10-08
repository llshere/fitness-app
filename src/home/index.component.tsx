import { makeStyles } from '@mui/styles';

import { ActivityStatusSection } from './ActivityStatusSection';
import { Banner } from './Banner';
import { Header } from './Header';
import { LatestWorkoutSection } from './LatestWorkoutSection';
import { TodayTarget } from './TodayTarget';
import { WorkoutProgressSection } from './WorkoutProgressSection';

const useStyles = makeStyles({
  home: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    maxWidth: '480px',
  },
});

export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.home}>
      <Header />
      <Banner />
      <TodayTarget />
      <ActivityStatusSection />
      <WorkoutProgressSection />
      <LatestWorkoutSection />
    </div>
  );
};
