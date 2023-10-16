import React from "react";
import { useState } from 'react';
function Pallindrome() {
    const [string, setString] = useState();

    function showAlert() {
        const isPalindrome = validatePallindrome(string);
        if (isPalindrome == true) {
            alert("It is a palindrome");
        } else {
            alert("It is not a palindrome");
        }
    };

    const onChangeInput = (event) => {
        setString(event.target.value);
    };

    const validatePallindrome = (string) => {
        const len = string.length;
        let i;
        for (i = 0; i < len / 2; i++) {
            if (string[i] !== string[len - 1 - i]) {
                return  false;
            }
        }
        return true;
    }


    return (
        <div>
            <label for="Enter">Enter the name</label>
            <input type="text" id="enter" value={string} onChange={onChangeInput}></input>
            <button onClick={showAlert} type="button">Submit</button>
        </div>
    );
}

export default Pallindrome;