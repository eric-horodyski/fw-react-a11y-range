import { IonItem, IonLabel, IonRange } from "@ionic/react";
import React from "react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonItem lines="none">
      <IonLabel id="foo" position="stacked">
        Slide Me!
      </IonLabel>
      <IonRange aria-labelledby="foo" />
    </IonItem>
  );
};

export default ExploreContainer;
