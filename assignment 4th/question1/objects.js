alert(" Check from the objects.js file geekster_class. Give the list of students which have greater than or equal to 85 marks?");

var geekster_class = {
    'name': "DecemberWebFundamentals",
    'startDate': "14 Dec 2021",
    'instructor': {
        'name': "Aayush Sinha ",
        'subject': "JavaScript",
        'salary': "1000000",
    },

    'companies': {
        'name': "Google",
        'address': "USA",
        'employees': "1000M",
        'netWorth': "$9999Trillion"
    },

    'students': [{
            'name': "Ujjwal",
            'marks': "85"
        },
        {

            'name': "Anshul",
            'marks': "45"
        },

        {
            'name': "Ayush",
            'marks': "75"
        },
        {

            'name': "irfan",
            'marks': "88"
        },

        {

            'name': "lasya",
            'marks': "70"
        },

        {

            'name': "virat",
            'marks': "96"
        },
        {
            'name': "rohit",
            'marks': "53"


        },

        {
            'name': "sharma",
            'marks': "100"


        }
    ],

};




size_students = geekster_class.students.length;
var listOfStudents = [];
for (i = 0; i < size_students; i++) {

    if (geekster_class.students[i]['marks'] >= 85) {




        listOfStudents.push([geekster_class.students[i]['name']]);

    }
}

console.log(listOfStudents);
alert(listOfStudents);