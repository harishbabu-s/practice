import React, { useState } from 'react';
import { View, Button, Alert, StyleSheet, Text, Pressable, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CustomCalendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedColor, setSelectedColor] = useState('white')
    const [markedDates, setMarkedDates] = useState({});
    const [markedDatesAllContacts, setMarkedDatesAllContacts] = useState({});
    const [markedDatesCustomContacts, setMarkedDatesCustomContacts] = useState({});

    const [modalVisibility, setModalVisibility] = useState(false);


    const [selectedCalendar, setSelectedCalendar] = useState('default')
    const [editingCalendar, setEditCalender] = useState(false);

    const options = ['red', 'green', 'yellow']

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString)
        setModalVisibility(true)
    };

    const CalendarState = () => {
        setEditCalender(!editingCalendar);
    }

    const HandleSelectedCalendar = () => {
        if (selectedCalendar === 'default') {
            setSelectedCalendar('custom');
        } else {
            setSelectedCalendar('default')
        }
    }

    const handleDayPressForAllContacts = (color) => {
        const updatedMarkedDates = {
            ...markedDatesAllContacts,
            [selectedDate]: {
                selected: true,
                selectedColor: color === 'white' ? '#fff' : color,
            },
        };
        setMarkedDatesAllContacts(updatedMarkedDates);
        setModalVisibility(!modalVisibility)
    }

    const handleDayPressForCustomContacts = (color) => {
        const updatedMarkedDates = {
            ...markedDatesCustomContacts,
            [selectedDate]: {
                selected: true,
                selectedColor: color === 'white' ? '#fff' : color,
            },
        };
        setMarkedDatesCustomContacts(updatedMarkedDates);
        setModalVisibility(!modalVisibility)
    }

    const colorPicker = () => {
        return options.map((option, index) => (
            <Pressable
                key={index}
                style={[styles.buttonColor, { backgroundColor: option }]}
                onPress={() =>
                    selectedCalendar === 'default' ? handleDayPressForAllContacts(option) : handleDayPressForCustomContacts(option)}
            >
            </Pressable>
        ));

    }

    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Button color={selectedCalendar === 'default' ? 'green' : 'grey'} title='Default' onPress={HandleSelectedCalendar} />
                <Button color={selectedCalendar === 'custom' ? 'green' : 'grey'} title='Custom' onPress={HandleSelectedCalendar} />
            </View>
            <View style={styles.buttonRow}>
                <Button style={styles.twoButtons} title='Edit' disabled={editingCalendar} onPress={CalendarState} />
                {editingCalendar ? <Button style={styles.twoButtons} title='Done' onPress={CalendarState} /> : ''}
            </View>


            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisibility}
                onRequestClose={() => {
                    setModalVisibility(!modalVisibility);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Set Status</Text>
                        <View style={{ flexDirection: 'row', }} >
                            {colorPicker()}
                        </View>
                    </View>
                </View>
            </Modal>

            {selectedCalendar === 'default' && <Calendar
                // onDayPress={handleDayPressForAllContacts}
                onDayPress={handleDayPress}
                markingType='custom'
                markedDates={markedDatesAllContacts}
                theme={{
                    todayTextColor: '#00adf5',
                    todayBackgroundColor: '#11111130',
                    arrowColor: 'grey',
                }}
                disabled={true}
            />}

            {selectedCalendar === 'custom' && <Calendar
                onDayPress={handleDayPress}
                markedDates={markedDatesCustomContacts}
                theme={{
                    todayTextColor: '#00adf5',
                    todayBackgroundColor: '#11111130',
                    arrowColor: 'grey',
                }}
                markingType='simple'

            />}

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },
    buttonRow: {
        flexDirection: 'row'
    },
    twoButtons: {

    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00000050'
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.50,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        fontSize: 16,
    },
    buttonColor: {
        width: 30,
        height: 30,
        margin: 5,
    }

});

export default CustomCalendar;
