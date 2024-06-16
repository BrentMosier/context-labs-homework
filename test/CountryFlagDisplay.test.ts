import {mountSuspended} from '@nuxt/test-utils/runtime'
import {it, expect, describe} from 'vitest'
import {CountryFlagDisplay} from '#components'

describe('countryFlag', () => { 
    it('can mount the component', async () => {
        const component = await mountSuspended(CountryFlagDisplay)
        expect(component.text()).toContain('Test')
    })
})