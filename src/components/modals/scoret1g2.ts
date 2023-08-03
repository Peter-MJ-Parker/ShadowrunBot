import { Modal } from "../../types";
import { Client } from 'discord.js';
import { submitScoreModal } from "#operations";

const modal : Modal = {
    data: {
        name: 'scoret1g2'
    },
    execute: (interaction, client: Client) => {
        const currentTime = new Date(Date.now()).toLocaleString();
        console.log(currentTime + " " + interaction.user.username + " submitted scoret1g2");
        submitScoreModal(interaction, client, 1, 2);
    },
    cooldown: 2
}

export default modal;