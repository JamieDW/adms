import Vue from 'vue'
import Card from './Card'
import SearchFilters from './SearchFilters'
import VehicleCard from './VehicleCard'
import Child from './Child'
import Button from './Button'
import Checkbox from './Checkbox'
import VSelect from './controls/Select'
import Pagination from './controls/Pagination'
import { HasError, AlertError, AlertSuccess } from 'vform'

// Components that are registered globally.
[
  Card,
  VehicleCard,
  SearchFilters,
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

