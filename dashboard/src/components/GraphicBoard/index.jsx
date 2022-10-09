import './styles.css';
import { Chart } from 'react-google-charts';
import {useEffect, useState} from 'react'
export const options = {
    title: "",
    backgroundColor: 'transparent',
    legend: "none"
}
function GraphicBoard({students}) {
    function loadMaleStudents(){
        let value = 0;
        students.forEach((student) => {
            student.sexo === "Masculino" && value++
        })
        return value;
    }
    function loadFemaleStudents(){
        let value = 0;
        students.forEach((student) => {
            student.sexo === "Feminino" && value++
        })
        return value;
    }
    const data = [
        ["Alunos", "Sexo"],
      ["Masculino", loadMaleStudents()],
      ["Feminino", loadFemaleStudents()],
    ]
    return (
        <div className='container-graphic'>
                <Chart 
                    chartType="PieChart"
                    data={data}
                    options={options}
                    width={"100%"}
                    height={"100%"}
                />
        </div>
    )
};

export default GraphicBoard;