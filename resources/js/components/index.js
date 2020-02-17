import Vue from 'vue'
import Card from './Card'
import HorizontalCard from './HorizontalCard'
import VehicleCard from './VehicleCard'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import Pagination from './Pagination'


// Components that are registered globally.
[
  Card,
  HorizontalCard,
  VehicleCard,
  Child,
  Button,
  Checkbox,
  Pagination
].forEach(Component => {
  Vue.component(Component.name, Component)
})

