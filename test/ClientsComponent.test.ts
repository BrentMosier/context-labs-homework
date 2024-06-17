import {mountSuspended} from '@nuxt/test-utils/runtime'
import {it, expect, describe} from 'vitest'
import {ClientsComponent} from '#components'

describe('import vue components', () => {
    it('1. can mount the component', async () => {
        const component = await mountSuspended(ClientsComponent)
        expect(component.text()).toContain('Search')
    })
    it('1. list has data', async () => {
        const component = await mountSuspended(ClientsComponent)
        expect(component.find('#list-item-1').classes()).contains('v-list-item-subtitle')
    })
})