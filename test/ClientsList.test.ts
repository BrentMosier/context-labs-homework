import {mountSuspended} from '@nuxt/test-utils/runtime'
import {it, expect, describe } from 'vitest'
import {ClientList} from '#components'

describe('Client List', () => { 
    it('1. Checks list exists', async () => {
        const component = await mountSuspended(ClientList, {props:{filteredClients:[
            {"name":"john smith", 
            "title":"developer", 
            "avatar": "https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Blank&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=Hoodie&clotheColor=Gray01&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Brown",
        }]}});
        expect(component.find('#list-item-0').classes()).toContain('v-list-item')
    })
})