import React, { useState } from "react";
import {Label,  InputContainer} from '../assets/styles/components/InputStyle';

export default function Input(props) {
    var isHiddenLabel = props.isHiddenLabel ? props.isHiddenLabel : false
    var label = props.label ? props.label : ""
    var placeholder = props.placeholder ? props.placeholder : ""
    var icon = props.icon ? props.icon : ""
    var iconAccessibility = props.iconAccessibility ? props.iconAccessibility : ""
    var type = props.type ? props.type : "text"
    var width = props.width ? props.width : "100%"
    var height = props.height ? props.height : "48px"

    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
      const newValue = event.target.value;
      setInputValue(newValue);
      props.onTextChange(newValue);
    }

    console.log(inputValue)

    return (
        <>
            {
                !isHiddenLabel ?
                    <Label>{label}</Label>
                    :
                    <></>
            }
            <InputContainer style={{minWidth: width, height: height}}>
                <input type={type} placeholder={placeholder} onChange={handleChange}></input>
                {
                    icon !== null && icon !== undefined && icon !== "" ?
                        <img src={icon} alt={iconAccessibility} />
                        :
                        <></>
                }
            </InputContainer>
        </>
    )
}