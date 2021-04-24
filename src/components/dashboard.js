import React from 'react';
import '../stylesheets/dashboard.css';
import {Bar, Doughnut,defaults} from 'react-chartjs-2';
export default function Dashboard() {
    return (
        <>
            <div style={{display:'flex',justifyContent:'space-around',fontSize:20,marginTop:40,marginLeft:300,marginRight:300}}>
                <div className='taskdiv' >
                    <p className='taskCount'>0</p>
                    <p className='taskCount'>Completed Tasks</p>
                </div>
                <hr style={{margin:0}}/>
                <div className='taskdiv'>
                    <p className='taskCount'>0</p>
                    <p className='taskCount'>Incomplete Tasks</p>
                </div>
                <hr style={{margin:0}}/>
                <div className='taskdiv'>
                    <p className='taskCount'>0</p>
                    <p className='taskCount'>Total Tasks</p>
                </div>
            </div>
            <div style={{margin:20,display:'flex'}}>
                <div style={{width:'50%'}}>
            <Doughnut
            data={{
                    labels: ['Completed','Incomplete'],
                    datasets: [{
                    label: 'Tasks Count',
                    data: [24,50],
                    backgroundColor: [
                      'blue',
                      'lightblue'
                    ],
                    hoverOffset: 4,
                    borderWidth:0,
                  }],
            }}   
            height={100}
            />
            </div>
            <div style={{width:'50%'}}>
            <Bar
            data={{
                labels: ['Project 1','Project 2','Project 3','Project 1','Project 2','Project 3','Project 1','Project 2','Project 3','Project 2','Project 3'],
                datasets: [{
                label: 'Project progress',
                data: [2,5,25,6,5,8,5,8,5,65,6],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(255, 159, 64, 0.5)',
                    'rgba(255, 205, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(201, 203, 207, 0.5)',
                ],
              }],
        }}   
        height={300}
        width={50}
        options={{maintainAspectRatio:false}}
        />
        </div>
        </div>
        </>
    )
}
