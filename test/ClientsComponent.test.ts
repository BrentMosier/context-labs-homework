import {mountSuspended, registerEndpoint} from '@nuxt/test-utils/runtime'
import {it, expect, describe} from 'vitest'
import {ClientsComponent} from '#components'

const apiResult = [
    {"name":"john smith", 
    "title":"developer", 
    "avatar": "https://avataaars.io/",
},
{"name":"b", 
    "title":"b", 
    "avatar": "b",
}]
const apiEndpoint = 'http://localhost:3000/api/clients';

describe('Clients Component', () => {
    registerEndpoint(apiEndpoint, () => (apiResult))

    it('1. can mount the component', async () => {
        const component = await mountSuspended(ClientsComponent)
        expect(component.text()).toContain('Search')
    })

    it('2. search can take in data', async () => {
        const component = await mountSuspended(ClientsComponent);
        const input = component.find('input')
        await input.setValue('abc')
        expect(input.element.value).equals('abc')
    })

    it('3. filters users from search data', async () => {
        const component = await mountSuspended(ClientsComponent);
        await useFetch(apiEndpoint);
        const input = component.find('input')
        await input.setValue('a')
        requestAnimationFrame(() => {
        expect(component.vm.filteredClients.value).equals({"name":"john smith", 
            "title":"developer", 
            "avatar": "https://avataaars.io/",
        })
    })
    })

    it('4. check search clears escape press', async () => {
        const component = await mountSuspended(ClientsComponent);
        const input = component.find('input')
        component.find('input').setValue('abc')
        input.trigger('keydown.esc')
        requestAnimationFrame(() => {
            expect(input.element.value).equals('')
        })
    })

    it('5. check clicking button clears search', async () => {
        const component = await mountSuspended(ClientsComponent);
        const input = component.find('input')
        component.find('input').setValue('abc')
        component.find('i').trigger('click')
        requestAnimationFrame(() => {
            expect(input.element.value).equals('')
        })
    })
})