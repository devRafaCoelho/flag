import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function HeaderTabs() {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
      <Tab
        component={Link}
        to="/seriesA"
        label="SERIES"
        value="/seriesA"
        icon={<FormatBoldIcon />}
      />
      <Tab
        component={Link}
        to="/seriesB"
        label="SERIES"
        value="/seriesB"
        icon={<FormatBoldIcon />}
      />
      <Tab
        component={Link}
        to="/seriesC"
        label="SERIES"
        value="/seriesC"
        icon={<FormatBoldIcon />}
      />
      <Tab
        component={Link}
        to="/events"
        label="EVENTS"
        value="/events"
        icon={<EmojiEventsIcon />}
      />
    </Tabs>
  );
}
