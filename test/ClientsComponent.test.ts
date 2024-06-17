import {mountSuspended} from '@nuxt/test-utils/runtime'
import {it, expect, describe} from 'vitest'
import {ClientsComponent} from '#components'

describe('Clients Component', () => {
    it('1. can mount the component', async () => {
        const component = await mountSuspended(ClientsComponent)
        expect(component.text()).toContain('Search')
    })
})