import '../global.css';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  banner: {
    position: 'relative',
    marginTop: '30px',
    height: '146px',
    background: 'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)',
    boxShadow: '0px 10px 22px rgba(149, 173, 254, 0.3)',
    borderRadius: '22px',
  },
  bannerColumn: {
    position: 'absolute',
  },
  bannerColumnTitle: {
    marginTop: '26px',
    marginLeft: '20px',
    marginBottom: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#FFFFFF',
  },
  bannerColumnMessage: {
    marginTop: '5px',
    marginLeft: '20px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#FFFFFF',
  },
  bannerColumnButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: '20px',
    marginTop: '15px',
    width: '95px',
    height: '35px',
    background: 'linear-gradient(274.42deg, #C58BF2 0%, #EEA4CE 124.45%)',
    borderRadius: '50px',
  },
  bannerColumnButtonText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '10px',
    lineHeight: '15px',
    color: '#FFFFFF',
  },
  bannerPieChart: {
    position: 'absolute',
    right: 0,
    marginRight: '-15px',
  },
});

export const Banner = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.banner} SectionContainer`}>
      <div className={classes.bannerColumn}>
        <div className={classes.bannerColumnTitle}>BMI (Body Mass Index)</div>
        <div className={classes.bannerColumnMessage}>
          You have a normal weight
        </div>
        <div className={classes.bannerColumnButton}>
          <div className={classes.bannerColumnButtonText}>View More</div>
        </div>
      </div>
      <img
        src="images\home\pie_chart.svg"
        alt="pie chart"
        className={classes.bannerPieChart}
      />
    </div>
  );
};
