const MenuItemForSorting = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = ["Date", "Name"];

  return (
    <Grid
      item
      container
      justify="space-around"
      style={{
        marginTop: theme.spacing(0.5),
        marginBottom: theme.spacing(0.5),
      }}
    >
      <List
        component="nav"
        aria-label="Device settings"
        style={{
          border: `1px solid ${theme.palette.primary.light}`,
          borderRadius: theme.spacing(1),
          backgroundColor: theme.palette.common.black,
          color: theme.palette.text.primary,
        }}
      >
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="project-gallery-menu"
          aria-label="sort by"
          onClick={handleClickListItem}
        >
          <ListItemText
            primary="Sort By"
            secondary={options[selectedIndex]}
            secondaryTypographyProps={{
              style: { color: theme.palette.text.primary },
            }}
          />
        </ListItem>
      </List>
      <Menu
        id="project-gallery-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Grid>
  );
};
