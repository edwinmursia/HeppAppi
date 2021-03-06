import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ReservationScreen = () => {

    const navigation = useNavigation()

    const [openHorses, setOpenHorses] = useState(false);
    const [valueHorses, setValueHorses] = useState(null);
    const [horses, setHorses] = useState([
        { label: 'Omppu', value: 'Omppu' },
        { label: 'Santtu', value: 'Santtu' },
        { label: 'Koffi', value: 'Koffi' }
    ]);

    const [openTimes, setOpenTimes] = useState(false);
    const [valueTimes, setValueTimes] = useState(null);
    const [times, setTimes] = useState([
        { label: '12:00 - 14:00', value: '12:00-14:00' },
        { label: '14:00 - 16:00', value: '14:00-16:00' },
        { label: '16:00 - 18:00', value: '16:00-18:00' }
    ]);

    const goForward = async () => {
        if (valueHorses, valueTimes) {
            AsyncStorage.setItem('horse', JSON.stringify(valueHorses))
            AsyncStorage.setItem('time', JSON.stringify(valueTimes))
            setValueHorses('');
            setValueTimes('');
            console.log(await AsyncStorage.getItem('horse'))
            console.log(await AsyncStorage.getItem('time'))
            navigation.navigate('MainScreen')
        }
    }

    return (
        <SafeAreaView style={styles.container} >
            <BackButton />
            <DropDownPicker
                style={styles.dropDownHorses}
                open={openHorses}
                value={valueHorses}
                items={horses}
                setOpen={setOpenHorses}
                setValue={setValueHorses}
                setItems={setHorses} 
                placeholder={'Hevosen nimi'}
                textStyle={{color: 'grey'}}
            />
            <TextInput multiline={true} numberOfLines={6} style={styles.input} placeholder={'Lis??tietoja...'} />
            <DropDownPicker
                style={styles.dropDownTimes}
                open={openTimes}
                value={valueTimes}
                items={times}
                setOpen={setOpenTimes}
                setValue={setValueTimes}
                setItems={setTimes} 
                placeholder={'Ajat'}
                textStyle={{color: 'grey'}}
            />
            <Text style={styles.infoText} >Tekem??ll?? varauksen vahvistan, ett?? antamani tiedot on oikein.</Text>
            <Text style={styles.infoText} >Ymm??rr??n, ett?? perumattomasta varauksesta voidaan peri?? maksu.</Text>
            <TouchableOpacity onPress={goForward} style={styles.buttonRegister}>
                <Text style={styles.text} >Vahvista varaus</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    input: {
        height: 150,
        margin: 10,
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 10,
        width: '85%',
        paddingLeft: 10,
        textAlignVertical: 'top',
        paddingTop: 10
    },
    dropDownHorses: {
        width: '85%',
        left: '32%',
        borderColor: 'grey',
        borderWidth: 1,
        zIndex: 1,
        ...Platform.select({
            android: {
                marginTop: '10%'
            },
        }),
        ...Platform.select({
            ios: {
                marginLeft: '3.2%'
            }
        })
    },
    dropDownTimes: {
        width: '85%',
        left: '45%',
        top: '1%',
        marginBottom: 10,
        borderColor: 'grey',
        borderWidth: 1
    },
    infoText: {
        width: '80%',
        maxWidth: '80%',
        fontSize: 14,
        fontWeight: '900',
        paddingTop: 25
    },
    buttonRegister: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 45,
        width: 230,
        marginTop: 40,
        borderRadius: 10,
        borderWidth: 0
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default ReservationScreen
