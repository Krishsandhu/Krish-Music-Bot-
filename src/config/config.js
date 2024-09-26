require('dotenv').config();


module.exports = {
    token: '',
    clientId: '143b00d8f26149d8829a05eaf23f05ee',
    guildId: '1204788264137924649',
    youtubeApiKey: process.env.AIzaSyAEH8lY6zT8D7gG4d9SzMaSpjNPuXZcb-c,
    mongoUri: process.env.mongodb+srv://Krish_2121:krish1234@cluster0.80tki7p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
,
    spotify: {
        clientId: process.env.143b00d8f26149d8829a05eaf23f05ee,
        clientSecret: process.env.11ad76b41d294faaace39b03d3a2ee22,
    },
    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
