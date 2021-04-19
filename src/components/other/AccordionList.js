import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

function AccordionList({accordionItems}) {
    return (
        <>
            <Accordion className="accordion accordion-item pr-4" id="accordionExample">

                {accordionItems.map((item, i) => {
                    return (
                        <div className={'card ' + item.cardClass} key={i}>
                            <AccordionItem>
                                <AccordionItemHeading className="card-header">
                                    <AccordionItemButton className="btn btn-link d-flex align-items-center justify-content-between">
                                        {item.title}
                                        <i className="minus">{item.minus}</i>
                                        <i className="plus">{item.plus}</i>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <div className="card-body">
                                        {item.desc}
                                    </div>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </div>
                    )
                })}

            </Accordion>
        </>
    );
}

export default AccordionList;
