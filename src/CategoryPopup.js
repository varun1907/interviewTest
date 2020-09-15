import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { blue } from '@material-ui/core/colors';

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
  const { setOpen, onClose, selectedValue, open, categories, selectedOptionText, selectedOption} = props;

  const handleClose = () => {
    setOpen(false)
    // onClose(selectedValue, selectedOptionText);
  };

  const handleListItemClick = (value,value2) => {
    // onClose(value);
    onClose(value, value2);
  };

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Set Category</DialogTitle>
      <List>
        {categories.map((category) => (
          <ListItem button onClick={() => handleListItemClick(category.category_id, category.category_name)} key={category.category_id}>
            <ListItemText style={category.category_id == selectedOption ? {color:'blue'} : null} primary={category.category_name} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}


export default function SimpleDialogDemo({ categories, selectedOptionText, setselectedOption, selectedOption,setselectedOptionText }) {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(selectedOption);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value, value2) => {
    setOpen(false);
    // setSelectedValue(value);
    setselectedOption(value)
    setselectedOptionText(value2)
  };

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Change
      </Button> */}
      <p style={{color:'gray',fontSize:10,paddingRight:10}} onClick={handleClickOpen}>Change</p>
      <SimpleDialog selectedValue={selectedValue} selectedOptionText={selectedOptionText} selectedOption={selectedOption} open={open} setOpen={setOpen} onClose={handleClose} categories={categories} />
    </div>
  );
}
