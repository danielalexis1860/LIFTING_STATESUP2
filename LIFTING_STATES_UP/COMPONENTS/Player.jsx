 // USER INPUT AND TWO WAY BINDING
 //UPDAING STATE BY CREATING ANOTHER FUNCTION ON THAT STATE YOU WANT TO UPDATE
 
 import { useState }  from 'react';


export default function Player({initialName, symbol, isActive}){
   const [ playerName, setPlayerName ]  = useState(initialName);
    const [ isEditing, setIsEditing ]  = useState(false);

    function handleEditClick() {
       // setIsEditing(isEditing ? false : true);  
       setIsEditing((editing) => !editing);  // updating state
   //    setIsEditing(editing => !editing); 

    }

    //UPDATE THIS STATE
    function handleChange(event)  // the name in the bracket is up to you but just ve consistent with it.  
    {
      /*let me then comment out the console.log in line 22
      console.log(event); */
      setPlayerName(event.target.value);   //setting the value as a new state for playerName
    } 

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = 'Edit';

    if (isEditing)  {
      editablePlayerName = <input  type="text" required value={playerName} onChange={handleChange} />;      // this is how you cna get access to vlaues  entered by a user into an input field.
       // btnCaption = 'Save'; 
    }

    return( //add conditional className to li
        <li className={isActive ? 'active' : undefined}>
        <span className="player">
         {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
       </li>

    );
}