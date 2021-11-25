import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['fi'] = {
    monthNames: ['Tammikuu', 'Helmikuu', 'Maaliskuu', 'Huhtikuu', 'Toukokuu', 'Kesäkuu', 'Heinäkuu', 'Elokuu', 'Syyskuu', 'Lokakuu', 'Marraskuu', 'Joulukuu'],
    monthNamesShort: ['Tammi', 'Helmi', 'Maalis', 'Huhti', 'Touko', 'Kesä', 'Heinä', 'Elo', 'Syys', 'Loka', 'Marras', 'Joulu'],
    dayNames: ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'],
    dayNamesShort: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su']
};
LocaleConfig.defaultLocale = 'fi';

const MainScreen = () => {
    return (
        <SafeAreaView style={styles.container} >
            <View style={styles.upperContainer}>
                <Text style={styles.welcomeText} >Tervetuloa Etunimi!</Text>
                <Icon name='ellipsis-vertical' size={20} style={{ paddingRight: 25 }} color='#fff' />
            </View>
            <Calendar
                enableSwipeMonths={true}
                style={styles.calendar}
                minDate={Date()}
                theme={{
                    arrowColor: '#518B35',
                    todayTextColor: '#518B35',
                    monthTextColor: '#518B35',
                    textSectionTitleColor: '#518B35'
                }}
            />
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
                marginTop: '8%'
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
    }
});
