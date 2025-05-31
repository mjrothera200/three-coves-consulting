import { Grid, Column, ClickableTile, TileGroup } from '@carbon/react';

// Take in a phrase and separate the third word in an array
function createArrayFromPhrase(phrase) {
  const splitPhrase = phrase.split(' ');
  const thirdWord = splitPhrase.pop();
  return [splitPhrase.join(' '), thirdWord];
}

const InfoSection = (props) => (
  <div className="info-section">
    <h3 className="info-section__heading">{props.heading}</h3>
    <Grid className={`${props.className} info-section`}>{props.children}</Grid>
  </div>
);

const InfoCard = (props) => {
  const splitHeading = createArrayFromPhrase(props.heading);

  return (
    <Column sm={4} md={8} lg={4} className="info-card">
      <ClickableTile>
        <h4 className="info-card__heading">
          {`${splitHeading[0]} `}
          <strong>{splitHeading[1]}</strong>
        </h4>
        <p className="info-card__body">{props.body}</p>
        {props.icon()}
      </ClickableTile>
    </Column>
  );
};

export { InfoSection, InfoCard };
