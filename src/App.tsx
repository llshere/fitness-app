import { makeStyles } from '@mui/styles';

import { Home } from './home';

const useStyles = makeStyles({
  app: {
    display: 'flex',
    justifyContent: 'center',
    width: '100vw',
  },
});

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <Home />
    </div>
  );
}
