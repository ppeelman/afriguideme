// EXTERNAL
import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router';

import BtnType from '../../../enums/BtnType.enum';
import Button from '../Button.component';

type BackButtonProps = {
  match: any;
  location: any;
  history: any;
};

const BackButton: FunctionComponent<BackButtonProps> = (props: BackButtonProps) => {
  const { history } = props;

  const goToPreviousPage = () => {
    history.goBack();
  };

  return (
    <Button btnType={BtnType.BACK} onClick={goToPreviousPage}>
      &lt;&nbsp;&nbsp;Back
    </Button>
  );
};

export default withRouter(BackButton);
