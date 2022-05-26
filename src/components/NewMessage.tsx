import React, { useState, useContext } from 'react';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonList, IonItem, IonTextarea, IonLabel, useIonToast, NavContext } from '@ionic/react';
import { closeOutline, save, logIn } from 'ionicons/icons';
import { Geolocation } from '@capacitor/geolocation';

const NewMessage: React.FC<{
    handleDismiss: () => void;
    saveMessage: (messageText: String, lat: Number, lng: Number) => void;
    logged: boolean;
}> = ({handleDismiss, saveMessage, logged}) => {
    const [message, setMessage] = useState<string>('');
    const [presentToast, dismissToast] = useIonToast();
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const {navigate} = useContext(NavContext);

    const prepareToSaveMessage = async () => {
        if (message.length > 1){
            const coordinates = await Geolocation.getCurrentPosition();
            saveMessage(message, coordinates.coords.latitude, coordinates.coords.longitude);
        } else {
            presentToast('You must write some text to leave a message here.', 3000);
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Create a new geme</IonTitle>
                    <IonButton slot='end' fill='clear' color='dark' onClick={handleDismiss}><IonIcon icon={closeOutline}/></IonButton>
                </IonToolbar>
            </IonHeader>

            <IonContent class="ion-padding">
                <IonList>
                    <IonItem>
                        <IonTextarea disabled={!logged} autoGrow={true} autocapitalize='on' autofocus={true} enterkeyhint='send' inputmode='text' maxlength={500} value={message} placeholder='Write your geme story...' required={true} rows={6} onIonChange={e => {
                                setMessage(e.detail.value!);
                                if (e.detail.value!.length > 1){
                                    setIsEmpty(false);
                                } else {
                                    setIsEmpty(true);
                                }
                            }}></IonTextarea>
                    </IonItem>
                    <IonItem>
                        <IonLabel slot='end'>{ message ? message.length : 0 }/500</IonLabel>
                    </IonItem>
                </IonList>
                {logged &&
                <IonButton disabled={isEmpty} fill='solid' expand='block' color='success' onClick={prepareToSaveMessage}><IonIcon icon={save}/>&nbsp;&nbsp;Save</IonButton>
                }
                {!logged &&
                <h2>You must be logged in the app to leve a message in actual location.</h2>
                }
                {!logged &&
                <IonButton fill='solid' expand='block' color='tertiary' onClick={() => {
                    navigate('/login');
                    }}><IonIcon icon={logIn}/>&nbsp;&nbsp;Go to login</IonButton>
                }
            </IonContent>
        </IonPage>
    )
}

export default NewMessage;