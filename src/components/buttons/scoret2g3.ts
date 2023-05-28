import { scoreMatch } from '#operations';
import { Button } from '../../types';

const button: Button = {
    data: {
        name: 'scoret2g3'
    },
    execute: async (interaction, client) => {
        scoreMatch(interaction, client, 2, 3);
    },
    //cooldown: 10
}

export default button;