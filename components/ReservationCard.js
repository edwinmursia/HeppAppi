import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import IconCalendar from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const ReservationCard = () => {

    const isFocused = useIsFocused();
    const [time, setTime] = useState('');
    const [date, setDate] = useState('')

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

        getTime.apply(time)
        getDate.apply(date)
    }

    return (
        <View style={styles.cardWrapper}>
            <View style={styles.calendarLogoWrapper}>
                <View style={styles.calendarLogoContainer}>
                    <IconCalendar name='calendar' size={25} color='#fff' />
                </View>
            </View>
            <View onLayout={getAllValues} style={styles.reservationInfoWrapper}>
                <View style={styles.reservationTimeAndDate}>
                    <Text style={{ fontWeight: 'bold' }}>{time.replace(/['"]+/g, '')}</Text>
                    <Text style={{ paddingRight: 10, color: 'grey' }}>{date.replace(/['"]+/g, '')}</Text>
                </View>
                <Text>Muista muokata tai poistaa ajanvaraus tarvittaessa!</Text>
            </View>
        </View>
    )
}

export default ReservationCard

const styles = StyleSheet.create({
    cardWrapper: {
        height: 90,
        maxHeight: 90,
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#eeeeee',
        flexDirection: 'row',
        borderWidth: 1,
        marginTop: 5
    },
    calendarLogoWrapper: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: 90,
        maxHeight: 90,
        width: '25%',
        maxWidth: '25%',
        alignItems: 'center'
    },
    calendarLogoContainer: {
        backgroundColor: 'green',
        height: 45,
        maxHeight: 45,
        width: '50%',
        borderRadius: 45/2,
        top: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reservationInfoWrapper: {
        height: 90,
        maxHeight: 90,
        width: '75%',
        maxWidth: '75%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    reservationTimeAndDate: {
        width: '100%',
        maxWidth: '100%',
        height: 35,
        maxHeight: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});
