// FilterMenu.js
import FilterListIcon from '@mui/icons-material/FilterList';
import { Box, Tooltip } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';

export default function FilterMenu({ onSelectOption }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const options = ['Male', 'Female'];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (option: string) => {
    onSelectOption(option);
    handleClose();
  };

  return (
    <Box sx={{ marginLeft: 'auto' }}>
      <Tooltip title="Filter list">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? 'long-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FilterListIcon />
        </IconButton>
      </Tooltip>

      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            onClick={() => {
              handleOptionClick(option);
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
