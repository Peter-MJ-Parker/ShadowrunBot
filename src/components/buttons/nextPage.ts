import { pageButton } from '#operations';
import { Button } from '../../types';

const button: Button = {
    data: {
        name: 'next'
    },
    execute: async (interaction, client) => {
        pageButton(interaction, "next");
    },
    //cooldown: 10
}

export default button;