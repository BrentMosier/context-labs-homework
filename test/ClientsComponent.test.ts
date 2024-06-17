import {mountSuspended, registerEndpoint} from '@nuxt/test-utils/runtime'
import {it, expect, describe, vi, beforeEach} from 'vitest'
import {ClientsComponent} from '#components'

// const apiResult = [
//     {"name":"john smith", 
//     "title":"developer", 
//     "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown",
// }]

// const apiEndpoint = 'http://localhost:3000/api/clients';
// registerEndpoint('http://localhost:3000/api/clients', () => (apiResult))

// Mock the fetch function

describe('Clients Component', () => {
    // let fetchSpy;

    // beforeEach(() => {})
    it('1. can mount the component', async () => {
        const component = await mountSuspended(ClientsComponent)
        expect(component.text()).toContain('Search')
    })

    //check isloading is false

    it('2. search can take in data', async () => {
        const component = await mountSuspended(ClientsComponent);
        const input = component.find('input')
        await input.setValue('abc')
        expect(input.element.value).equals('abc')
    })

    // //THIS ONE
    // it('3. fetches clients on mount', async () => {
        
    //     mockFetch.mockResolvedValueOnce({
    //         json: async () => apiResult,
    //     });

    //     const component = await mountSuspended(ClientsComponent);
    //     //wait for onmount to complete
    //     await component.vm.$nextTick()
    //     await component.vm.$nextTick()
    //     expect(mockFetch).toHaveBeenCalledWith(apiEndpoint);

    //     // const allClients = await $fetch("http://localhost:3000/api/clients")

    //     // // expect()
    //     // expect(allClients).equals(apiResult)

    //     // const input = component.find('input')
    //     // await input.setValue('a')
    //     // requestAnimationFrame(() => {
    //     //     expect(component.text()).toContain('No clients match your search')
    //     // })
    // })

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