import {mountSuspended} from '@nuxt/test-utils/runtime'
import {it, expect, describe } from 'vitest'
import {CountryFlagDisplay} from '#components'

describe('countryFlagDisplay', () => { 
    it('1. Checks tooltip text', async () => {
        const component = await mountSuspended(CountryFlagDisplay, {props:{nationality:'France'}});
        component.trigger('mouseover')
        await component.vm.$nextTick()
        requestAnimationFrame(() => {
            expect(component.find('#tooltip-text').text()).toEqual('France')
        })
    })

    it('2. Checks flag exists', async () => {
        const component = await mountSuspended(CountryFlagDisplay, {props:{nationality:'France'}});
        expect(component.find('#flag-icon').classes()).toContain('f-fr')
    })
})