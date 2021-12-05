import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import IconCalendar from 'react-native-vector-icons/Feather';

const ReservationCard = () => {
    return (
        <View style={styles.cardWrapper}>
            <View style={styles.calendarLogoWrapper}>
                <View style={styles.calendarLogoContainer}>
                    <IconCalendar name='calendar' size={25} color='#fff' />
                </View>
            </View>
            <View style={styles.reservationInfoWrapper}>
                <View style={styles.reservationTimeAndDate}>
                    <Text style={{ fontWeight: 'bold' }}>Klo 12:00 - 14:00</Text>
                    <Text style={{ paddingRight: 10, color: 'grey' }}>26. Kesä 2021</Text>
                </View>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</Text>
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
        borderWidth: 1
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
