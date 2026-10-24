const students = [
    {
        name: "A",
        rollNo: 1,
        mids: [
            {
                mid: 1,
                telugu: 84,
                hindi: 40,
                english: 40,
            },
            {
                mid: 2,
                telugu: 35,
                hindi: 64,
                english: 72,
            },
            {
                mid: 3,
                telugu: 45,
                hindi: 23,
                english: 60,
            },
        ],
    },
    {
        name: "B",
        rollNo: 2,
        mids: [
            {
                mid: 1,
                telugu: 80,
                hindi: 48,
                english: 41,
            },
            {
                mid: 2,
                telugu: 35,
                hindi: 60,
                english: 70,
            },
            {
                mid: 3,
                telugu: 45,
                hindi: 50,
                english: 60,
            },
        ],
    },
    {
        name: "C",
        rollNo: 3,
        mids: [
            {
                mid: 1,
                telugu: 42,
                hindi: 44,
                english: 40,
            },
            {
                mid: 2,
                telugu: 3,
                hindi: 60,
                english: 72,
            },
            {
                mid: 3,
                telugu: 45,
                hindi: 40,
                english: 60,
            },
        ],
    },
];

// Helper function to calculate the total marks for a given mid
function calculateTotal(marks) {
    return marks.telugu + marks.hindi + marks.english;
}

// Calculate the highest two mid totals' average for each student
students.forEach(student => {
    // Get the total marks for each mid
    const totals = student.mids.map(mid => calculateTotal(mid));

    // Sort the totals in descending order and pick the highest two
    totals.sort((a, b) => b - a);
    const highestTwo = totals.slice(0, 2);

    // Calculate the average of the highest two totals
    student.average = (highestTwo[0] + highestTwo[1]) / 2;
});

// Sort the students based on the average in descending order
students.sort((a, b) => b.average - a.average);

// Output the sorted students with their ranks
students.forEach((student, index) => {
    console.log(`Rank: ${index + 1}, Name: ${student.name}, RollNo: ${student.rollNo}, Average: ${student.average.toFixed(2)}`);
});


// // Calculate the highest two mid totals' average for each student
// students.forEach(student => {
//     // Use reduce to calculate the total marks for each mid
//     const totals = student.mids.map(mid =>
//         Object.values(mid).reduce((acc, value) => acc + value, 0) // Sum of all subject marks in the mid
//     );

//     // Sort totals in descending order and select the top 2
//     totals.sort((a, b) => b - a);
//     const highestTwo = totals.slice(0, 2);

//     // Calculate the average of the highest two totals
//     student.average = (highestTwo[0] + highestTwo[1]) / 2;
// });

// // Sort the students based on the average in descending order
// students.sort((a, b) => b.average - a.average);

// // Output the sorted students with their ranks
// students.forEach((student, index) => {
//     console.log(`Rank: ${index + 1}, Name: ${student.name}, RollNo: ${student.rollNo}, Average: ${student.average.toFixed(2)}`);
// });