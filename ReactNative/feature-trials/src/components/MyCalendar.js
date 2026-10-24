import React, { useState } from 'react';
import { View, TouchableOpacity, Button, StyleSheet, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { todayString } from 'react-native-calendars/src/expandableCalendar/commons';
import { Popover } from 'react-native-modal-popover';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DAY_WIDTH = SCREEN_WIDTH / 7;


const CalendarWithPopover = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [showPopover, setShowPopover] = useState(false);
    const [markedDates, setMarkedDates] = useState({});
    const [markedDatesAllContacts, setMarkedDatesAllContacts] = useState({});
    const [markedDatesCustomContacts, setMarkedDatesCustomContacts] = useState({});
    const [selectedCalendar, setSelectedCalendar] = useState('default')
    const [editingCalendar, setEditCalender] = useState(false);

    const [popoverAnchor, setPopoverAnchor] = useState({ x: 0, y: 0 });

    const colorOptions = ['red', 'green', 'yellow', 'white'];

    const date = new Date();

    let day_today = date.getDate();
    let month_current = date.getMonth() + 1;
    let year_current = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year_current}-${month_current}-${day_today}`;

    const onDayPress = (day) => {
        if (!editingCalendar) {
            return;
        }
        // Calculate the position based on the date
        const date = new Date(day.dateString);
        const dayOfWeek = date.getDay();
        const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
        const weekOfMonth = Math.floor((date.getDate() + firstDayOfMonth.getDay() - 1) / 7);

        const HEADER_HEIGHT = 85 + 85; // Adjust this based on your calendar's header height
        const DAY_HEIGHT = 45;    // Adjust this based on your calendar's day height

        const x = (dayOfWeek * DAY_WIDTH) + (DAY_WIDTH / 2);
        const y = HEADER_HEIGHT + (weekOfMonth * DAY_HEIGHT);

        setPopoverAnchor({ x, y });
        setSelectedDate(day.dateString);
        setShowPopover(true);
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
    const handleColorSelect = (color) => {
        console.log(selectedDate, "---", day_today, "===", currentDate);
        let todayBorderWidth = selectedDate === currentDate ? 2 : 0;
        let todayBorderRadius = selectedDate === currentDate ? 20 : 5;
        const tempMarkedDates = selectedCalendar === 'default' ? markedDatesAllContacts : markedDatesCustomContacts;
        const updatedMarkedDates = {
            ...tempMarkedDates,
            [selectedDate]: {
                selected: true,
                selectedColor: color,
                customStyles: {
                    container: {
                        borderRadius: todayBorderRadius,
                        borderColor: `${selectedCalendar === currentDate ? 'blue' : ''}`,
                        borderWidth: todayBorderWidth,
                    },
                    text: {
                        color: 'black'
                    }
                }
                // {(selectedDate === day_today) ? 
                //     {customStyles: {
                //         container: {
                //             borderRadius: 5,
                //             borderColor: 'black', 
                //             borderWidth: 2,
                //         },
                //         text: {
                //             color: 'black'
                //         }
                //     },} :
                //     {customStyles: {
                //         container: {
                //             borderRadius: 5,
                //         },
                //         text: {
                //             color: 'black'
                //         }
                //     },}
                // }

            },
        };
        selectedCalendar === 'default' ? setMarkedDatesAllContacts(updatedMarkedDates) : setMarkedDatesCustomContacts(updatedMarkedDates);
        setShowPopover(false);
    };

    return (
        <View style={styles.container}>

            <View style={styles.buttonRow}>
                <Button color={selectedCalendar === 'default' ? 'green' : 'grey'} title='Default' onPress={HandleSelectedCalendar} />
                <Button color={selectedCalendar === 'custom' ? 'green' : 'grey'} title='Custom' onPress={HandleSelectedCalendar} />
            </View>
            <View style={styles.buttonRow}>
                <Button style={styles.twoButtons} title='Edit' disabled={editingCalendar} onPress={CalendarState} />
                {editingCalendar ?
                    <>
                        <Button style={styles.twoButtons} title='Done' onPress={CalendarState} />
                        <Button style={styles.twoButtons} title='Cancel' onPress={CalendarState} />
                    </>
                    : ''}
            </View>

            <Calendar
                onDayPress={onDayPress}
                markedDates={selectedCalendar === 'default' ? markedDatesAllContacts : markedDatesCustomContacts}
                markingType='custom'
                theme={{
                    todayDotColor: '#00adf5',
                    arrowColor: 'grey',
                    todayButtonFontWeight: 'bold',

                }}
                style={editingCalendar ? {
                    borderWidth: 1,
                    borderColor: 'grey',
                    borderRadius: 0,
                    marginTop: 10,
                } : {
                    borderWidth: 8,
                    borderColor: 'black',
                    borderRadius: 10,
                    margin: 20,
                }}
                displayLoadingIndicator={false}
            />

            <Popover
                visible={showPopover}
                onClose={() => setShowPopover(false)}
                fromRect={{
                    x: popoverAnchor.x,
                    y: popoverAnchor.y,
                    width: 0,
                    height: 0
                }}
                placement="top"
                arrowSize={{ width: 16, height: 6 }}
                arrowStyle={{ backgroundColor: 'grey' }}
                popoverStyle={styles.popover}
                backgroundStyle={{ opacity: 0.1 }} // Reduce background overlay opacity
                animationConfig={{ duration: 0 }} // Remove animation delay
                useNativeDriver={true}
            >
                <View style={styles.popoverContent}>
                    {colorOptions.map((color, index) => (
                        <TouchableOpacity
                            key={index}
                            style={[styles.colorOption, { backgroundColor: color }]}
                            onPress={() => handleColorSelect(color)}
                        />
                    ))}
                </View>
            </Popover>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    popover: {
        backgroundColor: 'red'
        // backgroundColor: 'grey',
        // borderRadius: 8,
        // // padding: 8,
        // shadowColor: '#000',
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,
    },
    popoverContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        backgroundColor: 'grey',
        margin: 0,
    },
    colorOption: {
        width: 25,
        height: 25,
        borderRadius: 2,
        margin: 5,
    },
});

export default CalendarWithPopover;