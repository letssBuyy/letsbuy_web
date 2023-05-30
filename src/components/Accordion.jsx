import React, { useState } from "react";
import {
    AccordionWrapper,
    AccordionHeader,
    AccordionContent
} from "../assets/styles/components/accordionStyle"

export default function Accordion(props) {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = React.useRef(null);
    const height = isOpen ? contentRef.current.scrollHeight : 0;

    return (
        <AccordionWrapper>
            <AccordionHeader onClick={() => setIsOpen(!isOpen)}>
                {
                    props.headerHTML == null || props.headerHTML == undefined ?
                        <div>
                            <h1>{props.header}</h1>
                        </div>
                        :
                        props.headerHTML
                }
            </AccordionHeader>
            <AccordionContent
                style={{ height: `${height}px` }}
                ref={contentRef}
            >
                {props.content}
            </AccordionContent>
        </AccordionWrapper>
    )
}