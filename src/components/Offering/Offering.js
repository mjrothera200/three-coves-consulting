import { Grid, Column, ClickableTile, TileGroup } from '@carbon/react';

// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

const OfferingSection = (props) => (
  <div className="offering-section">
    <Grid className={`${props.className} offering-section`}>
      {props.children}
    </Grid>
  </div>
);

const OfferingCard = (props) => {
  const splitHeading = createArrayFromPhrase(props.servicename);

  return (
    <Column sm={4} md={8} lg={4} className="offering-card">
      <ClickableTile>
        <h4 className="offering-card__heading">
          {`${splitHeading[0]} `}
          <strong>{splitHeading[1]}</strong>
        </h4>
        <p className="offering-card__body">{props.serviceoverview}</p>
        <div className="offering-card__icon">{props.icon()}</div>
      </ClickableTile>
    </Column>
  );
};

export { OfferingSection, OfferingCard };
