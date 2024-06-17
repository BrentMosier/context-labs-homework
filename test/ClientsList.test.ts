import {mountSuspended} from '@nuxt/test-utils/runtime'
import {it, expect, describe} from 'vitest'
import {ClientList} from '#components'

const resizeWindowTestFunc = (width: number, height: number) =>{
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event('resize'));
}

describe('Client List', () => { 
    it('1. Checks list has data', async () => {
        const component = await mountSuspended(ClientList, {props:{filteredClients:[
            {"name":"john smith", 
            "title":"developer", 
            "avatar": "https://avataaars.io",
        }]}});
        expect(component.find('#list-item-0').classes()).toContain('v-list-item')
    })

    it('2. check card contains data after click', async () => {
       const component = await mountSuspended(ClientList, {props:{filteredClients:[
            {"name":"john smith", 
            "title":"developer", 
            "avatar": "https://avataaars.io",
        }]}});
        resizeWindowTestFunc(1000, 1000)
        component.find('#list-item-0').trigger('click')
        await component.vm.$nextTick()
        requestAnimationFrame(() => {
            expect(component.find('#client-card-title-desktop').text()).toEqual('developer')
        })
    })

    it('3. check card contains data after click, mobile view', async () => {
        const component = await mountSuspended(ClientList, {props:{filteredClients:[
            {"name":"john smith", 
            "title":"developer", 
            "avatar": "https://avataaars.io",
        }]}});
        resizeWindowTestFunc(500, 500)
        component.find('#list-item-0').trigger('click')
        await component.vm.$nextTick()
        requestAnimationFrame(() => {
            expect(component.find('#client-card-title-mobile').text()).toEqual('developer')
        })
    })
})