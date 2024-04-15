import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemState,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemHeading,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./value.css";
import { useState } from "react";
function Value() {
  return (
    <section className="v-wrapper paddings innerWidth flexCenter v-container">
      <div className="v-left">
        <div className="image-container">
          <img src="./value.png" alt="" />
        </div>
      </div>
      <div className="v-right flexColStart">
        <span className="orangeText">Our Value</span>
        <span className="primaryText">Value We Give to You</span>
        <span className="secondaryText">
          We always ready to help by providijng the best services for you. We
          beleive a good <br /> blace to live can make your life better
        </span>
        <Accordion
          className="accordion"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((item, index) => {
            const [className, setClassName] = useState(null);
            return (
              <AccordionItem className={`accordionItem ${className}`} key={index} uuid={index} >
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordionBtn">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                      }
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">
                      {item.heading}
                    </span>
                      <div>
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}

export default Value;
