
import React, { useCallback } from 'react'

export default function RichText(props) {
  return (
    <div> RichText</div>
  )
}
const NODETYPES = [
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

const Element = (props) => {
    const { attributes, children, element } = props
      switch (element.type) {
        case 'field':
          return <Field {...props} />
        case 'paragraph':
          return <p {...attributes}>{children}</p>
        case 'quote':
          return <blockquote {...attributes}>{children}</blockquote>
        case 'bulleted-list':
          return <ul {...attributes}>{children}</ul>
        case 'code':
          return <code {...attributes}>{children}</code>
        case 'heading-one':
          return <h1 {...attributes}>{children}</h1>
        case 'heading-two':
          return <h2 {...attributes}>{children}</h2>
        case 'heading-three':
          return <h3 {...attributes}>{children}</h3>
        case 'heading-four':
          return <h4 {...attributes}>{children}</h4>
        case 'heading-five':
          return <h5 {...attributes}>{children}</h5>
        case 'heading-six':
          return <h6 {...attributes}>{children}</h6>
        case 'list-item':
          return <li {...attributes}>{children}</li>
        case 'numbered-list':
          return <ol {...attributes}>{children}</ol>
        case 'link':
          return (
                <a href={element.url} {...attributes}>
                  {children}
                </a>
              )
        case 'image':
          return <Image {...props} />
        default:
          return <p {...attributes}>{children}</p>
      }
    }
    
    const Leaf = ({ attributes, children, leaf }) => {
      if (leaf.bold) {
        children = <strong>{children}</strong>
      }
    
      if (leaf.code) {
        children = <code>{children}</code>
      }
    
      if (leaf.italic) {
        children = <em>{children}</em>
      }
    
      if (leaf.underline) {
        children = <u>{children}</u>
      }
    
      return <span {...attributes}>{children}</span>
    }
