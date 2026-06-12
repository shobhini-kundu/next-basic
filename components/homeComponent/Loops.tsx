"use client";
import React, { useEffect } from 'react'

const Loops: React.FC = () => {
    const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
    useEffect(() => {
        for(const fruit of fruits) {
            console.log(fruit);
        }
    }, []);
    useEffect(() => {
        fruits.forEach((fruit) => {
            console.log(fruit);
        });
    }, []);


    //================map============================

    
    const users = [
       { name: 'John', age: 12 },
       { name: 'Jane', age: 25 },
    ];
    useEffect(() => {
        const names = users.map((user)  => {
            return user.name;
        });

        const ages = users.map((user)  => {
            return user.age*2;
        });
        console.log(names);
        console.log(ages);
    }, []);


    //================filter============================   


    const students = [
  { id: 1, name: "Rahul", marks: 85 },
  { id: 2, name: "Aman", marks: 45 },
  { id: 3, name: "Priya", marks: 92 },
  { id: 4, name: "Neha", marks: 38 },
  { id: 5, name: "Ravi", marks: 75 },
  { id: 6, name: "Ankit", marks: 55 },
  { id: 7, name: "Sneha", marks: 28 },
  { id: 8, name: "Karan", marks: 88 },
  { id: 9, name: "Pooja", marks: 65 },
  { id: 10, name: "Deepak", marks: 49 }
];
useEffect(() => {
    const failedStudents = students.filter((student) => {
        return student.marks < 50;
    });
    console.log(failedStudents);
});


//==================find============================


useEffect(() => {
    const failedStudents = students.find((student) => {
        return student.id === 4;
    });
    console.log("find data", failedStudents);
});

  return (
    <><div className= "flex items-center justify-center gap-5 flex-wrap">
            {students.map((student) => {
                return(
                     <div key={student.id} className= "bg-gray-500 w-20 h-20">
                        {student.marks <50 && (<>
                    <div> name: {student.name}</div>
                    <div> marks: {student.marks}</div>
                    </>
                        )}
                    </div>
                    );
            })}
       
        </div></>
  ) 
}

export default Loops
