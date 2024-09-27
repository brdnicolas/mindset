import { Select } from '@/components'
import { DropdownItemType } from '@/components/atoms/dropdown/Dropdown'
import { Autocomplet } from '@/components/molecules/autocomplet/Autocomplet'
import { setInformation } from '@/contexts/applicationDetails/applicationDetails.actions'
import { useApplicationDetailsContext } from '@/contexts/applicationDetails/applicationDetails.provider'
import { updateApplicationById } from '@/services/applications/application'
import { getAddressAutocompletion } from '@/services/datagouv/datagouv'
import axios from 'axios'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface ApplicationLocationOption {
  lat: number
  lng: number
  locationLabel: string
}

export const Details = () => {
  const { locationLabel, dispatch: dispatchApplicationDetails, id } = useApplicationDetailsContext()

  const [currentLocationLabel, setCurrentLocationLabel] = useState(locationLabel)
  const [locationOptions, setLocationOptions] = useState<DropdownItemType<ApplicationLocationOption>[]>([])

  const [contractLabel, setContractLabel] = useState('')
  const contractTypeOptions = [
    { value: 'cdi', label: 'CDI' },
    { value: 'cdd', label: 'CDD' },
    { value: 'alternance', label: 'Alternance' },
    { value: 'stage', label: 'Stage' }
  ]

  useEffect(() => {
    if (currentLocationLabel !== locationLabel) {
      const delayDebounceFn = setTimeout(() => {
        getAddressAutocompletion(currentLocationLabel).then((data) => {
          setLocationOptions(
            data.map((location) => ({
              label: location.properties.label,
              value: {
                lat: location.geometry.coordinates[1],
                lng: location.geometry.coordinates[0],
                locationLabel: location.properties.label
              }
            }))
          )
        })
      }, 1000)

      return () => clearTimeout(delayDebounceFn)
    }
  }, [currentLocationLabel])

  const handleOnLocationChange = (item: DropdownItemType<ApplicationLocationOption>) => {
    dispatchApplicationDetails(
      setInformation({
        lat: item.value.lng,
        lng: item.value.lat,
        locationLabel: item.value.locationLabel
      })
    )
    setCurrentLocationLabel(item.label)
    updateApplicationById(id, {
      lng: item.value.lng,
      lat: item.value.lat,
      locationLabel: item.value.locationLabel
    })
  }

  return (
    <div className={clsx('w-full ml-0 mt-6 ', 'laptop:w-1/2 laptop:ml-30')}>
      <p className="text-4 text-gray-50 font-bold mb-6">Détails</p>
      <div className="flex gap-10">
        <Autocomplet<ApplicationLocationOption>
          onChange={(e) => {
            setCurrentLocationLabel(e.target.value)
          }}
          className="w-full"
          label="Localisation"
          iconName="map-pin"
          placeholder="Localisation"
          value={currentLocationLabel}
          options={locationOptions}
          onItemClick={handleOnLocationChange}
        />
        <Select
          onChange={(option) => {
            setContractLabel(option.label)
          }}
          value={contractLabel}
          options={contractTypeOptions}
          className="w-full"
          defaultValue="CDI"
          label="Type de contrat"
          iconName="document-remove"
        />
      </div>
    </div>
  )
}
