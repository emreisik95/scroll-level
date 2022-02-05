# useScrollLevel - a custom React hook
A lightweight (1 kB) package to easily track scroll level in React.js

## Install
`npm install react-scroll-level`

## Example 
```js
import React from 'react'
import { useScrollLevel } from 'react-scroll-level'

function App() {
  const { scrollHeight, scrollWidth } = useScrollLevel();
  console.log('scrollHeight:', scrollHeight); 
  console.log('scrollWidth:', scrollWidth);
}
```