import React, { FunctionComponent } from "react";
import { withRouter } from "react-router";

import SplitScreen from "../../ui/layouts/splitScreen/SplitScreen.component";
import BackButton from "../../ui/button/backButton/BackButton.component";
import Title from "../../ui/title/Title.component";
import Text from "../../ui/text/Text.component";
import HeadingType from "../../enums/HeadingType.enum";
import images from "../../utils/images";
import { Styled } from "./PersonalData.styles";
import { fontSize } from "../../styling/font.styling";
import { Store } from "../../store";
import { connect } from "react-redux";
import TextField from "../../ui/form/textField/TextField.component";
import SubmitButton from "../../ui/button/submitButton/SubmitButton.component";
import BtnType from "../../enums/BtnType.enum";
import TextArea from "../../ui/form/textArea/TextArea.component";

type PersonalDataPageProps = {
  match: any;
  location: any;
  history: any;
  dispatch: any;
};

const PersonalDataPage: FunctionComponent<PersonalDataPageProps> = (props: PersonalDataPageProps) => {
  const { history, dispatch } = props;

  const goToActivityOverview = () => {
    history.push("/activity-overview");
  };

  const onFormSubmit = (event: any) => {
    event.preventDefault();
    console.log('event: ', event);
  }

  const hotelDetails = (
    <React.Fragment>
      <BackButton />
      <Styled.Content>
        <Styled.TitleBlock>
          <Title headingType={HeadingType.H1}>Uw gegevens</Title>
          <Text fontSize={fontSize.LARGE}>
            We need your the following data in order to send you updates regarding your Travel proposal.
          </Text>
        </Styled.TitleBlock>
        <Styled.Form onSubmit={onFormSubmit}>
          <Styled.NameFields>
            <TextField id={"firstName"} name={"firstName"} minLength={0} maxLength={20} label={"First name"} required={true} autofocus={true} />
            <TextField id={"lastName"} name={"lastName"} minLength={0} maxLength={30} label={"Last name"} required={true}/>
          </Styled.NameFields>
          <TextField id={"email"} name={"email"} minLength={0} maxLength={30} label={"Email address"} required={true} />
          <TextField id={"telephone"} name={"telephone"} minLength={0} maxLength={12} label={"Telephone number"} required={true}defaultValue={'+32'} />
          <TextArea id={'remarks'} name={'remarks'}  label={"Uw opmerkingen"} cols={23} rows={5} minLength={0} maxLength={500} />
          <SubmitButton btnType={BtnType.SECONDARY}>Submit</SubmitButton>
        </Styled.Form>
        <Styled.Select></Styled.Select>
      </Styled.Content>
    </React.Fragment>
  );

  return <SplitScreen backgroundImage={images.hotel2} contentLeft={hotelDetails} contentRight={<div></div>} />;
};

const mapStateToProps = (store: Store) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PersonalDataPage));
