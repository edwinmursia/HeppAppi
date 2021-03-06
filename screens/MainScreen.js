import React, { useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import ReservationCard from '../components/ReservationCard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

LocaleConfig.locales['fi'] = {
    monthNames: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
    monthNamesShort: ['Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko', 'Kesä', 'Heinä', 'Elo', 'Syys', 'Loka', 'Marras', 'Joulu'],
    dayNames: ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'],
    dayNamesShort: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su']
};
LocaleConfig.defaultLocale = 'fi';

const MainScreen = () => {

    const [dayValue, setDayValue] = useState('');
    const navigation = useNavigation();

    const isFocused = useIsFocused();
    const [time, setTime] = useState('');
    const [date, setDate] = useState('')
    const [name, setName] = useState('')

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
    const getName = () => {
        AsyncStorage.getItem('nameInput')
            .then((name) => {
                setName(name);
            }, [isFocused])
    }

    getTime.apply(time)
    getDate.apply(date)
    getName.apply(name)

    const navFunction = () => {
        navigation.navigate('ReservationScreen')
    }

    const navSettings = () => {
        navigation.navigate('UserSettingsScreen')
    }

    const saveValue = async () => {
        if (dayValue) {
            AsyncStorage.setItem('dayOne', JSON.stringify(dayValue))
            setDayValue('');
            console.log(await AsyncStorage.getItem('dayOne'))
            navFunction()
        }
    }

    let theContent;

    if (time && date) {
        theContent = <ReservationCard />
    } else {
        theContent = <Text style={{ paddingTop: 5, fontSize: 16, fontWeight: '900' }} >Sinulla ei ole uusia varauksia</Text>
    }

    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.upperContainer}>
                <Text style={styles.welcomeText} >Tervetuloa {name.replace(/['"]+/g, '')}!</Text>
                <Icon name='ios-settings-outline' size={20} style={{ paddingRight: 25 }} color='#fff' onPress={navSettings} />
            </View>
            <Text style={{ fontSize: 11, width: '90%', textAlign: 'center', textTransform: 'none', color: 'grey', paddingTop: 20, paddingBottom: 10 }} >
                Varataksesi päivän paina ensin kalenterin päivästä, joka on vihreällä merkitty ja tämän jälkeen paina "Tee varaus" painikkeesta.
            </Text>
            <Calendar
                enableSwipeMonths={true}
                style={styles.calendar}
                minDate={Date()}
                onDayPress={(dayValue) => setDayValue(dayValue.dateString)}
                // Dates that the teacher marks in the calendar.
                markedDates={{
                    '2021-12-16': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-19': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-20': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-21': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-22': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-23': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-26': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-27': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-28': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-29': { selectedColor: 'green', selected: true, disabled: false },
                    '2021-12-30': { selectedColor: 'green', selected: true, disabled: false }
                }}
                disabledByDefault={true}
                disableAllTouchEventsForDisabledDays={true}
                theme={{
                    arrowColor: '#518B35',
                    todayTextColor: '#518B35',
                    monthTextColor: '#518B35',
                    textSectionTitleColor: '#518B35'
                }}
            />
            <TouchableOpacity style={styles.buttonLogIn} onPress={saveValue} >
                <Text style={styles.text} >Tee varaus</Text>
            </TouchableOpacity>
            <Text style={{ paddingTop: 30, fontSize: 16, fontWeight: 'bold' }} >Varaukseni:</Text>
            {theContent}
        </SafeAreaView>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    upperContainer: {
        height: '8%',
        maxHeight: '8%',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#518B35',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        ...Platform.select({
            android: {
                marginTop: '7%'
            }
        })
    },
    welcomeText: {
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold',
        paddingLeft: 25
    },
    calendar: {
        height: 350,
        maxHeight: 350,
        width: 375,
        maxWidth: 375
    },
    buttonLogIn: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#66CE26',
        height: 45,
        width: 230,
        marginTop: 15,
        borderRadius: 10,
        borderWidth: 0
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
});
