import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 300,
      width: 240
    }
  });

const LandingButton = () => {
    // const [income, setIncome] = useState('');
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(income);
    //     setIncome('');

    // // ON PRESS logic
    // }
    return (
        <div>
            <div class='header'>All your BTO needs, in one palce</div>
            <button onClick={event => window.location.href='/home'}>VIEW ALL BTO</button>
        </div>

        
   )
}

export default LandingButton