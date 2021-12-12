import React, {useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Pressable } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import BackButton from '../components/BackButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const EditReservationScreen = () => {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [horse, setHorse] = useState('');

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

    const deleteReservation = async () => {
        AsyncStorage.removeItem('time')
        AsyncStorage.removeItem('dayOne')
        navigation.navigate('MainScreen')
    }

    const getAllValues = () => {

        const getTime = () => {
            AsyncStorage.getItem('time')
            .then((time) => {
                setTime(time);
            }, [isFocused])
        }
        const getDate = () => {
            AsyncStorage.getItem('dayOne')
            .then((date) => {
                setDate(date);
            }, [isFocused])
        }
        const getHorse = () => {
            AsyncStorage.getItem('horse')
            .then((horse) => {
                setHorse(horse);
            }, [isFocused])
        }

        getTime.apply(time)
        getDate.apply(date)
        getHorse.apply(horse)
    }

    return (
        <SafeAreaView style={styles.container} onLayout={getAllValues} >
            <BackButton />
            <DropDownPicker
                style={styles.dropDownHorses}
                open={openHorses}
                value={valueHorses}
                items={horses}
                setOpen={setOpenHorses}
                setValue={setValueHorses}
                setItems={setHorses} 
                placeholder={horse.replace(/['"]+/g, '')}
                textStyle={{color: 'grey'}}
            />
            <TextInput multiline={true} numberOfLines={6} style={styles.input} placeholder={'Lisätietoja...'} />
            <DropDownPicker
                style={styles.dropDownTimes}
                open={openTimes}
                value={valueTimes}
                items={times}
                setOpen={setOpenTimes}
                setValue={setValueTimes}
                setItems={setTimes} 
                placeholder={time.replace(/['"]+/g, '')}
                textStyle={{color: 'grey'}}
            />
            <Text style={styles.infoText} >Tekemällä varauksen vahvistan, että antamani tiedot on oikein.</Text>
            <Text style={styles.infoText} >Ymmärrän, että perumattomasta varauksesta voidaan periä maksu.</Text>
            <TouchableOpacity onPress={goForward} style={styles.buttonModify}>
                <Text style={styles.text} >Muokkaa varausta</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={deleteReservation} style={styles.buttonDelete}>
                <Text style={styles.text} >Poista varaus</Text>
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
        height: 200,
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
        fontSize: 18,
        fontWeight: '900',
        paddingTop: 25
    },
    buttonModify: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 45,
        width: 230,
        marginTop: 40,
        borderRadius: 20,
        borderWidth: 0
    },
    buttonDelete: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 45,
        width: 230,
        marginTop: 10,
        borderRadius: 20,
        borderWidth: 0
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default EditReservationScreen
