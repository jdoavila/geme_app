import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFab, IonFabButton, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonBadge, IonItem, IonLabel, IonButton, useIonModal, useIonViewWillEnter, useIonToast, NavContext } from '@ionic/react';
import './Tab1.css';
import { add, person, pin, heartOutline, shareOutline, filterOutline } from 'ionicons/icons';
import NewMessage from '../components/NewMessage';
import {Storage} from '@capacitor/storage';
import { useContext, useState } from 'react';

const Tab1: React.FC = () => {
  const [accessToken, setAccessToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [logged, setLogged] = useState(false);
  const [presentToast, dismissToast] = useIonToast();
  const { navigate } = useContext(NavContext);
  
  const handleDismiss = () => {
    dismissNewMessage();
  }

  const saveMessage = (messageText: String, lat: Number, lng: Number) => {
    console.log('vamos a guardar el nuevo mensaje', messageText.length);
  }
  const [presentNewMessage, dismissNewMessage] = useIonModal(NewMessage, {handleDismiss, saveMessage, logged});

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
          <IonTitle>Nearby messages</IonTitle>
          <IonButton slot='end' fill='clear' size='small' color='dark'><IonIcon icon={filterOutline}/></IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonHeader collapse="fade">
          <IonToolbar>
            <IonTitle>Choluteca, HND (17.2343, -87.2442)</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        {/* FabButton */}
        <IonFab vertical="bottom" horizontal="end" slot="fixed" onClick={() => {
          presentNewMessage();
          }}>
          <IonFabButton>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

        {/* Comienzan las cards */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="tertiary" onClick={()=>{navigate('/user/profile/1')}}><IonIcon icon={person} /> @jdoavila</IonBadge>&nbsp;&nbsp;&nbsp;<IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
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
            <IonCardSubtitle><IonBadge color="tertiary"><IonIcon icon={person} /> @jdoavila</IonBadge>&nbsp;&nbsp;&nbsp;<IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
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
            <IonCardSubtitle><IonBadge color="tertiary"><IonIcon icon={person} /> @jdoavila</IonBadge>&nbsp;&nbsp;&nbsp;<IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
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

        <IonCard >
          <IonCardHeader>
            <IonCardSubtitle><IonBadge color="tertiary"><IonIcon icon={person} /> @jdoavila</IonBadge>&nbsp;&nbsp;&nbsp;<IonBadge color="medium"><IonIcon icon={pin} /> 17.8223, -87.3322</IonBadge></IonCardSubtitle>
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

export default Tab1;
