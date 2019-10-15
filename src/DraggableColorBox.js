import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    width: '20%',
    height: '25%',
    margin: '0 auto',
    display: 'inline-block',
    position: 'relative',
    cursor: 'pointer',
    marginBottom: '-3.5px',
  }
}
function DraggableColorBox(props) {
  const { classes } = props
  return(
    <div 
    style={{backgroundColor : props.color}}
    className={classes.root}
    >
      {props.name}
    </div>
  )
}

export default withStyles(styles)(DraggableColorBox);