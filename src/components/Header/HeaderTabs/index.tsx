import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import HomeIcon from '@mui/icons-material/Home';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HeaderTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab component={Link} to="/home" label="HOME" value="/home" icon={<HomeIcon />} />
      <Tab
        component={Link}
        to="/ranking"
        label="RANKING"
        value="/ranking"
        icon={<EmojiEventsIcon />}
      />
      <Tab
        component={Link}
        to="/events"
        label="EVENTS"
        value="/events"
        icon={<CalendarMonthIcon />}
      />
      {/* <Tab component={Link} to="/seriesC" label="SERIES" value="/seriesC" icon={<Icon>C</Icon>} /> */}
    </Tabs>
  );
}
