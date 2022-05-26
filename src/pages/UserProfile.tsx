import { IonContent, IonBackButton, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonBadge, IonItem, IonLabel, IonButton, useIonModal, useIonViewWillEnter, useIonToast, IonAvatar, IonChip, IonImg, IonGrid, IonRow, IonCol } from '@ionic/react';
import { chatbubble, person, pin, heartOutline, shareOutline, filterOutline, chevronBackOutline, heart, personAddOutline } from 'ionicons/icons';
import {Storage} from '@capacitor/storage';
import { useState } from 'react';
import { RouteComponentProps, useParams } from 'react-router';

interface UserDetailPageProps
  extends RouteComponentProps<{
    id: string;
  }> {}

const UserProfile: React.FC<UserDetailPageProps> = ({match}) => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [logged, setLogged] = useState(false);
  const [presentToast, dismissToast] = useIonToast();


  useIonViewWillEnter(() => {
    Storage.get({key: 'geme_app_accessToken'}).then(data => {
        if (data.value && data.value.length > 2){
            setAccessToken(data.value);
            setLogged(true);
            console.log('Esta logeado', data.value);
        }
    }).catch(err => {
        presentToast("We can't get access to the storage, Login Error.", 3000);
        console.error(err);
    })
})
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButton slot='start' fill='clear'>
                <IonBackButton />
            </IonButton>
            <IonTitle>User Profile {match.params.id}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonHeader slot='fixed'>
        <IonGrid>
          <IonRow>
            <IonCol className="ion-justify-content-center ion-text-center">
              <IonChip>
                <IonIcon color='dark' icon={person}/>
                <IonLabel><h1>@jdoavila</h1></IonLabel>
              </IonChip>
              <IonChip color="success" className="ion-align-self-end">
                <IonIcon icon={personAddOutline} />
                <IonLabel>Follow</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-right">
              <IonChip color='secondary'>
                <IonIcon icon={chatbubble}/>
                <IonLabel>Messages: 10k</IonLabel>
              </IonChip>
            </IonCol>
            <IonCol className="ion-text-left">
              <IonChip color='tertiary'>
                <IonIcon icon={heart}/>
                <IonLabel>Likes: 25k</IonLabel>
              </IonChip>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonHeader>

      <IonContent>
        

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Estamos probando poner un parrafo dentro de una card para ver como se mostraría ya con texto real, bien podríamos haber puesto un lorem ipsum pero nos alocamos escribiendo nuestro propio texto de pruebas...
          </IonCardContent>
          <IonItem>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={heartOutline}/> &nbsp;&nbsp;
              <IonLabel ><IonBadge color="light">120K</IonBadge></IonLabel>
            </IonButton>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={shareOutline}/> &nbsp;&nbsp;
            </IonButton>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Estamos probando poner un parrafo dentro de una card para ver como se mostraría ya con texto real, bien podríamos haber puesto un lorem ipsum pero nos alocamos escribiendo nuestro propio texto de pruebas...
          </IonCardContent>
          <IonItem>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={heartOutline}/> &nbsp;&nbsp;
              <IonLabel ><IonBadge color="light">120K</IonBadge></IonLabel>
            </IonButton>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={shareOutline}/> &nbsp;&nbsp;
            </IonButton>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Estamos probando poner un parrafo dentro de una card para ver como se mostraría ya con texto real, bien podríamos haber puesto un lorem ipsum pero nos alocamos escribiendo nuestro propio texto de pruebas...
          </IonCardContent>
          <IonItem>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={heartOutline}/> &nbsp;&nbsp;
              <IonLabel ><IonBadge color="light">120K</IonBadge></IonLabel>
            </IonButton>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={shareOutline}/> &nbsp;&nbsp;
            </IonButton>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Estamos probando poner un parrafo dentro de una card para ver como se mostraría ya con texto real, bien podríamos haber puesto un lorem ipsum pero nos alocamos escribiendo nuestro propio texto de pruebas...
          </IonCardContent>
          <IonItem>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={heartOutline}/> &nbsp;&nbsp;
              <IonLabel ><IonBadge color="light">120K</IonBadge></IonLabel>
            </IonButton>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={shareOutline}/> &nbsp;&nbsp;
            </IonButton>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Estamos probando poner un parrafo dentro de una card para ver como se mostraría ya con texto real, bien podríamos haber puesto un lorem ipsum pero nos alocamos escribiendo nuestro propio texto de pruebas...
          </IonCardContent>
          <IonItem>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={heartOutline}/> &nbsp;&nbsp;
              <IonLabel ><IonBadge color="light">120K</IonBadge></IonLabel>
            </IonButton>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={shareOutline}/> &nbsp;&nbsp;
            </IonButton>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Estamos probando poner un parrafo dentro de una card para ver como se mostraría ya con texto real, bien podríamos haber puesto un lorem ipsum pero nos alocamos escribiendo nuestro propio texto de pruebas...
          </IonCardContent>
          <IonItem>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={heartOutline}/> &nbsp;&nbsp;
              <IonLabel ><IonBadge color="light">120K</IonBadge></IonLabel>
            </IonButton>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={shareOutline}/> &nbsp;&nbsp;
            </IonButton>
          </IonItem>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            Estamos probando poner un parrafo dentro de una card para ver como se mostraría ya con texto real, bien podríamos haber puesto un lorem ipsum pero nos alocamos escribiendo nuestro propio texto de pruebas...
          </IonCardContent>
          <IonItem>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={heartOutline}/> &nbsp;&nbsp;
              <IonLabel ><IonBadge color="light">120K</IonBadge></IonLabel>
            </IonButton>
            <IonButton slot='start' fill="clear" size='small'>
              <IonIcon icon={shareOutline}/> &nbsp;&nbsp;
            </IonButton>
          </IonItem>
        </IonCard>

      </IonContent>
    </IonPage>
  );
};

export default UserProfile;
