import React, { useState } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Agenda } from 'react-native-calendars';

const MyAgedna = () => {
    const [items, setItems] = useState({
        '2024-11-07': [{ name: 'Event 1' }, { name: 'Event 2' }],
        '2024-11-08': [{ name: 'Event 3' }],
        '2024-11-09': [{ name: 'Event 4' }, { name: 'Event 5' }],
    });

    // This function will load events dynamically
    const loadItems = (day) => {
        setTimeout(() => {
            const newItems = {};
            newItems[day.dateString] = [{ name: `Event on ${day.dateString}` }];
            setItems((prevItems) => ({ ...prevItems, ...newItems }));
        }, 1000);
    };

    // Render each item in the list
    const renderItem = (item) => (
        <View style={styles.eventContainer}>
            <Text style={styles.eventText}>{item.name}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <Agenda
                items={items} // items will be your events for each day
                loadItemsForMonth={loadItems} // function to load more events dynamically as the user scrolls
                selected={'2024-11-07'} // initially selected date
                renderItem={renderItem} // render each item in the event list
                rowHasChanged={(r1, r2) => r1.name !== r2.name} // to optimize rendering
                pastScrollRange={2} // scroll back 12 months
                futureScrollRange={12} // scroll ahead 12 months
                renderEmptyDate={() => <Text>No events for this day</Text>} // render this when no events are found
                monthFormat={'yyyy MM'} // display month in format: YYYY MM
                firstDay={1} // start weeks from Monday
                markingType={'period'} // style for marked dates (e.g., range, dot, etc.)
                markedDates={{
                    '2024-11-07': { selected: true, marked: true, selectedColor: 'blue' },
                    '2024-11-08': { marked: true },
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : 20, // Adjust for status bar on iOS
    },
    eventContainer: {
        backgroundColor: '#f0f0f0',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        marginHorizontal: 10,
    },
    eventText: {
        fontSize: 16,
        color: '#333',
    },
});

export default MyAgedna;
