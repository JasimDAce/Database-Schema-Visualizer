'use client'
import React from 'react'
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';



const VisualizerEditor = () => {
  return (
   // <div className='grid grid-cols-12'>
  
  <Editor className='bg-gray' height="90vh" defaultLanguage="javascript" defaultValue="// some comment" />

 // </div>
  )
}

export default VisualizerEditor