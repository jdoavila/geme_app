import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonBadge, IonIcon } from '@ionic/react';
import { chatbubbleOutline, heartOutline } from 'ionicons/icons';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Following users</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink='/user/profile/1'>
            <IonLabel><h1>@jdoavila</h1></IonLabel>
            <IonLabel slot='end'><IonBadge color="success"><IonIcon icon={chatbubbleOutline}/>&nbsp; 120K</IonBadge></IonLabel>
            <IonLabel slot='end'><IonBadge color="tertiary"><IonIcon icon={heartOutline}/>&nbsp; 120K</IonBadge></IonLabel>
          </IonItem>

          <IonItem routerLink='/user/profile/1'>
            <IonLabel><h1>@jdoavila</h1></IonLabel>
            <IonLabel slot='end'><IonBadge color="success"><IonIcon icon={chatbubbleOutline}/>&nbsp; 120K</IonBadge></IonLabel>
            <IonLabel slot='end'><IonBadge color="tertiary"><IonIcon icon={heartOutline}/>&nbsp; 120K</IonBadge></IonLabel>
          </IonItem>

          <IonItem routerLink='/user/profile/1'>
            <IonLabel><h1>@jdoavila</h1></IonLabel>
            <IonLabel slot='end'><IonBadge color="success"><IonIcon icon={chatbubbleOutline}/>&nbsp; 120K</IonBadge></IonLabel>
            <IonLabel slot='end'><IonBadge color="tertiary"><IonIcon icon={heartOutline}/>&nbsp; 120K</IonBadge></IonLabel>
          </IonItem>

          <IonItem routerLink='/user/profile/1'>
            <IonLabel><h1>@jdoavila</h1></IonLabel>
            <IonLabel slot='end'><IonBadge color="success"><IonIcon icon={chatbubbleOutline}/>&nbsp; 120K</IonBadge></IonLabel>
            <IonLabel slot='end'><IonBadge color="tertiary"><IonIcon icon={heartOutline}/>&nbsp; 120K</IonBadge></IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
