import Vue from 'vue'
import Card from './Card'
import HorizontalCard from './HorizontalCard'
import VehicleCard from './vehicle/card'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import VSelect from './controls/Select'
import Pagination from './controls/Pagination'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globally.
[
  Card,
  HorizontalCard,
  VehicleCard,
  Child,
  Button,
  Checkbox,
  VSelect,
  Pagination,
  HasError,
  AlertError,
  AlertSuccess
].forEach(Component => {
  Vue.component(Component.name, Component)
})

