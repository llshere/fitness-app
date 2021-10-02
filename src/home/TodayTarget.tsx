import '../global.css';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  todayTargetBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '30px',
    height: '57px',
    background:
      'linear-gradient(274.42deg, RGBA(157, 206, 255,.2) 0%, RGBA(146, 163, 253,.2) 124.45%)',
    borderRadius: '16px',
  },
  title: {
    marginLeft: '20px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '21px',
    color: '#1D1617',
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '68px',
    height: '28px',
    marginRight: '20px',
    background: 'linear-gradient(274.42deg, #92A3FD 0%, #9DCEFF 124.45%)',
    borderRadius: '50px',
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#FFFFFF',
  },
});

export const TodayTarget = () => {
  const classes = useStyles();
  return (
    <div className={`${classes.todayTargetBox} SectionContainer`}>
      <div className={classes.title}>Today Target</div>
      <div className={classes.button}>
        <div className={classes.buttonText}>Check</div>
      </div>
    </div>
  );
};
