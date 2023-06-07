import React from 'react';
import classes from '../../../../../PromBez/src/components/UI/button/MyButton.module.css'

const MyButton = ({children, ...props}) => {
    return (
     <button {...props} className={classes.MyBtn}>
         {children}
     </button>
    );
};

export default MyButton;