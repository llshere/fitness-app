import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  waterIntakeFlowWrapper: {
    margin: '20px -10px 20px 20px',
  },
  waterIntakeFlowBox: {
    width: 92,
    height: 38,
    borderLeft: '0.5px dotted #EEA4CE',
  },
  waterIntakeFlowDot: {
    marginTop: -3,
    marginLeft: -3.5,
    width: 6,
    height: 6,
    background: 'linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%)',
    opacity: '0.5',
    borderRadius: '50%',
  },
  waterIntakeTime: {
    marginTop: -8.5,
    marginLeft: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '8px',
    lineHeight: '12px',
    color: '#ADA4A5',
  },
  waterIntakeVolume: {
    marginTop: 3,
    marginLeft: 10,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '8px',
    lineHeight: '12px',
    background:
      '-webkit-linear-gradient(rgba(197, 139, 242, 1), rgba(238, 164, 206, 1))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
});

export const WaterIntakeFlow = () => {
  const classes = useStyles();
  return (
    <div className={classes.waterIntakeFlowWrapper}>
      <div className={classes.waterIntakeFlowBox}>
        <div className={classes.waterIntakeFlowDot}></div>
        <div className={classes.waterIntakeTime}>6am - 8am</div>
        <div className={classes.waterIntakeVolume}>600ml</div>
      </div>
      <div className={classes.waterIntakeFlowBox}>
        <div className={classes.waterIntakeFlowDot}></div>
        <div className={classes.waterIntakeTime}>9am - 11am</div>
        <div className={classes.waterIntakeVolume}>500ml</div>
      </div>
      <div className={classes.waterIntakeFlowBox}>
        <div className={classes.waterIntakeFlowDot}></div>
        <div className={classes.waterIntakeTime}>11am - 2pm</div>
        <div className={classes.waterIntakeVolume}>1000ml</div>
      </div>
      <div className={classes.waterIntakeFlowBox}>
        <div className={classes.waterIntakeFlowDot}></div>
        <div className={classes.waterIntakeTime}>2pm - 4pm</div>
        <div className={classes.waterIntakeVolume}>700ml</div>
      </div>
      <div className={classes.waterIntakeFlowBox}>
        <div className={classes.waterIntakeFlowDot}></div>
        <div className={classes.waterIntakeTime}>4pm - now</div>
        <div className={classes.waterIntakeVolume}>900ml</div>
      </div>
    </div>
  );
};
