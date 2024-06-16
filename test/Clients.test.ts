import {mountSuspended} from '@nuxt/test-utils/runtime'
import {it, expect, describe} from 'vitest'
import {Clients} from '#components'

describe('import vue components', () => {
    it('can mount the component', async () => {
        const component = await mountSuspended(Clients)
        expect(component.text()).toContain('Search')
    })
})