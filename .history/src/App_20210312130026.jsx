import React from 'react';
const SlotM=()=>{
    let x='😃';
    let y='😃';
    let z='😃';

    if((x==y) && (y==z)){
        return(
            <>
            <div className='slot_inner'>
            <h1>
                {" "}
                {x} {y} {z}{" "} 
            </h1>
            <h1>This is Matching</h1> 
            <hr/>
            </div>
            </>
        )
    }
}
const App=()=>{
return(
<>
<h1 className="heading_style">
Welcome to <span style={{fontWeight:'BOLD'}}>Slot machine game</span>:slot{" "}
</h1>
<SlotM/>
</>
);
};
export default App;