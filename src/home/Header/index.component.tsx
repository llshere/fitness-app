import '../../global.css';

import { makeStyles } from '@mui/styles';

import { NotificationBox } from './NotificationBox';

const useStyles = makeStyles({
  headerBox: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '53px',
  },
  headerColumnWrapper: {},
  notificationMessage: {
    margin: 0,
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '12px',
    lineHeight: '18px',
    color: '#ADA4A5',
  },
  userName: {
    marginTop: '5px',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '30px',
    color: '#1D1617',
  },
  notificationIcon: {
    marginTop: '5px',
  },
});

export const Header = () => {
  const classes = useStyles();

  return (
    <div className={`${classes.headerBox} SectionContainer`}>
      <div className={classes.headerColumnWrapper}>
        <div className={classes.notificationMessage}>Welcome Back,</div>
        <div className={classes.userName}>Stefani Wong</div>
      </div>
      <NotificationBox className={classes.notificationIcon} />
    </div>
  );
};
