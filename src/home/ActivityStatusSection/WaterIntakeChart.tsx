import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  waterIntakeChartBox: {
    margin: '20px -10px 20px 20px',
    display: 'flex',
    alignItems: 'flex-end',
    width: 20,
    height: 275,
    background: '#F7F8F8',
    borderRadius: 30,
  },
  waterIntakeChartScale: {
    width: 20,
    height: 150,
    background: 'linear-gradient(180deg, #C58BF2 -83.11%, #B4C0FE 60.6%)',
    borderRadius: '0px 0px 30px 30px',
  },
});

export const WaterIntakeChart = () => {
  const classes = useStyles();
  return (
    <div className={classes.waterIntakeChartBox}>
      <div className={classes.waterIntakeChartScale}></div>
    </div>
  );
};
