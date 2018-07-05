import React from 'react';
import ButtonMaterial from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const Button = (props) => {
    return(
        <div className="btn">
            <ButtonMaterial
                variant="fab"
                color="primary"
                aria-label={props.type}
                onClick={props.click}
                disabled={props.isDisable}
            >
                {props.type === 'add' &&
                    <AddIcon />
                }
                {props.type === 'remove' &&
                    <RemoveIcon />
                }
            </ButtonMaterial>
        </div>
    );
};

export default Button;
