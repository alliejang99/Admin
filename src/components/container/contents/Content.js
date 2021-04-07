import React from 'react'
import Select from './Select'
import UserKocht from './UserKocht'
import Group from './group/Group'
import ServcieList from './service/ServiceList'
import Basic from './basic/Basic'

function Content() {
  return (
    <section className="content">
      <Select />
      <UserKocht />
      <Group />
      <ServcieList />
      <Basic />     
    </section>
  )
} 

export default Content
