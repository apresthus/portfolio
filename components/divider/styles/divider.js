import styled from "styled-components";
/*
Styles from: http://www.iraqtimeline.com/maxdesign/basicdesign/principles/prinhorizontal.html
*/
export const Divider = styled.hr`
 display: block;
   position: relative;
   padding: 0;
   margin: 8px auto;
   height: 0;
   width: 250em;
   max-height: 0;
   font-size: 1px;
   line-height: 0;
   clear: both;
   border: none;
   border-top: 7px solid ${props => props.color? props.color : "#000"};
`;

export const VerticalDivider = styled.hr`
  display: inline-block;
  width: 2px;
  background-color: #eee;
  margin: 0 10px;
  height: ${props => props.height? props.height : "1em"};
`;