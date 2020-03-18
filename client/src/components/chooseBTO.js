import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { ChooseHouseForm } from "../components/ChooseHouseForm";
import { BTOTable } from "../components/BTOTable";


const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  });

  export const TemporaryDrawer = () => {
    const classes = useStyles();
    const [state, setState] = React.useState({
      bottom: false,  
    });
    const [BTOstate, BTOsetState] = React.useState({
        cck: false,
        Tengah: false,
        Pasir: false,
        Tampines: false
      });

    const toggleDrawer = (anchor, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

    
        const handleChange = name => event => {
          BTOsetState({ ...BTOstate, [name]: event.target.checked });
        };
      
        const { cck, Tengah, Pasir, Tampines } = BTOstate;
    

      const list = anchor => (
          <body>
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'bottom',
          })}
          role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
            
            <ChooseHouseForm 
          handleChange={handleChange}
          cck={cck}
          Tengah={Tengah}
          Pasir={Pasir}
          Tampines={Tampines}
        /> 
        </div>
        <div id="BTOButton">
         <Button  variant="contained" color="primary" onClick={toggleDrawer(anchor, false)}>
             COMPARE
         </Button>
         </div>
          </body>
        
      );
        

      return (
        
        <div id="addButton">
          
            <React.Fragment key='bottom'>
              <Button  variant="contained" color="primary" onClick={toggleDrawer('bottom', true)}>Add BTO to Compare</Button>
              <Drawer anchor='bottom' open={state['bottom']} onClose={toggleDrawer('bottom', false)}>
              {list('bottom')}
              </Drawer>
            </React.Fragment>
          <BTOTable displayHouseState={BTOstate} />
        </div>
        
        
      );
          
    }

    