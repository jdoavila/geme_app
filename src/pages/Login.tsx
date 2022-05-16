import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonItem, IonLabel, IonInput, IonIcon, IonGrid, IonFooter, NavContext, useIonToast, IonProgressBar } from '@ionic/react';
import { useState, useContext } from 'react';
import { Storage } from '@capacitor/storage';
import { logIn, refresh } from 'ionicons/icons';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [navegando, setNavegando] = useState(false);
  const { navigate } = useContext(NavContext);
  const [presentToast, dismissToast] = useIonToast();


  const login = () => {
    // if (main_tabar) main_tabar.style.display = 'flex';
    if (username.length > 3 && password.length > 3){
      //Vamos a hacer login con el api para obtener un token
      setLoading(true);
      fetch('http://127.0.0.1:8000/api/token/new/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({
          'username': username,
          'password': password
        })
      }).then(response => {
        if (response.status === 200){
          response.json().then(data => {
            //Tenemos via libre, hay que guardar el access y el refresh
            Storage.set({ key: 'geme_app_accessToken', value: data.access });
            Storage.set({ key: 'geme_app_refreshToken', value: data.refresh });
            console.log('refresh >>>, ', data.refresh);
            console.log('access >>. ', data.access);
            setLoading(false);
            navigate('/tab1');
          })
        } else {
          presentToast('Username or password are incorrect.', 3000);
          setLoading(false);
        }
      }).catch(err => {
        presentToast(err.toString(), 3000);
        setLoading(false);
      });
    } else {
      presentToast('Please fill username and password fields.', 3000);
    }
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle size="large">Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {/* <IonImg src={KrakenLogo} style={{width:180, marginLeft: 'auto', marginRight: 'auto'}} className="ion-padding-vertical" /> */}
        <IonGrid>
          <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput type='text' value={username} onIonChange={e => setUsername(e.detail.value || '')}></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type='password' value={password} onIonChange={e => setPassword(e.detail.value || '')}></IonInput>
            </IonItem>
            <IonButton disabled={loading} expand='block' color="success" className='ion-margin-top' onClick={login}><IonIcon icon={logIn}/>&nbsp;&nbsp;Login</IonButton>
        </IonGrid>
      {loading && 
      <IonProgressBar color='warning' type="indeterminate" reversed={true}></IonProgressBar>
      }
      </IonContent>
      <IonFooter collapse="fade">
        <IonToolbar color="light">
          <IonTitle>Geme App &copy; 2022</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
