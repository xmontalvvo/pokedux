import React from 'react'
import {Input} from 'antd'

export default function Searcher() {
  return (
    <Input.Search placeholder='Buscar...' style={{marginBottom: 10}}/>
  )
}
