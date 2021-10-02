import clsx from 'clsx';
import React, { useState } from 'react';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  notificationBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '40px',
    height: '40px',
    background: '#F7F8F8',
    boxShadow: '0px 10px 40px rgba(29, 22, 23, 0.07)',
    borderRadius: '8px',
  },
});

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export const NotificationBox = ({ ...props }: Props) => {
  const classes = useStyles();
  const [bellOn, setBellOn] = useState(true);
  const notificationIcon = bellOn ? (
    <img src="images\home\notificationIcon\bell_on.svg" alt="bellIcon" />
  ) : (
    <img src="images\home\notificationIcon\bell_off.svg" alt="bellIcon" />
  );

  const onClickBox = () => {
    setBellOn(false);
  };
  return (
    <div
      {...props}
      className={clsx(classes.notificationBox, props.className)}
      onClick={onClickBox}
    >
      {notificationIcon}
    </div>
  );
};
