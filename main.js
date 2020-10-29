const Discord = require('discord.js');
const client = new Discord.Client();

const config = require('./config.json')
const command = require('./command')
const dm = require('./private-message')

const fs = require('fs');

const newTextChannelAliases = ['ntc', 'newtextchannel', 'createtextchannel']

client.commands = new Discord.Collection()

client.on('ready', () => {
    console.log('The client is ready!')
  
    command(client, ['ping', 'test'], (message) => {
      message.channel.send('Calculating Ping...').then(resultMessage => {
          const ping = resultMessage.createdTimestamp - message.createdTimestamp

          resultMessage.edit(`Bot latency: ${ping}, API Latency: ${client.ws.ping}`)
      })
    })

    command(client, 'servers', (message) => {
        client.guilds.cache.forEach((guild) => {
          message.channel.send(
            `${guild.name} has a total of ${guild.memberCount} members`
          )
        })
    })

    command(client, 'noel', (message) => {
      message.channel.send('https://tenor.com/view/pussy-vagina-gif-13485442')
    })

    command(client, 'stfu', (message) => {
        message.channel.send('https://tenor.com/view/shut-up-mario-shut-the-fuck-up-be-quiet-stop-gif-15474108')
    })
    
    command(client, 'impossible', (message) => {
        message.channel.send('https://cdn.discordapp.com/attachments/753095171322675230/769840136393326602/unknown-28.png')
    })

    command(client, 'kill'  , (message) => {
        message.channel.send('https://i.imgflip.com/30jznr.jpg')
    })

    command(client, ['cc', 'clearcchannel'], (message) => {
        if (message.member.hasPermission('VIEW_CHANNEL')) {
            message.channel.messages.fetch().then(results => {
                message.channel.bulkDelete(results)
            })
        }
    })

    dm(client, 'ping', 'pong')

    command(client, ['ntc', 'newtextchannel', 'createtextchannel'], (message) => {
        var name = message.content
        if (message.member.hasPermission('MANAGE_GUILD')) {
            function finalName(name) {
                if (message.content.startsWith('f!ntc')) {
                    name = message.content.replace('f!ntc ', '')
                } else if (message.content.startsWith('f!newtextchannel')) {
                    name = message.content.replace('f!newtextchannel ', '')
                } else if (message.content.startsWith('f!createtextchannel')) {
                    name = message.content.replace('f!createtextchannel ', '')
                } else {
                    message.channel.send('Invalid Command')
                }
                return name;
            }

            message.guild.channels.create(finalName(name), {
                type: 'text',
            }).then((channel) => {
                console.log(channel)
            })
        } 
        else if (message.author.id === '628292848646881301'){
            function finalName(name) {
                if (message.content.startsWith('f!ntc')) {
                    name = message.content.replace('f!ntc ', '')
                } else if (message.content.startsWith('f!newtextchannel')) {
                    name = message.content.replace('f!newtextchannel ', '')
                } else if (message.content.startsWith('f!createtextchannel')) {
                    name = message.content.replace('f!createtextchannel ', '')
                } else {
                    message.channel.send('Invalid Command')
                }
                return name;
            }

            message.guild.channels.create(finalName(name), {
                type: 'text',
            }).then((channel) => {
                console.log(channel)
            })
        }
        else {
            message.channel.send('Could Not Make Channel Because you do not have perms, sucks to be you!')
        }
    })

    command(client, ['nvc', 'newvoicechannel', 'createvoicechannel'], (message) => {
        var vcname = message.content
        if (message.member.hasPermission('MANAGE_GUILD')){
            function finalName(vcname) {
                if (message.content.startsWith('f!nvc')) {
                    vcname = message.content.replace('f!nvc ', '')
                } else if (message.content.startsWith('f!newvoicechannel')) {
                    vcname = message.content.replace('f!newvoicechannel ', '')
                } else if (message.content.startsWith('f!createvoicechannel')) {
                    vcname = message.content.replace('f!createvoicechannel ', '')
                } else {
                    message.channel.send('Invalid Command')
                }
                return vcname;
            }

            message.guild.channels.create(finalName(vcname), {
                type: 'voice',
            }).then((channel) => {
                console.log(channel)
            })
        } 
        else if (message.author.id === '628292848646881301'){
            function finalName(name) {
                if (message.content.startsWith('f!nvc')) {
                    name = message.content.replace('f!nvc ', '')
                } else if (message.content.startsWith('f!newvoicechannel')) {
                    name = message.content.replace('f!newvoicechannel ', '')
                } else if (message.content.startsWith('f!createvoicechannel')) {
                    name = message.content.replace('f!createvoicechannel ', '')
                } else {
                    message.channel.send('Invalid Command')
                }
                return name;
            }
            message.guild.channels.create(finalName(vcname), {
                type: 'voice',
            }).then((channel) => {
                console.log(channel)
            })
        }
        else {
            message.channel.send('Could Not Make Channel Because you do not have perms, sucks to be you!')
        }
    })

    command(client, 'echo', (message) => {
        var echo = message.content.replace('f!echo ', '')
        var i = 0
        if (i > 500) {
            message.channel.send(echo)
            client.users.get('752088146463817728').send(echo)
            i += 1
        }
    })
})
  

client.login(config.token)
  