
import React, { useCallback } from 'react'


/**
 *
 *
 * @export
 * @param {(string|Object|Array<any>)} data - The data to be rendered fetched from Ember CMS
 * @param {Map<string,JSX.Element>} elementMap - Map supported nodeTypes to your custom components
 * @return {*}  {JSX.Element} - Returns the approppriate component type(s)
 */
export function EmberParse(data:string|Object|Array<any>, elementMap:Map<string,JSX.Element>):JSX.Element {

  
  return <p></p>
}

export const NODETYPES = [
    'heading-one',
    'heading-two',
    'heading-three',
    'heading-four',
    'heading-five',
    'heading-six',
    'paragraph',
    'bulleted-list',
    'numbered-list',
    'list-item',
    'quote',
    'code',
    'image',
    'link',
    'block-quote',
    'block',
  ];
