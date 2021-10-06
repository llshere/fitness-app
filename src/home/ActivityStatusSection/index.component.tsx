import '../../global.css';

import { makeStyles } from '@mui/styles';

import { HeartRateChart } from './HeartRateChart';
import { RoundChart } from './RoundChart';
import { WaterIntakeChart } from './WaterIntakeChart';
import { WaterIntakeFlow } from './WaterIntakeFlow';

const useStyles = makeStyles({
  activityStatusSectionContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '30px',
  },
  chartsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: '16px',
  },
  activityStatusSectionLeftColumn: {
    display: 'flex',
    width: '40vw',
    height: '315px',
    boxShadow: '0px 10px 40px rgba(29, 36, 42, 0.05)',
    borderRadius: '20px',
  },
  activityStatusSectionRightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '40vw',
    height: '315px',
  },
  activityStatusSectionCard: {
    width: '40vw',
    height: '150px',
    boxShadow: '0px 10px 40px rgba(29, 22, 23, 0.07)',
    borderRadius: '20px',
  },
  heartRateSection: {
    height: '150px',
    width: '84vw',
    maxWidth: '480px',
    background:
      'linear-gradient(274.42deg, RGBA(157, 206, 255,.2) 0%, RGBA(146, 163, 253,.2) 124.45%)',
    borderRadius: '20px',
  },
  heartRateChart: {
    width: '100px',
    height: '100px',
  },
  cardTitle: {
    paddingTop: '20px',
    marginLeft: '20px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '12px',
    lineHeight: '18px',
    color: '#1D1617',
  },
  cardSubtitle: {
    marginTop: '5px',
    marginLeft: '20px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    background:
      '-webkit-linear-gradient(rgba(146, 163, 253, 1), rgba(157, 206, 255, 1))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  graphWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  circleBackground: {
    height: '40px',
    width: '40px',
    marginTop: '-61px',
    background:
      '-webkit-linear-gradient(rgba(146, 163, 253, 1), rgba(157, 206, 255, 1))',
    borderRadius: '50%',
  },
  waterIntakeColumeWrapper: {},
  waterIntakeFlowTitle: {
    margin: '10px 8px 5px 20px',
    width: 92,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '10px',
    lineHeight: '15px',
    color: '#7B6F72',
  },
});

export const ActivityStatusSection = () => {
  const classes = useStyles();
  return (
    <div
      className={`${classes.activityStatusSectionContainer} SectionContainer`}
    >
      <div className="SectionTitle">Activity Status</div>
      <div className={classes.heartRateSection}>
        <div className={classes.cardTitle}>Heart Rate</div>
        <div className={classes.cardSubtitle}>78 BPM</div>
        <HeartRateChart />
      </div>
      <div className={`${classes.chartsContainer} SectionContainer`}>
        <div className={classes.activityStatusSectionLeftColumn}>
          <WaterIntakeChart />
          <div className={classes.waterIntakeColumeWrapper}>
            <div className={`${classes.cardTitle} SectionContainer`}>
              Water Intake
            </div>
            <div className={classes.cardSubtitle}>4 Liters</div>
            <div className={classes.waterIntakeFlowTitle}>
              Real time updates
            </div>
            <WaterIntakeFlow />
          </div>
        </div>
        <div className={classes.activityStatusSectionRightColumn}>
          <div className={classes.activityStatusSectionCard}>
            <div className={classes.cardTitle}>Sleep</div>
            <div className={classes.cardSubtitle}>8h 20m</div>
            <div className={classes.graphWrapper}>
              <img src="images\home\sleep_graph.svg" alt="Sleep Graph" />
            </div>
          </div>
          <div className={classes.activityStatusSectionCard}>
            <div className={classes.cardTitle}>Calories</div>
            <div className={classes.cardSubtitle}>760 kCal</div>
            <div className={classes.graphWrapper}>
              <RoundChart />
              <div className={classes.circleBackground}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
