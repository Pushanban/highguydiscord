module.exports = {
    name: 'youtube',
    description: "this send the youtube channel of the chief dev",
    execute(message, args){
        if(message.member.roles.cache.has('760718600259764244')){
            message.channel.send('https://www.youtube.com/channel/UCSYCCgVMOzj912D2AK537gw');
        } else {
            message.channel.send('You cant use this command coz u still low class. GET POPULARRRRRRR')
        }
    }
}